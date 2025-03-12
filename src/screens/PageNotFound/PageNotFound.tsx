import styles from "./PageNotFound.module.scss";
import { TwotoneArrowRightAlt } from "../../assets/icons/ArrowRightAlt";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span>Something went wrong :(</span>
        <p>Press the button to go to the home</p>
      </div>
      <Link to="/main">
        <span>Go to Home</span>
        <TwotoneArrowRightAlt className={styles.icon} />
        <div className={styles.btnDynamic}>
          <span>Go to Home</span>
          <TwotoneArrowRightAlt className={styles.icon} />
        </div>
      </Link>
    </div>
  );
};

export default PageNotFound;
