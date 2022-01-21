import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return(
    <div className={styles.container}>

        <div className={styles.item}>
            <Image src="/img/rainbowbg.jpg" width="711" height="400" alt=" " />        
        </div>
        <div className={styles.item}>
            <div className={styles.card}>
                <h2 className={styles.motto}>
                    The Best Cakes in the Nigerian Capital City.
                </h2>
            </div>
            <div className={styles.card}>
            <h1 className={styles.title}>Visit Our Bakery</h1>
          <p className={styles.text}>
            1 T.Y Danjuma Street,
            <br /> Asokoro, Abuja
            <br /> F.C.T, Nigeria.
            <br /> (123) 456-7890
          </p>
            </div>
            <div className={styles.card}>
            <h1 className={styles.title}>Working Hours</h1>
          <p className={styles.text}>
            Mondays till Fridays
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            Saturdays and Sundays
            <br /> 12:00 – 24:00
          </p>
            </div>
        </div>

        </div>
    );
};

export default Footer;