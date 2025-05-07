"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Hakkimizda() {
    return (
        <>
            <Header />
            <section className="w-full h-64 bg-no-repeat bg-cover bg-center relative border-b bg-gray-300 bg-blend-multiply border-gray-700 bg-[url('/icheader-bg.jpg')]">
                <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
                    <h1 className="mb-4 max-w-4xl text-3xl font-extrabold text-white">KVKK</h1>
                </div>
            </section>
            <section className="flex relative z-20 min-h-96 justify-center px-4 mx-auto max-w-screen-lg">
                <div className="w-full py-6">
                    <div className="space-y-4 text-gray-900 dark:text-gray-300 h-full">
                        <span>
                        Eray Yazılım olarak faaliyet gösterdiğimiz ve bilgiye istenilen zamanda rahatlıkla ulaşılan yazılım hizmetleri alanında bilgi güvenliğini en üst seviyede tutmak için;

a) Gizlilik: Bilginin sadece yetkili kişiler tarafından erişilebilir olması,
b) Bütünlük: Bilginin yetkisiz değiştirmelerden korunması ve değiştirildiğinde farkına varılması,
c) Erişilebilirlik: Bilginin yetkili kullanıcılar tarafından gerek duyulduğu an kullanılabilir olması.

Şirketimizde üretilen bilginin en üst seviyelerde güvenlik anlayışı içerisinde korunması gerektiği bilinci ile hareket eden PROLİZ Bilgisayar Yazılım Donanım
Hiz. Tic. Ltd. Şti.; misyon ve vizyonuna bağlı kalarak bilgi güvenliği konseptinin esasını oluşturan basılı ve elektronik ortamdaki bilgilerin yasal mevzuat
ışığında ve risk metotları kullanılarak “gizlilik, bütünlük ve erişilebilirlik” ilkelerine göre yönetilmesi amacıyla;

. Bilgi güvenliği standartlarının gerekliliklerini yerine getirmek,

. Bilgi güvenliği Yönetim Sistemini sürekli gözden geçirmek ve iyileştirmek,

. Bilgi güvenliği farkındalığını artırmak için, teknik ve davranışsal yetkinlikleri geliştirecek şekilde eğitimler gerçekleştirmek, ana politikalar geliştirmektedir.

Sonuç olarak Bilgi güvenliği Politikasının amacı bilgi varlıklarını korumak, bilginin ve verinin gizliliğini sağlamak, bütünlüğünü bozmaya çalışacak yetkisiz
kişilerin erişimine karşı korumak ve böylece şirketimizin güvenini ve itibarını sarsacak durumları bertaraf etmeyi

Taahhüt ederiz.
                        </span>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}