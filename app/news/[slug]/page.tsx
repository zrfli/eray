"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useMemo, useState } from "react";

export default function Main({ params }: { params: Promise<{ slug: string }> }) {
    const [randomTitle, setRandomTitle] = useState('');
    const [newsSlug, setNewsSlug] = useState('');

    const data = useMemo(() => [
        { "title": "Yapay Zeka ve Sağlık Sektörü 2024" },
        { "title": "Eğitimde Teknoloji 2024" },
        { "title": "Dijital Dönüşümün Geleceği 2024" },
        { "title": "Blockchain ve Finans 2024" },
        { "title": "Sürdürülebilir Enerji Yatırımları 2024" },
        { "title": "Veri Gizliliği ve Güvenlik Trendleri 2024" },
        { "title": "İnternette Yeni Regülasyonlar 2024" },
        { "title": "Yenilikçi Teknolojilerle Eğitimde Dönüşüm 2024" },
        { "title": "Mobil Uygulama Geliştirme Trendi 2024" },
        { "title": "E-ticaretin Geleceği 2024" }
    ], []);
    

    useEffect(() => {
        const getParams = async () => {
            const resolvedParams = await params;
            setNewsSlug(resolvedParams.slug);
    
            const randomIndex = Math.floor(Math.random() * data.length);
            setRandomTitle(data[randomIndex].title);
        };
    
        getParams();
    }, [params, data]);
    

    return (
        <>
            <Header />
            <section className="w-full h-64 bg-no-repeat bg-cover bg-center relative border-b bg-gray-300 bg-blend-multiply border-gray-700 bg-[url('/red.png')]">
                <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
                    <h1 className="mb-4 max-w-4xl text-3xl font-extrabold text-white">{randomTitle ?? 'Error'}</h1>
                    <p className="font-normal text-gray-300">{newsSlug ?? 'Error'}</p>
                </div>
            </section>
            <section className="flex relative z-20 min-h-96 justify-center px-4 mx-auto max-w-screen-lg">
                <div className="w-full py-6">
                    <div className="space-y-4 text-gray-900 dark:text-gray-300 h-full">
                        <span>
                            Dijital dönüşüm, son yıllarda iş dünyasında yaşanan en büyük değişimlerden biri olarak karşımıza çıkıyor. Özellikle 2024 yılı itibarıyla, teknoloji dünyasında yaşanan gelişmelerin, şirketlerin iş yapma biçimlerini köklü bir şekilde dönüştürdüğü görülüyor. Akıllı teknolojiler, yapay zeka (AI), bulut bilişim, blockchain ve nesnelerin interneti (IoT), iş süreçlerinin daha verimli, hızlı ve maliyet etkin hale gelmesini sağlıyor. Ancak bu dönüşüm sadece teknolojik değil, aynı zamanda kültürel ve operasyonel değişiklikleri de beraberinde getiriyor.
                        </span>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}