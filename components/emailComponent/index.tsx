import emailjs from 'emailjs-com';
/* import * as dotenv from 'dotenv'; */
const SERVICE_ID: any = process.env.NEXT_PUBLIC_SERVICE_ID;

type EmailProps = {
  email: string;
  message: string;
  openCloseState: boolean;
  tempLateId: string;
  subject: string;
};
const EmailComponent = ({ email, message, openCloseState }: EmailProps) => {

  const sendMail = () => { 
    emailjs.sendForm(SERVICE_ID, 'YOUR_TEMPLATE_ID', message, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
}

  return (
    <form className="contact-form" onSubmit={sendMail}>
    <input type="hidden" name="contact_number" />
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
  </form>
  );
};

export default EmailComponent;
