import Image from 'next/image';
import Link from 'next/link';

interface LogoProps { LogoClass?: string }

export const Logo = ({ LogoClass }: LogoProps) => {
    return (
        <Link href='/' >
            <Image priority className={`${LogoClass}`} src={'/logo.png'} width={120} height={60} alt="" unoptimized />
        </Link>
    )
}