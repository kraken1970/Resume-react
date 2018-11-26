import React, { Component } from "react";

export default class Main extends Component {
  state = {
    skills: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "jQuery",
      "JavaScript",
      "Adobe Photoshop",
      "Git",
      "БЭМ",
      "Google Maps Api",
      "Yandex Maps API",
      "Scss, Postcss",
      "Gulp",
      "React",
      "React-Redux",
      "React-Router"
    ],
    workes: [
      "https://github.com/kraken1970/BarberFinish",
      "https://github.com/kraken1970/Technomart",
      "https://github.com/kraken1970/snowborb-shop",
      "https://github.com/kraken1970/Baikal-I-Shop",
      "https://github.com/kraken1970/RassiaNord18",
      "https://github.com/kraken1970/admin_mdb-4",
      "https://github.com/kraken1970/grid-example",
      "https://github.com/kraken1970/My_To-Do_React",
      "https://github.com/kraken1970/Cross-Zero-React",
      "https://github.com/kraken1970/books-shop-react"
    ]
  };

  render() {
    return (
      <main className="main">
        <div className="request">
          <h3>Требования к будущей работе:</h3>
          <p>Должность:Верстальщик HTML, React</p>
          <p>Зарплата (минимум): 750USD</p>
          <p>Режим работы: удаленно</p>
          <p>График работы: полный рабочий день</p>
        </div>
        <div className="skills">
          <h3>Ключевые навыки:</h3>
          <ul className="my-skills">
            {this.state.skills.map((skill, index) => {
              return (
                <li key={index}>
                  {" "}
                  <span>{skill}</span>{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="portfolio">
          <h3>Тестовое задание, размещенное на fairebase:</h3>
          <li className="react-in-web">
            <a
              href="https://quiz-react-95dda.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://quiz-react-95dda.firebaseapp.com/
            </a>
            <p>Исходник:</p>
            <a
              href="https://github.com/kraken1970/Quiz-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/kraken1970/Quiz-react
            </a>
          </li>
          <h3>Ссылки на выполненые работы: </h3>
          <ul>
            {this.state.workes.map((work, index) => {
              return (
                <li key={index}>
                  <a href={work} target="_blank" rel="noopener noreferrer">
                    {work}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}
