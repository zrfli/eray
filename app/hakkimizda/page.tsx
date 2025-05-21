"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Hakkimizda() {
    return (
        <>
            <Header />
            <section className="w-full h-64 bg-no-repeat bg-cover bg-center relative border-b bg-gray-300 bg-blend-multiply border-gray-700 bg-[url('/red.png')]">
                <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
                    <h1 className="mb-4 max-w-4xl text-3xl font-extrabold text-white">Hakkımızda</h1>
                </div>
            </section>
            <section className="flex relative z-20 min-h-96 justify-center px-4 mx-auto max-w-screen-lg">
                <div className="flex flex-col gap-10 pt-10">
                    <div><span>
                    İstiklal ve Hürriyet Partisi, halkın sesi olmak ve milletin iradesini siyasete taşımak amacıyla kurulmuştur.
                    </span></div>
                    <div><span>
                    Adaletin, özgürlüğün ve milli egemenliğin teminatı olan partimiz; şeffaflık, hesap verebilirlik ve katılımcı demokrasi ilkelerini benimseyerek Türkiye yi daha adil, güçlü ve özgür bir geleceğe taşımayı hedeflemektedir.
                    </span></div>
                    <div><span>
                    Köklü değerlerimizden ilham alıyor, çağın gereklerine uygun politikalarla halkımızın tüm kesimlerine dokunan çözümler üretiyoruz.
                    </span></div>
                    <div><span>
                    İstiklal mücadelemizden aldığımız güçle, her vatandaşımızın onurlu bir yaşam sürmesini sağlamak için çalışıyor; Söz de karar da milletindir anlayışıyla Türkiye yi yarınlara birlikte taşıyoruz.
                    </span></div>
                </div>
            </section>
            <Footer />
        </>
    );
}