import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import News from "@/hooks/news.json"
import anon from "@/hooks/anon.json"
import events from "@/hooks/events.json"
import research from "@/hooks/research.json"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstagramCard from "@/components/Instagram";
import { Application } from "@/components/Applications";

export default function Main() {
  return (
    <>
      <Header />
       <section className="bg-neutral-400 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-[url('/red.png')]">
          <div className="relative mx-auto max-w-screen-xl px-4 py-10 xl:px-0">
              <div className="mb-6 max-w-screen-md lg:mb-0">
              <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">Milletin Sesi, Hürriyetin Güvencesi: Partimize Üye Olun!</h2>
              <p className="mb-3 font-light text-white text-sm md:text-lg">“Milletin Sesi, Hürriyetin Güvencesi!” diyen İstiklal ve Hürriyet Partisi’ne katılın.</p>
              <Application />
              </div>
          </div>
        </section>
      <section aria-label="quickaccess" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl dark:text-white">Hızlı Erişim</h1>
                </div>
                <div id="quickAccessContent" className="grid gap-2 grid-cols-2 lg:grid-cols-4">
                    <Link href="#" className="hover:bg-neutral-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-neutral-50 p-3 shadow border dark:border-neutral-700 border-neutral-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Politika</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="#" className="hover:bg-neutral-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-neutral-50 p-3 shadow border dark:border-neutral-700 border-neutral-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Kütüphane</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="#" className="hover:bg-neutral-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-neutral-50 p-3 shadow border dark:border-neutral-700 border-neutral-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Yönetim</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="#" className="hover:bg-neutral-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-neutral-50 p-3 shadow border dark:border-neutral-700 border-neutral-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Bilimsel Faaliyetler</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="#" className="hover:bg-neutral-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-neutral-50 p-3 shadow border dark:border-neutral-700 border-neutral-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">E-Bülten</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="#" className="hover:bg-neutral-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-neutral-50 p-3 shadow border dark:border-neutral-700 border-neutral-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Destek</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="#" className="hover:bg-neutral-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-neutral-50 p-3 shadow border dark:border-neutral-700 border-neutral-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Uluslararası Ofis</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                   <Link href="#" className="hover:bg-neutral-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-neutral-50 p-3 shadow border dark:border-neutral-700 border-neutral-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Tüzük</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                  <Link href="#" className="hover:bg-neutral-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-neutral-50 p-3 shadow border dark:border-neutral-700 border-neutral-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Tarihçe</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                  <Link href="#" className="hover:bg-neutral-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-neutral-50 p-3 shadow border dark:border-neutral-700 border-neutral-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Yazılar</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                  <Link href="#" className="hover:bg-neutral-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-neutral-50 p-3 shadow border dark:border-neutral-700 border-neutral-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Bütçe Yönetimi</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                  <Link href="#" className="hover:bg-neutral-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-neutral-50 p-3 shadow border dark:border-neutral-700 border-neutral-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Başkanın Mesajı</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
        <section aria-label="announcements" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
                <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl dark:text-white">Duyurular</h1>
                </div>
                <div id="announcementsContent" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {anon.map((data, id) => (
                    <article key={id} className="flex">
                    <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-red-700 text-white">
                    <div className="pt-2 text-center text-sm font-medium">Mayıs</div>
                    <div className="text-right text-4xl font-bold">15</div>
                    </div>
                    <div className="space-y-2">
                    <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">{data.data.title}</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-neutral-400"></p>
                    <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-neutral-300 hover:no-underline">Devamını oku</Link>
                    </div>
                    </article>
                  ))}
                </div>
            </div>
        </section>
        <section aria-label="apply" className="py-6">
            <div className="px-4 mx-auto max-w-screen-xl">
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="col-span-6 text-center lg:text-left">
                    <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-black dark:text-white md:text-5xl lg:text-6xl underline">Gelecek için bir adım...</h2>
                </div>
                <div className="col-span-6">
                    <video id="applyVideoContent" className="mx-auto h-64 w-full max-w-xl sm:h-96" autoPlay controls muted loop playsInline>
                        <source src="/video.mp4" type="video/mp4" />
                    </video>
                </div>
                </div>
            </div>
        </section>
        <section aria-label="news" className="py-12">
          <div className="px-4 mx-auto max-w-screen-xl">
              <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl dark:text-white">Haberler</h1>
              </div>
              <div id="newsContent" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {News.map((data, id) => (
                <article key={id} className="relative">
                    <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="flex justify-end">
                    <Image src={'/red-cover.png'} className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                    <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">20/07/2024</div>
                    </Link>
                    <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
                    <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="line-clamp-2 hover:underline">{data.data.title}</Link>
                    </h2>
                    <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-neutral-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
              ))}
              </div>
          </div>
      </section>
      <InstagramCard />
      <section aria-label="events" className="py-12">
        <div className="px-4 mx-auto max-w-screen-xl">
            <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl dark:text-white">Etkinlikler</h1>
            </div>
            <div id="eventsContent" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((data, id) => (
                    <article key={id} className="flex">
                    <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-black text-white dark:text-black dark:bg-white">
                    <div className="pt-2 text-center text-sm font-medium">Temmuz</div>
                    <div className="text-right text-4xl font-bold">21</div>
                    </div>
                    <div className="space-y-2">
                    <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">{data.data.title}</h2>
                    </Link>
                    <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-neutral-300 hover:no-underline">Detaylar</Link>
                    </div>
                </article>
                  ))}
            </div>
        </div>
    </section>
    <section aria-label="research" className="py-12">
        <div className="px-4 mx-auto max-w-screen-xl">
            <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl dark:text-white">Araştırmalar</h1>
            </div>
            <div id="researchContent" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {research.map((data, id) => (
              <article key={id} className="relative">
                <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="flex justify-end">
                <Image src={'/red-cover.png'} className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">02/06/2024</div>
                </Link>
                <h2 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
                <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="line-clamp-2 hover:underline">{data.data.title}</Link>
                </h2>
                <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-neutral-300 hover:no-underline text-xs">Devamını oku</Link>
              </article>  
              ))}
            </div>
        </div>
    </section>
    <Footer />
    </>
  );
}
