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
          href="viber://chat?number=380668031813"
          title="Звонок через Viber"
          className="link-viber"
        >
          Viber: +380668031813 <br />
          Связь через Viber с ПК
        </a>
        <a
          href="http://msng.link/vi/380668031813"
          title="Напишите мне в Viber"
          className="link-viber"
        >
          Viber: +380668031813 <br />
          Набрать Viber с мобильного
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
          href="mailto:s.v.minin70@gmail.com"
          title="Напишите мне"
          className="link-mail"
        >
          E-mail: s.v.minin70@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contacts;
