import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

const Contact = () => {

  return (
    <form name="contact" className={styles['contact']} data-netlify="true">
      <p>
        <label>Name</label>
        <input type="text" name="name" />
      </p>
      <p>
        <label>Email</label>
        <input type="email" name="email" />
      </p>
      <p>
        <label>Your message</label>
        <textarea name="message"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default Contact;
