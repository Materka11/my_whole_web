import styles from "./styles/mobile/pageNotFound.module.scss";
// import { BsArrowRight } from "react-icons/bs";
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
        {/* <BsArrowRight className={styles.icon} /> */}
        <div className={styles.btnDynamic}>
          <span>Go to Home</span>
          {/* <BsArrowRight className={styles.icon} /> */}
        </div>
      </Link>
    </div>
  );
};

export default PageNotFound;
