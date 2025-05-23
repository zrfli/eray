"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Hakkimizda() {
    return (
        <>
            <Header />
            <section className="w-full h-64 bg-no-repeat bg-cover bg-center relative border-b bg-gray-300 bg-blend-multiply border-gray-700 bg-[url('/red.png')]">
                <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
                    <h1 className="mb-4 max-w-4xl text-3xl font-extrabold text-white">KVKK</h1>
                </div>
            </section>
            <section className="flex relative z-20 min-h-96 justify-center px-4 mx-auto max-w-screen-lg">
                <div className="flex flex-col gap-10 pt-10">
                    <div><span>
                    İstiklal ve Hürriyet Partisi olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında; üyelik başvurularınız, iletişim bilgileriniz ve kimlik verileriniz başta olmak üzere kişisel verileriniz, sadece başvuru süreçlerinin yürütülmesi, yasal yükümlülüklerin yerine getirilmesi ve parti faaliyetleri hakkında bilgilendirme yapılması amacıyla işlenmekte ve yalnızca yetkili kişi ve kurumlarla paylaşılmaktadır. Kişisel verilerinizle ilgili her türlü talep için bizimle iletişime geçebilirsiniz.
                    </span></div>
                </div>
            </section>
            <Footer />
        </>
    );
}