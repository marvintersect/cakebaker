import Image from "next/image";
import styles from "../styles/Cakecard.module.css";
import Link from "next/link";

const Cakecard = ({cake}) => {
    return(

      <div className={styles.container}>
        <Link href={`/product/${cake._id}`} passHref>
        <Image src={cake.img} alt="" width="600" height="900" />
        </Link>
        <h1 className={styles.title}>{cake.title}</h1>
        <span className={styles.price}>₦{cake.prices[0]}</span>
        <p className={styles.desc}>{cake.desc}</p>
        
    </div>
    );
};

export default Cakecard;