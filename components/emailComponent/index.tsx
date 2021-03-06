import React, { useState } from "react";
import emailjs, { init } from "emailjs-com";
import {
  container,
  inputContainer,
  buttonStyle,
  messageInputStyle,
} from "./style";
import { useForm } from "react-hook-form";

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
  toggle: boolean;
};

const EmailComponent = () => {
  const [eMailData, setEmailData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const { register, handleSubmit, watch, errors } = useForm<Email>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailData({ ...eMailData, [e.target.name]: e.target.value });
  };
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmailData({ ...eMailData, [e.target.name]: e.target.value });
  };

  const onSubmit = ({}) => {
    init("user_KsSIISErJQQNrpodMRrTv");
    emailjs.send(SERVICE_ID, TEMPLATE, eMailData, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div css={container}>
      
      <form
        className="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        css={inputContainer}
      >
        <label>Name</label>
        <input
          type="text"
          name="from_name"
          ref={register({ required: true, minLength: 3, maxLength: 20 })}
          value={eMailData.from_name}
          onChange={handleChange}
        />
        {errors.from_name && <span>This field is required</span>}
        <label>Email</label>
        <input
          type="email"
          name="from_email"
          value={eMailData.from_email}
          ref={register({ required: true })}
          onChange={handleChange}
        />
        {errors.from_email && <span>Pls enter ur email</span>}
        <label>Message</label>

        <textarea
          className="messageBox"
          name="message"
          ref={register({ required: true })}
          onChange={handleTextChange}
        />
        {errors.message && <span>This field is required</span>}
        <input type="submit" value="Send" css={buttonStyle} />
      </form>
    </div>
  );
};

export default EmailComponent;
