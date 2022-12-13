import React, { useRef } from 'react';
import emailjs from "emailjs-com"
import styles from "../Contact/ContactUs.module.css"


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
    <h2>
      Send me an email!
    </h2>
    <form ref={form} onSubmit={sendEmail} className={styles.form} autoComplete="off">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <div className={styles.submitBtn} >
        <input type="submit" value="Send" className={styles.btn} />
      </div>
    </form>  
  </div>
  );
};