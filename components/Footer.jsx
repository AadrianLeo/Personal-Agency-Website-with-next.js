import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardL}>
                <h1 className={styles.title}>AVOCADO CREATIVES.</h1>
                <h1 className={styles.linkTitle}>
                    <Link href="/contact" passHref>
                        <>
                        <span className={styles.linkText}>WORK WITH US</span>
                        <Image src="/img/link.png" width="40px" height="40px" alt="" />
                        </>
                    </Link>
                </h1>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    12 ADAM SETREET NY <br/> USA
                </div>
                <div className={styles.cardItem}>
                    CONTACT@RAVI.DEV <br/> 797 718 3690
                </div>
            </div>
            <div className={styles.cardS}>
            <div className={styles.cardItem}>
                FOLLOW US: 
                <br/> _FB _IN _BE _TW
                </div>
            <div className={styles.cardItem}>
                © ravi,
                <br />
                ALL RIGHTS RESERVED
                </div>
            </div>
        </div>
    )
}

export default Footer
