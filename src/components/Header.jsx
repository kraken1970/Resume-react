import React from "react";
import p2 from "../img/p2.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="photo">
        <img src={p2} alt="" className="img-photo" />
      </div>
      <div className="header-txt">
        <p>Минин Сергей Викторович</p>
        <p>48 лет</p>
        <p>Проживание: Донецк</p>
        <p>
          Гражданство: Донецкая народная республика, <br />
          Украина
        </p>
        <p>Профессиональная сфера: IT, компьютеры, работа в Интернете</p>
        <p>Образование:МИЭТ(незаконченное)</p>
      </div>
    </header>
  );
};

export default Header;
