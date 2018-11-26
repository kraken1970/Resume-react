import React from "react";

const Contacts = () => {
  return (
    <div className="contacts-wrap">
      <h3>Контактная информация:</h3>
      <p>Адрес: г. Донецк</p>
      <div>
        <a href="tel:+380713537644" title="Позвоните мне">
          Телефон: +380713537644
        </a>
      </div>
      <div>
        <a href="viber://chat?number=+380668031813" title="Звонок через Viber">
          Viber: +380668031813
        </a>
      </div>
      <div>
        <a href="skype:tabaska14?call" title="Звонок через Skype">
          Skype: tabaska14
        </a>
      </div>
      <div>
        <a href="mailto:S.V.Minin@gmail.com" title="Напишите мне">
          E-mail: S.V.Minin@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contacts;
