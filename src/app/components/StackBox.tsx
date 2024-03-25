'use client';
import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/src/app/styles/stackBox.module.css';
import { FaBeer } from 'react-icons/fa';

const StackBox = () => {
    const stackList = [
        {
            src: 'html5.png',
        },
        {
            src: 'css3.png',
        },
        {
            src: 'sass.png',
        },
        {
            src: 'js.png',
        },
        {
            src: 'ts.png',
        },
        {
            src: 'jquery.png',
        },
        {
            src: 'react.png',
        },
        {
            src: 'next.png',
        },
        {
            src: 'redux.png',
        },
        {
            src: 'recoil.png',
        },
        {
            src: 'swr.png',
        },
        {
            src: 'reactquery.png',
        },
        {
            src: 'zustand.png',
        },
        {
            src: 'firebase.png',
        },
    ];
    return (
        <section className={styles.stackBox}>
            <h2 id="MyTechStack">My Tech Stack</h2>
            <ul>
                {stackList.map((item, index) => (
                    <li key={index}>
                        <Image
                            src={`/images/stack/${item.src}`}
                            alt={`${item.src}`}
                            quality={100}
                            fill
                            sizes="(max-width: 80px) 80px, 80px"
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default StackBox;
