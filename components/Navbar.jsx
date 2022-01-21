import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {

    const quantity = useSelector((state) => state.cart.quantity);

    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/callus.png" alt="" width="32" height="32" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Place Order!</div>
                    <div className={styles.text}>123 456 7890</div>
                </div>
            </div>

            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/" passHref>
                        <li className={styles.listItem}>Our Shop</li>
                    </Link>
                    <div>
                        <Image src="/cakebakerlogo.png" alt=" " width="70px" height="70px" />
                        </div>
                    <Link href="/about" passHref>
                        <li className={styles.listItem}>About Us</li>
                    </Link>

                </ul>
            </div>

            <Link href="/cart" passHref>
            <div className={styles.item}>
                <div className={styles.cakeCart}>
                <Image src="/img/cakecart.png" alt="" width="32" height="32" />
                </div>
                <div className={styles.counter}>{quantity}</div>
            </div>
            </Link>
            
        </div>
    );
};

export default Navbar;