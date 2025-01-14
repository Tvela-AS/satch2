import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  // host: "smtp.gmail.com",
  port: 587,
  //secure: false,
  auth: {
    user: process.env.REACT_APP_USER,
    pass: process.env.REACT_APP_MAIL_PASSWORD,
  },
});

type MailOptions = {
  recipient: {
    email: string;
    firstName: string;
    lastName: string;
    message: string;
  };
};
export const sendMail = ({ recipient }: MailOptions) => {
  const { firstName, lastName, message, email } = recipient;
  const SatchMailHtml = `
      <h1>Vennlig beskjed om at ${email} prøver å kontakte deg</h1>
      <h3>Her er en veldig kort mail for å fortelle deg at ${firstName} har prøvd å komme i kontakt via siden din her er informasjonen</h3>
      <br>
      Navn:${firstName}  ${lastName} <br>
      E-post: ${email}
      <br>
      Beskjed:  
      <p>
      ${message}
      </p>


    `;
  const RecipientMail = `
      <h1>Jeg har mottatt mailen din</h1>
      <h3>Takk for henvendelse! Jeg kommer tilbake til deg når jeg får mulighethet!</h3>
<br>
ønsker deg en fin dag videre! <br>

    `;

  const JotunMailHtml = `
      <h1>Vi har nettopp sendt ut en mail til Satch</h1>
<br>

      Navn: ${firstName} ${lastName}
      <br>
      E-post: ${email}
      <br>
      Beskjed: ${message}
      <p>
      </p>
<br>
Husk å fakturer!=)
`;

  const SatchMailOptions = {
    // from: "jotunutvikling@gmail.com]",
    from: "post@valdreshundesalong.no",
    to: "post@valdreshundesalong.no",
    subject: `Psst! Noen på siden din vil ha tak i deg`,
    html: SatchMailHtml,
  };
  const RecipientMailOptions = {
    from: "post@jornlarsen.no",
    to: [email],
    subject: "Bekreftelse på henvendelse mottatt",
    html: RecipientMail,
  };

  const JotunMailOptions = {
    from: "post@jornlarsen.no",
    to: ["hei@jotun-utvikling.no"],
    subject: "Bekreftelse på henvendelse mottatt",
    html: JotunMailHtml,
  };

  // First send mail to Satch
  transporter.sendMail(SatchMailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
  // after that send a second mail to the recipent

  transporter.sendMail(RecipientMailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });

  // Then we send a message to HQ

  transporter.sendMail(JotunMailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};
