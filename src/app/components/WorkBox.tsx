'use client';
import React, { useState, SetStateAction, Dispatch } from 'react';
import styles from '@/src/app/styles/workBox.module.css';
import { STACK_TYPE } from '@/src/common/define';
interface WorkBoxProps {
    workList: any;
    stackList: any;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    setId: Dispatch<SetStateAction<number>>;
    listDone: boolean;
    count: number;
    moreActionEvent: () => void;
    listFilterEvent: (filter: number) => void;
}
const WorkBox = ({
    workList,
    stackList,
    setIsOpen,
    setId,
    listDone,
    count,
    moreActionEvent,
    listFilterEvent,
}: WorkBoxProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const categoryList = [
        { label: 'All' },
        { label: 'React' },
        { label: 'NextJs' },
        { label: 'TypeScript' },
        { label: 'SEO' },
        { label: 'ETC' },
        { label: 'Publishing' },
    ];
    return (
        <section className={styles.workBox}>
            <h2 id="MyWorks">My Works</h2>
            <div className={styles.categoryWrap}>
                <select
                    onChange={(event) => {
                        const selectedIndex = event.target.value;
                        listFilterEvent(selectedIndex === '6' ? 7 : parseInt(selectedIndex));
                        setActiveIndex(parseInt(selectedIndex));
                    }}
                >
                    {categoryList.map((item, index) => (
                        <option key={index} className={activeIndex === index ? styles.isActive : ''} value={index}>
                            {item.label} {index === 0 && `(${count})`}
                        </option>
                    ))}
                </select>
                <ul>
                    {categoryList.map((item, index) => (
                        <li key={index} className={activeIndex === index ? styles.isActive : ''}>
                            <button
                                onClick={() => {
                                    listFilterEvent(index === 6 ? 7 : index);
                                    setActiveIndex(index);
                                }}
                            >
                                {item.label} {index === 0 && `(${count})`}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <ul className={styles.workList}>
                {workList.map((list: any, index: number) => (
                    <li
                        key={index}
                        onClick={() => {
                            setIsOpen(true);
                            setId(list.id);
                        }}
                    >
                        <div className={styles.thumbWrap}>
                            <div
                                className={styles.thumb}
                                style={{
                                    backgroundImage: `url(/images/listThumb/${list.imgName})`,
                                }}
                            />
                        </div>
                        <div className={styles.desc}>
                            <p className={styles.workTitle}>{list.name}</p>
                            <div className={styles.workDesc}>
                                {stackList.rows?.map((item: any, index: number) => {
                                    const showStackName = item.type === STACK_TYPE.ETC ? list.stackName : item.name;
                                    return (
                                        list.stack?.includes(item.type) && (
                                            <span key={index} className={styles.stack}>
                                                {showStackName}
                                            </span>
                                        )
                                    );
                                })}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {listDone ? null : (
                <button className={styles.moreBtn} onClick={moreActionEvent}>
                    더보기
                </button>
            )}
        </section>
    );
};

export default WorkBox;
