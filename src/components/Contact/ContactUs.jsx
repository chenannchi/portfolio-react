import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com"
import styles from "../Contact/ContactUs.module.css"


export const ContactUs = ({ handleLanguageChange, isLanguageEng }) => {
  const form = useRef();
  const [submit, setSubmit] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmit(!submit)
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_ID
    ).then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div>
      {submit ?
        <p id={styles.statusMsg}>{isLanguageEng ? "Your email has been sent successfully!" : "您的郵件已成功送出!"}</p>
        :
        <div>
          <h2>
            {isLanguageEng ?
              "Send me an email!"
              :
              "寫一封信給我吧!"
            }
          </h2>
          <form ref={form} onSubmit={sendEmail} className={styles.form} autoComplete="off">
            <label>{isLanguageEng ? "Name" : "姓名"}</label>
            <input type="text" name="user_name" />
            <label>{isLanguageEng ? "Email" : "信箱"}</label>
            <input type="email" name="user_email" />
            <label>{isLanguageEng ? "Message" : "內容"}</label>
            <textarea name="message" rows="4" />
            <div className={styles.submitBtn} >
              {isLanguageEng ?
                <input type="submit" value="Send" className={styles.btn} />
                :
                <input type="submit" value="送出" className={styles.btn} />
              }
            </div>
          </form>
        </div>

      }
    </div>
  );
};