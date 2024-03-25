import {ReactNode} from "react";
import style from "./layout.module.css"
import Image from "next/image";
import Link from "next/link";
import ZLogo from '/public/zlogo.png';
import NavMenu from '@/app/(afterLogin)/_component/NavMenu'
import LogoutButton from '@/app/(afterLogin)/_component/LogoutButton'
export default function AfterLoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
        <header className={style.leftSectionWrapper}>
            <section className={style.leftSection}>
                <div className={style.leftSectionFixed}>
                    <Link className={style.logo} href="/home">
                        <div className={style.logoPill}>
                            <Image src={ZLogo} alt="z.com로고" width={40} height={40}/>
                        </div>
                    </Link>
                    <nav>
                        <ul>
                            <NavMenu/>
                        </ul>
                        <Link href="/compose/tweet" className={style.postButton}>게시하기</Link>
                    </nav>
                    <LogoutButton/>
                </div>
            </section>
        </header>
        <div className={style.rightSectionWrapper}></div>
        애프터 로그인 레이아웃
        {children}
    </div>
  )
}