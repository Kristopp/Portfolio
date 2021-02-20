type EmailProps = {
  email: string;
  text: string;
  openCloseState: boolean;
};

const EmailComponent = ({ email, text, openCloseState }: EmailProps) => {
  return (
    <div>
      <input type="text" defaultValue="title" />
      <input type="text" defaultValue="what is ur email" />
    </div>
  );
};

export default EmailComponent;
