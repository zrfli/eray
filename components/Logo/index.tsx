import Image from 'next/image';
import Link from 'next/link';

interface LogoProps { LogoClass?: string }

export const Logo = ({ LogoClass }: LogoProps) => {
    return (
        <Link href='/' >
            <Image priority className={`${LogoClass}`} src={'/logo_yatay.png'} width={250} height={250} alt="" unoptimized />
        </Link>
    )
}