import React from "react";
import p2 from "../img/p2.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="photo">
        <img src={p2} alt="my-person" className="img-photo" />
      </div>
      <div className="header-txt">
        <p>Минин Сергей Викторович</p>
        <p>Проживание: Донецк</p>
        <p>Гражданство: Украина</p>
        <p>Профессиональная сфера: IT, компьютеры, связь, работа в Интернете</p>
        <p>Образование: МИЭТ(МПиТК незаконченное)</p>
      </div>
    </header>
  );
};

export default Header;
