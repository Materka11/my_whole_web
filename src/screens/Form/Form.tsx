// import { BsArrowRight } from 'react-icons/bs';
// import { useForm } from '../hooks/useForm';
import { TwotoneArrowRightAlt } from "../../assets/icons/ArrowRightAlt";
import { useHasScrolledToElementById } from "../../hooks/useHasScrolledToElementById";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import styles from "./Form.module.scss";

export const Form = () => {
  const scrollContact = useHasScrolledToElementById(500, "form");
  const classText = useScrollTrigger(scrollContact);

  // const initialState = {
  // 	name: '',
  // 	email: '',
  // 	message: ''
  // };

  // const { onChange, onSubmit, values } = useForm(sendMessageCallback, initialState);

  // async function sendMessageCallback() {
  // 	//send values to email
  // }

  return (
    <div className={styles.form} id="form">
      <div className={`${styles.text} ${styles[classText]}`}>
        <span>Send me a message!</span>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
      </div>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/success"
      >
        <div hidden>
          <input name="bot-field" />
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <div className={styles.formRow}>
          <label>
            <span>Your Name</span>
            <br />
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Enter your name"
              // onChange={onChange}
              required
              className={styles.input}
            />
          </label>
        </div>
        <br />
        <div className={styles.formRow}>
          <label>
            <span>Email Address</span>
            <br />
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email address"
              // onChange={onChange}
              required
              className={styles.input}
            />
          </label>
        </div>
        <br />
        <div className={styles.formRow}>
          <label>
            <span>Your Message</span>
            <br />
            <textarea
              name="message"
              id="message"
              placeholder="Hi, i think we need a frontend developer for our products at Company X. How soon can you hop on to discuss this?"
              minLength={20}
              className={styles.input}
            />
          </label>
        </div>

        <button type="submit">
          <span>SEND MESSAGE</span>
          <TwotoneArrowRightAlt className={styles.icon} />
          <div className={styles.btnDynamic}>
            <span>SEND MESSAGE</span>
            <TwotoneArrowRightAlt className={styles.icon} />
          </div>
        </button>
      </form>
    </div>
  );
};
