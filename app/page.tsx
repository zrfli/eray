import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import News from "@/hooks/news.json"
import anon from "@/hooks/anon.json"
import events from "@/hooks/events.json"
import research from "@/hooks/research.json"
import ach from "@/hooks/ach.json"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstagramCard from "@/components/Instagram";

export default function Main() {
  return (
    <>
      <Header />
      <section>
        <Image src={"/slider.webp"} width={1500} height={400} alt="" />
      </section>
      <section aria-label="quickaccess" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl dark:text-white">Hızlı Erişim</h1>
                </div>
                <div id="quickAccessContent" className="grid gap-2 grid-cols-2 lg:grid-cols-4">
                    <Link href="https://nisantasi.edu.tr/ogrenci-dekanliğ" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Öğrenci Dekanlığı</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Kütüphane" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Kütüphane</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Akademik Takvim" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Akademik Takvim</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Bilimsel Faaliyetler" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Bilimsel Faaliyetler</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-E-Bülten" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">E-Bülten</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-SEM" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">SEM</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-OBİS" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">OBİS</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Sanal Kampüs" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Sanal Kampüs</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-BolognLink / Ders İçerikleri" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">BolognLink / Ders İçerikleri</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/Kariyer Merkezi" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Kariyer Merkezi</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Formlar" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Formlar</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Lisansüstü" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Lisansüstü</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Yatay Geçiş" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Yatay Geçiş</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Özel Yetenek" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Özel Yetenek</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-DGS" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">DGS</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                    <Link href="https://nisantasi.edu.tr/ogrenci-Uluslararası Ofis" className="hover:bg-gray-100 dark:hover:bg-neutral-800/80 dark:bg-neutral-800 mb-3 flex items-center justify-between rounded-lg border-l-8 bg-gray-50 p-3 shadow border dark:border-neutral-700 border-gray-400" target="_blank" rel="noopener noreferrer">
                        <span className="text-black dark:text-white text-xs md:text-base font-medium">Uluslararası Ofis</span>
                        <IoArrowForward className="text-black dark:text-white h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
        <section className="bg-gray-500 bg-cover bg-center bg-no-repeat bg-blend-multiply bg-[url('/222.jpeg')]">
          <div className="relative mx-auto max-w-screen-xl px-4 py-10 xl:px-0">
              <div className="mb-6 max-w-screen-md lg:mb-0">
              <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">Üniversite Adaylarına Merhaba!</h2>
              <p className="mb-3 font-light text-gray-300 text-sm md:text-lg">Üniversite yolculuğu heyecan vericidir ve şu andLink bu yolculuğun eşiğindesiniz. KarşınızLink pek çok seçenek çıkacak, bazen karmaşık görünebilir. Önemli olan kendinizi tanımak ve ilgi duyduğunuz alanları keşfetmektir.</p>
              </div>
          </div>
        </section>
        <section aria-label="announcements" className="py-12">
            <div className="px-4 mx-auto max-w-screen-xl">
                <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Duyurular</h1>
                </div>
                <div id="announcementsContent" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {anon.map((data, id) => (
                    <article key={id} className="flex">
                    <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden bg-[#6A5B3E] text-white">
                    <div className="pt-2 text-center text-sm font-medium">Haziran</div>
                    <div className="text-right text-4xl font-bold">24</div>
                    </div>
                    <div className="space-y-2">
                    <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer">
                    <h2 className="text-lg font-bold leading-tight text-black dark:text-white line-clamp-2 hover:underline">{data.data.title}</h2>
                    </Link>
                    <p className="text-xs line-clamp-2 dark:text-gray-400"></p>
                    <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Devamını oku</Link>
                    </div>
                    </article>
                  ))}
                </div>
            </div>
        </section>
        <section aria-label="news" className="py-12">
          <div className="px-4 mx-auto max-w-screen-xl">
              <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Haberler</h1>
              </div>
              <div id="newsContent" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {News.map((data, id) => (
                <article key={id} className="relative">
                    <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="flex justify-end">
                    <Image src={data.data.imageUrl} className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                    <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">20/07/2024</div>
                    </Link>
                    <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="line-clamp-2 hover:underline">{data.data.title}</Link>
                    </h2>
                    <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
                </article>
              ))}
              </div>
          </div>
      </section>
      <InstagramCard />
      <section aria-label="events" className="py-12">
        <div className="px-4 mx-auto max-w-screen-xl">
            <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Etkinlikler</h1>
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
                    <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="text-xs font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">Detaylar</Link>
                    </div>
                </article>
                  ))}
            </div>
        </div>
    </section>
    <section aria-label="research" className="py-12">
        <div className="px-4 mx-auto max-w-screen-xl">
            <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Araştırmalar</h1>
            </div>
            <div id="researchContent" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {research.map((data, id) => (
              <article key={id} className="relative">
                <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="flex justify-end">
                <Image src={data.data.imageUrl} className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
                <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">02/06/2024</div>
                </Link>
                <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="line-clamp-2 hover:underline">{data.data.title}</Link>
                </h2>
                <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
              </article>  
              ))}
            </div>
        </div>
    </section>
      <section aria-label="achievements" className="py-12">
        <div className="px-4 mx-auto max-w-screen-xl">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">Başarılar</h1>
            </div>
            <div id="achievementsContent" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {ach.map((data, id) => (
              <article key={id} className="relative">
              <Link prefetch={true} href="/achievements" rel="noopener noreferrer" className="flex justify-end">
              <Image src={data.data.imageUrl} className="mb-5 w-full h-full max-w-lg" height={394} width={262} alt="" loading="lazy" />
              <div className="absolute bg-white dark:bg-black text-black dark:text-white py-1 px-2 text-sm font-medium">20/07/2024</div>
              </Link>
              <h2 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="line-clamp-2 hover:underline">{data.data.title}</Link>
              </h2>
              <Link prefetch={true} href={`news/${data.data.slug}`} rel="noopener noreferrer" className="font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline text-xs">Devamını oku</Link>
              </article>               
              ))}                
            </div>
        </div>
    </section>
    <Footer />
    </>
  );
}
