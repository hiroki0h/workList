import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/src/app/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: '최재연 포트폴리오',
    description: '프론트엔드 최재연은 어디서 무슨 일을 어떻게 했을까',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
