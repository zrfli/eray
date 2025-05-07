"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Hakkimizda() {
    return (
        <>
            <Header />
            <section className="w-full h-64 bg-no-repeat bg-cover bg-center relative border-b bg-gray-300 bg-blend-multiply border-gray-700 bg-[url('/icheader-bg.jpg')]">
                <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
                    <h1 className="mb-4 max-w-4xl text-3xl font-extrabold text-white">Hakkımızda</h1>
                </div>
            </section>
            <section className="flex relative z-20 min-h-96 justify-center px-4 mx-auto max-w-screen-lg">
                <div className="w-full py-6">
                    <div className="space-y-4 text-gray-900 dark:text-gray-300 h-full">
                        <span>
                        Eray  sektöründe faaliyet gösteren ve sadece üniversitelere yönelik yerli ve milli yazılımlar geliştiren ve sektöründe lider olarak tanınan bir yazılım şirketidir.


Üniversitelerin ihtiyaçlarına ve gereksinimlerine en uygun çözümleri üretme konusunda 16 yıllık büyük bir deneyime ve uzmanlığa sahibiz. Sahip olduğu referanslar ve biriktirdiği tecrübeler sayesinde kullanıcılarına daima uygun, güvenilir ve hızlı çözümler sunmayı başarmıştır.


İlkelerimiz doğrultusunda istikrarlı bir şekilde büyüyoruz ve çalıştığımız üniversiteler ile uzun vadeli iş birliği yapıyoruz. Mükemmellik ve tüm işleri zamanında yapmak şirketimizin doğrudan bir yansımasıdır. Üniversitelerin ihtiyaçlarını karşılamak için yeni özellikler ve işlevler içerecek şekilde sürekli olarak yazılımlarımızı geliştirmeye devam ediyoruz.


Sahip olduğumuz referanslar ve tecrübeler sayesinde müşterilerimize daima uygun, güvenilir ve hızlı çözümler sunmayı başarıyoruz. Gelecekte de üniversite yazılımları ve hizmetleri konusunda en yeni teknoloji ve esnek çözümleri üreterek bu sektörde öncülük etmeye devam edeceğiz. Dünya çapında hizmet verebilecek teknolojik altyapı ve tecrübeye sahip olan şirketimiz, aynı zamanda yurt dışındaki üniversitelerinde yazılım ihtiyaçlarını çok yönlü karşılayabilecek parametrik geniş kapsamlı ve çoklu dil desteği olan bir yazılım hizmeti sunmaktadır.


En büyük ilkelerimiz paydaşlarımıza daha iyi hizmet verebilmek amacıyla yeni ürünler tasarlamak, mevcut ürünlerimizi daha yetenekli kılmak ve değişen teknolojiye uyum sağlamaktır. Paydaşlarımıza karşı dürüst, doğru, açık ve tutarlı olmaya önem veriyoruz ve bu ilkeler doğrultusunda emin adımlara ilerlediğimize inanıyor ve güveniyoruz.
                        </span>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}