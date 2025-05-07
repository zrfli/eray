import { Logo } from "../Logo";

export default function Footer() {
    return (
        <footer className="border-gray-700 dark:border-neutral-700 bg-black border-t">
            <div className="lg:-10 max-w-screen-xl md:p-8 mx-auto p-4 py-6">
                <div className="gap-8 grid grid-cols-2 lg:grid-cols-6">
                <div className="col-span-2" id="contactInformation">
                    <Logo LogoClass="h-auto w-32 invert" />
                    <p className="my-4 text-gray-400" id="layoutContact">Maslak Mahalesi, Taşyoncası Sokak, No: 1V ve No:1Y Sarıyer-İstanbul <a href="tel:+902122101010" className="text-white underline">+90 (212) 210 10 10</a>
                    </p>
                    <ul className="flex mt-5 space-x-6">
                    <li>
                        <a className="text-gray-400 hover:text-gray-500" href="https://www.instagram.com/eraycloud" aria-hidden="true" target="_blank">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.9 4.9 0 0 1 1.772 1.153 4.9 4.9 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748s-.566.683-.748 1.15c-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748s.566-.683.748-1.15c.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.1 3.1 0 0 0-.748-1.15 3.1 3.1 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058M12 6.865a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27m0 1.802a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666m5.338-3.205a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="lg:mx-auto">
                    <h2 className="mb-3 text-sm font-semibold uppercase text-white underline">Kurumsal</h2>
                    <ul className="text-gray-400">
                    <li className="mb-2">
                        <a href="/hakkimizda" rel="noopener noreferrer" className="hover:underline">Hakkımızda</a>
                    </li>
                    <li className="mb-2">
                        <a href="/hizmet-yonetimi" rel="noopener noreferrer" className="hover:underline">Hizmet Yönetimi</a>
                    </li>
                    <li className="mb-2">
                        <a href="/kvkk" rel="noopener noreferrer" className="hover:underline">Kişisel Veriler (kVKK)</a>
                    </li>
                    </ul>
                </div>
                </div>
                <div className="border-gray-700 dark:border-neutral-700 lg:my-8 my-6 sm:mx-auto"></div>
                <span className="text-gray-400 block text-center text-sm">© 2025 Eray - Tüm Hakları Saklıdır.</span>
                <span className="text-gray-400 block text-center text-sm">Developed by <a className="hover:text-purple-400 text-purple-300 underline" href="https://misyy.vercel.app" target="_blank">Misy</a>
                </span>
            </div>
        </footer>
    )
}