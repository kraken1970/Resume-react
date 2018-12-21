import React from "react";

const Contacts = () => {
  return (
    <div className="contacts-wrap">
      <h3>Контактная информация:</h3>
      <p>Адрес: г. Донецк</p>
      <div className="contact-wrap">
        <a href="tel:+380713537644" title="Позвоните мне">
          Телефон: +380713537644
        </a>
      </div>
      <div className="contact-wrap">
        <a
          href="viber://pa?chat+380668031813=+380668031813"
          // href="viber:+380668031813"
          title="Звонок через Viber"
          className="link-viber"
        >
          Viber: +380668031813
        </a>
      </div>
      <div className="contact-wrap">
        <a
          href="skype:tabaska14?call"
          title="Звонок через Skype"
          className="link-skype"
        >
          Skype: tabaska14
        </a>
      </div>
      <div className="contact-wrap">
        <a
          href="mailto:S.V.Minin@gmail.com"
          title="Напишите мне"
          className="link-mail"
        >
          E-mail: S.V.Minin@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contacts;
