'use client';
import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';
import styles from '@/src/app/styles/modalProject.module.css';
import { LuX } from 'react-icons/lu';
import { DetailProps } from '@/src/interface';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { toggleBodyOverflowHidden } from '@/src/app/hooks';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    detailData: DetailProps | undefined;
}

const ModalProject = ({ isOpen, setIsOpen, detailData }: ModalProps) => {
    const [modalContainer, setModalContainer] = useState<HTMLDivElement | null>(null);
    const body = document.querySelector('body');
    const [sliderData, setSliderData] = useState<any>([]);

    useEffect(() => {
        // const body = document.querySelector('body');
        const container = document.createElement('div');
        // container.classList.add(styles.modalContainer);
        setModalContainer(container);
        if (body && container) {
            if (!body.contains(container)) {
                // Check if container is not already a child of body
                body.appendChild(container);
            }
        }
        return () => {
            if (body && container && body.contains(container)) {
                // Check if container is a child of body before removing
                body.removeChild(container);
            }
        };
    }, []);

    useEffect(() => {
        toggleBodyOverflowHidden(isOpen);
    }, [isOpen]);
    useEffect(() => {
        if (detailData) {
            setSliderData(detailData?.data);
        }
    }, [detailData]);
    const onClose = () => {
        setIsOpen(false);
        body?.classList.remove('overflow-hidden');
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        accessibility: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        modalContainer &&
        ReactDOM.createPortal(
            isOpen && detailData ? (
                <div className={`${styles.modalRoot} ${isOpen ? styles.show : styles.hide}`} onClick={onClose}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalBody}>
                            <button onClick={onClose} className={styles.btnClose}>
                                <LuX />
                            </button>
                            <div className={styles.modalContent}>
                                <p className={styles.modalTitle}>
                                    <span>📎</span>
                                    {detailData.name}
                                </p>
                                <p className={styles.modalDesc} dangerouslySetInnerHTML={{ __html: detailData.desc }} />
                                <div className={styles.modalInfo}>
                                    <ul>
                                        <li>
                                            <span>작업 일자</span>
                                            <p>
                                                {detailData.startAt} ~ {detailData.endAt}
                                            </p>
                                        </li>
                                        <li>
                                            <span>작업 기여도</span>
                                            <p>{detailData.position}</p>
                                        </li>
                                        <li>
                                            <span>작업 스킬</span>
                                            <p>{detailData.stack}</p>
                                        </li>
                                    </ul>
                                    {detailData.url && (
                                        <Link
                                            href={detailData.url}
                                            className={styles.btnRadius}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            WEBSITE
                                        </Link>
                                    )}
                                </div>
                                {sliderData.length === 1 ? (
                                    <div className={styles.sliderRoot}>
                                        <div className={styles.thumbRoot}>
                                            <div
                                                className={styles.thumb}
                                                style={{
                                                    backgroundImage: `url(/images${sliderData[0].image})`,
                                                }}
                                            />
                                            <p className={styles.caption}>{sliderData[0].caption}</p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.sliderRoot}>
                                        <Slider {...settings}>
                                            {sliderData.map((item: any, index: number) => (
                                                <div key={index} className={styles.thumbRoot}>
                                                    <div
                                                        className={styles.thumb}
                                                        style={{
                                                            backgroundImage: `url(/images${item.image})`,
                                                        }}
                                                    />
                                                    <p className={styles.caption}>{item.caption}</p>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null,
            modalContainer
        )
    );
};

export default ModalProject;
