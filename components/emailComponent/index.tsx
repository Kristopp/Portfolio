import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";
import { modalContainer } from "./style";
init("user_KsSIISErJQQNrpodMRrTv");
/* import * as dotenv from 'dotenv'; */
const SERVICE_ID: any = process.env.NEXT_PUBLIC_SERVICE_ID;
const USER_ID: string | undefined = process.env.NEXT_PUBLIC_USER_ID;
/* const ACCSES_TOKEN: string | undefined = process.env.ACCSES_TOKEN; */
const TEMPLATE: any = process.env.NEXT_PUBLIC_TEMPLATE;

type Email = {
  from_name: string;
  from_email: string;
  message: string;
};
type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const EmailComponent = () => {
  const [eMailData, setEmailData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailData({ ...eMailData, [e.target.name]: e.target.value });
  };

  function sendEmail(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    init("user_KsSIISErJQQNrpodMRrTv");
    console.log(eMailData)
    emailjs.send(SERVICE_ID, TEMPLATE, eMailData, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" onChange={handleChange} />
      <label>Email</label>
      <input type="email" name="from_email" onChange={handleChange} />
      <label>Message</label>
      <textarea name="message" onChange={handleChange}/>
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailComponent;
