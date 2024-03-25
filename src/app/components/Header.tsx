'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/src/app/styles/header.module.css';
import { LuAlignJustify } from 'react-icons/lu';
import { FiX } from 'react-icons/fi';
import { toggleBodyOverflowHidden } from '@/src/app/hooks';

const Header = () => {
    const [mobileOn, setMobileOn] = useState<boolean>(false);
    const navButtonClickEvent = () => {
        setMobileOn(!mobileOn);
    };
    useEffect(() => {
        toggleBodyOverflowHidden(mobileOn);
    }, [mobileOn]);
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} ${mobileOn ? styles.navOn : ''}`}>
                <div>
                    <Link href="/" className={styles.navLogo}>
                        <Image src="/images/logo.gif" alt="" width={40} height={40} />
                    </Link>
                    <button onClick={navButtonClickEvent}>{mobileOn ? <FiX /> : <LuAlignJustify />}</button>
                </div>
                <ul className={mobileOn ? styles.mobileOn : styles.mobileOff}>
                    <li>
                        <Link
                            href="#MyTechStack"
                            onClick={() => {
                                setMobileOn(false);
                            }}
                        >
                            Tech Stack
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#MyWorks"
                            onClick={() => {
                                setMobileOn(false);
                            }}
                        >
                            Works
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#WorksExperience"
                            onClick={() => {
                                setMobileOn(false);
                            }}
                        >
                            Experience
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
