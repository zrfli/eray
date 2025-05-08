"use client"
import Link from "next/link";
import { InstagramEmbed } from "react-social-media-embed";

export default function InstagramCard() {
    return (
        <section aria-label="apply" className="py-6">
            <div className="px-4 mx-auto max-w-screen-xl">
                <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
                    <div className="col-span-6 text-center lg:text-left">
                        <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-black dark:text-white md:text-5xl lg:text-6xl underline">
                            Instagram da biz
                        </h2>
                        <p className="mb-4 max-w-xl text-gray-500 dark:text-gray-400">
                        Etkinliklerimizden haberdar olun, sahne arkası ve güncel paylaşımlar için bizi takip edin.
                        </p>
                        <div className="flex items-center justify-center space-x-4 lg:justify-start">
                            <Link href="https://instagram.com/eraycloud" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 text-black dark:text-gray-300 hover:no-underline">
                                Profili Görüntüle
                                <svg width="7" viewBox="0 0 6 6" height="7" aria-hidden="true">
                                    <path fill="currentColor" d="m1.252 5.547-.63-.63 3.16-3.161H1.383L1.39.891h3.887v3.89h-.87l.005-2.396z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="flex justify-center">
                            <InstagramEmbed url="https://www.instagram.com/p/DJW0Yb8MRhd/" width={328} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
