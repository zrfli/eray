import Link from "next/link";
import { Logo } from "../Logo";

export default function Header(){
    return (
        <header className="sticky top-0 z-50 border-b border-neutral-300 dark:border-neutral-600 bg-white dark:bg-black">
          <nav className="flex justify-between px-4 lg:px-6 py-2.5">
              <div className="flex justify-between items-center">
                  <Logo LogoClass="h-auto w-45 dark:invert" />
              </div>
              <div className="md:flex gap-10 items-center hidden">
                <Link href="/" className="font-medium text-black hover:text-black/80 dark:text-neutral-200 dark:hover:text-neutral-300">
                  Ana Sayfa
                </Link>
                <Link href="/hakkimizda" className="font-medium text-black hover:text-black/80 dark:text-neutral-200 dark:hover:text-neutral-300">
                    Hakkımızda
                </Link>
                <Link href="/misyon-vizyon" className="font-medium text-black hover:text-black/80 dark:text-neutral-200 dark:hover:text-neutral-300">
                    Misyon ve Vizyon
                </Link>
                <Link href="/kvkk" className="font-medium text-black hover:text-black/80 dark:text-neutral-200 dark:hover:text-neutral-300">
                    Kvkk
                </Link>
                <Link href="mailto:info@eray.cloud" className="font-medium text-black hover:text-black/80 dark:text-neutral-200 dark:hover:text-neutral-300">
                    İletişim
                </Link>
              </div>
              <div>
              </div>
          </nav>
      </header>
    )
}