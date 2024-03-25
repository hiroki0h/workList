import styles from '@/src/app/styles/experience.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { LuX } from 'react-icons/lu';
import { DetailProps } from '@/src/interface';
import { STACK_TYPE } from '@/src/common/define';
import { LuCalculator } from 'react-icons/lu';
import { LuMapPin } from 'react-icons/lu';
import { LuBuilding } from 'react-icons/lu';

interface ExperienceProps {
    listData: any;
}
const Experience = ({ listData }: ExperienceProps) => {
    return (
        <section className={styles.experieeBox}>
            <h2 id="WorksExperience">Works Experience</h2>
            <ul>
                {listData?.map((list: any, index: number) => (
                    <li key={index}>
                        <div className={styles.experieeBoxHeader}>
                            <p className={styles.position}>{list.position}</p>
                            <p className={styles.time}>{list.time}</p>
                        </div>
                        <div className={styles.experieeBoxBottom}>
                            <div>
                                <p>
                                    <LuBuilding />
                                    {list.name}
                                </p>
                                <p>
                                    <LuMapPin />
                                    {list.area}
                                </p>
                            </div>
                            <p>
                                <LuCalculator />
                                {list.date}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Experience;
