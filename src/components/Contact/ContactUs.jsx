import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com"
import styles from "../Contact/ContactUs.module.css"

const SUCCESS_MESSAGES = {
  en: "Your email has been sent successfully!",
  zh: "您的郵件已成功送出!"
};

const INPUT_LABELS = {
  en: {
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send",
  },
  zh: {
    name: "姓名",
    email: "信箱",
    message: "內容",
    submit: "送出",
  },
};

export const ContactUs = ({ handleLanguageChange, isLanguageEng }) => {
  const form = useRef();
  // const [submit, setSubmit] = useState(false)
  const [successMessage, setSuccessMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    // setSubmit(!submit)
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_ID
    ).then((result) => {
      console.log(result.text);
      setSuccessMessage(isLanguageEng ? SUCCESS_MESSAGES.en : SUCCESS_MESSAGES.zh);
    }, (error) => {
      console.log(error.text);
      setSuccessMessage(null);
    });
  };

  return (
    <div>
      {successMessage ? (
        <p id={styles.statusMsg}>{successMessage}</p>
      ) : (
        <div>
          <h2>
            {isLanguageEng ? "Send me an email!" : "寫一封信給我吧!"}
          </h2>
          <form ref={form} onSubmit={sendEmail} className={styles.form} autoComplete="off">
            <label>{INPUT_LABELS[isLanguageEng ? "en" : "zh"].name}</label>
            <input type="text" name="user_name" />
            <label>{INPUT_LABELS[isLanguageEng ? "en" : "zh"].email}</label>
            <input type="email" name="user_email" />
            <label>{INPUT_LABELS[isLanguageEng ? "en" : "zh"].message}</label>
            <textarea name="message" rows="4" />
            <div className={styles.formSubmit}>
              <input
                type="submit"
                value={INPUT_LABELS[isLanguageEng ? "en" : "zh"].submit}
                className={styles.btn}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};