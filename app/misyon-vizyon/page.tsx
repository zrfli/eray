"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Hakkimizda() {
    return (
        <>
            <Header />
            <section className="w-full h-64 bg-no-repeat bg-cover bg-center relative border-b bg-gray-300 bg-blend-multiply border-gray-700 bg-[url('/red.png')]">
                <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
                    <h1 className="mb-4 max-w-4xl text-3xl font-extrabold text-white">Misyon ve Vizyon</h1>
                </div>
            </section>
            <section className="flex relative z-20 min-h-96 justify-center px-4 mx-auto max-w-screen-lg">
                <div className="flex flex-col gap-10 pt-10">
                    <div><span>
                    <b>Misyonumuz</b> Türkiye’nin her ferdine eşit fırsatlar sunmak, özgürlük, adalet ve halk iradesi temelinde demokratik bir yönetimi inşa etmek. Halkla birlikte karar alan, şeffaf, katılımcı ve çözüm odaklı bir siyaset anlayışıyla milletin gerçek temsilcisi olmak.
                    </span></div>
                    <div><span>
                    <b>Vizyonumuz</b> Toplumsal barışı, ekonomik kalkınmayı ve temel hak ve özgürlükleri esas alan; bağımsız, güçlü ve çağdaş bir Türkiye inşa etmek. Ulusal iradenin söz sahibi olduğu, liyakatin esas alındığı ve her vatandaşın kendini güvende hissettiği bir gelecek için çalışmak.
                    </span></div>
                </div>
            </section>
            <Footer />
        </>
    );
}