'use client';
import React, { useState, useEffect } from 'react';
import styles from '@/src/app/styles/page.module.css';
import Image from 'next/image';
import { doc, getDoc } from '@firebase/firestore';
import fireStore from '@/src/firebase/firestore';
import ModalProject from '@/src/app/components/ModalProject';
import { collection, query, getDocs } from 'firebase/firestore';
import { WorkListProps, StackListProps, DetailProps } from '@/src/interface';
import StackBox from '@/src/app/components/StackBox';
import WorkBox from '@/src/app/components/WorkBox';
import Experience from '@/src/app/components/Experience';
import LodingImage from '@/src/app/components/LodingImage';
import { toggleBodyOverflowHidden } from '@/src/app/hooks';

export default function Home() {
    const [workList, setWorkList] = useState<any>([]);
    const [stackList, setStackList] = useState<StackListProps>();
    const [expericeList, setExpericeList] = useState<any>([]);
    const [id, setId] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [detailData, setDetailData] = useState<DetailProps>();
    const perPage: number = 6;
    const [clickCount, setClickCount] = useState<number>(1);
    const [viewWorkList, setViewWorkList] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [listDone, setListDone] = useState<boolean>(false);
    const getData = async () => {
        const workList = await getDoc(doc(fireStore, 'works', 'list'));
        const stackList = await getDoc(doc(fireStore, 'works', 'stackList'));
        const expericeList = await getDoc(doc(fireStore, 'works', 'experice'));
        setWorkList(workList.data() as WorkListProps);
        setStackList(stackList.data() as StackListProps);
        // setWorkList(workListData);
        // setStackList(stackList.data());
        setExpericeList(expericeList.data());
    };
    const getDetail = async () => {
        const queryData = query(collection(fireStore, `works/list/${id}`));
        const querySnapshot = await getDocs(queryData);
        querySnapshot.forEach((doc) => {
            let docData = doc.data() as DetailProps | undefined;
            docData && setDetailData(docData);
        });
    };
    const generateArray = (start: number, end: number) => {
        if (workList.rows) {
            setViewWorkList(workList.rows.slice(start, end));
            setLoading(true);
        }
    };
    const moreActionEvent = () => {
        setLoading(false);
        setClickCount((prevCount) => prevCount + 1);
    };
    const listFilterEvent = (filter: number) => {
        if (filter === 0) {
            setClickCount(1);
            generateArray(0, perPage);
            setListDone(false);
        } else {
            const filteredList = workList.rows.filter((item: any) => item.stack?.includes(filter));
            setListDone(true);
            setViewWorkList(filteredList);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    useEffect(() => {
        generateArray(0, perPage);
    }, [workList, perPage]);

    useEffect(() => {
        if (workList.rows?.length - perPage * (clickCount - 1) <= perPage) {
            generateArray(0, workList.rows.length);
            setListDone(true);
        } else {
            generateArray(0, perPage * clickCount);
        }
    }, [clickCount]);
    useEffect(() => {
        toggleBodyOverflowHidden(!loading);
    }, [loading]);
    useEffect(() => {
        if (isOpen) {
            getDetail();
        }
    }, [isOpen]);

    return (
        <>
            {!loading && <LodingImage />}
            <main className={styles.main}>
                <section className={styles.mainBox}>
                    <div className={styles.mainImg}>
                        <span />
                    </div>
                    <div className={styles.mainTitle}>
                        <p>Hi, I am</p>
                        <p className={styles.mainName}>최재연</p>
                        <h1>
                            <span>Front-End</span>
                            <span className="align_end">Developer</span>
                        </h1>
                        <p className={styles.descText}>
                            새로운 기술들을 사용해보는 것을 좋아합니다.
                            <br />
                            지속 가능한 개발자를 희망하고, 효율적이고 읽기 쉬운 코드를 작성하고자 노력합니다.
                        </p>
                    </div>
                </section>
                <StackBox />
                {loading && (
                    <WorkBox
                        workList={viewWorkList}
                        stackList={stackList}
                        setIsOpen={setIsOpen}
                        setId={setId}
                        listDone={listDone}
                        count={workList.rows.length}
                        moreActionEvent={moreActionEvent}
                        listFilterEvent={listFilterEvent}
                    />
                )}
                <Experience listData={expericeList.rows} />
            </main>
            {isOpen ? <ModalProject isOpen={isOpen} setIsOpen={setIsOpen} detailData={detailData} /> : null}
        </>
    );
}
