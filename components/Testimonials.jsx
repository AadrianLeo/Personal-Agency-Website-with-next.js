import styles from "../styles/Testimonials.module.css";
import Circle from "../components/Circle";
import {users} from "../data";
import Image from "next/image";

const Testimonials = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
            <h1 className={styles.title}>Testimonials</h1>
            <div className={styles.wrapper}>
                {users.map(user=>(
                    <div key={user.id} className={styles.card}>
                        <Image src={`/img/${user.logo}`} width="30" height="30" alt="" />
                        <p className={styles.comment}>{user.comment}</p>
                        <div className={styles.person}>
                            <Image src={`/img/${user.avatar}`} objectFit="cover" width="45" height="45" className={styles.avatar} alt="" />
                            <div className={styles.info}>
                                <span className={styles.username}>{user.name}</span>
                                <span className={styles.jobTitle}>{user.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials
