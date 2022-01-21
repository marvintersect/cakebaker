import styles from "../styles/Cakelist.module.css";
import Cakecard from "./Cakecard";

const Cakelist = ({ cakeList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Best Cakes in Abuja</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {cakeList.map((cake) => (
          <Cakecard key={cake._id} cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default Cakelist;