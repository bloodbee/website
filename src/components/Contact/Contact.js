import React from 'react';
import styles from './Contact.module.scss';

const Contact = () => (
  <form name="contact" method="post" className={styles['contact']} data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <p className={styles['hidden']}>
      <label>
        Don’t fill this out:{" "}
        <input name="bot-field" />
      </label>
    </p>
    <p>
      <label>Name</label>
      <input type="text" name="name" required />
    </p>
    <p>
      <label>Email</label>
      <input type="email" name="email" required />
    </p>
    <p>
      <label>Your message</label>
      <textarea name="message" required></textarea>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
);

export default Contact;
