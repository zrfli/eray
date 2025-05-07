"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Hakkimizda() {
    return (
        <>
            <Header />
            <section className="w-full h-64 bg-no-repeat bg-cover bg-center relative border-b bg-gray-300 bg-blend-multiply border-gray-700 bg-[url('/icheader-bg.jpg')]">
                <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
                    <h1 className="mb-4 max-w-4xl text-3xl font-extrabold text-white">Hizmet Yönetim Sistemi Politikası                    </h1>
                </div>
            </section>
            <section className="flex relative z-20 min-h-96 justify-center px-4 mx-auto max-w-screen-lg">
                <div className="w-full py-6">
                    <div className="space-y-4 text-gray-900 dark:text-gray-300 h-full">
                        <span>
                        Sürekli olarak Hizmet Yönetimi Sistemi’nin etkinliğini iyileştirmek,

Var olan süreçleri zenginleştirmek için ISO/IEC 20000-1 ile paralel hale getirmek,

Hizmet Yönetim Sisteminin sürdürülebilir olmasını sağlamak,

Bilgi Teknolojileri Hizmetlerini ölçülebilir kılmak ve gözden geçirmek,

Müşterilerden gelen bildirimleri değerlendirmek, çıkarımlar yaparak geri bildirimlerde bulunmak.
                        </span>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}