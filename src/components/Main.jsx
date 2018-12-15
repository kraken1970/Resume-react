import React, { Component } from "react";

import baikal from "../screen/baikal.png";
import barbeshop from "../screen/barbershop.png";
import bookshop from "../screen/bookshop.png";
import device from "../screen/device.png";
import quiz from "../screen/quiz.png";
import tecnomart from "../screen/technomart.png";
import todo from "../screen/todo.png";

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
      "Parcel",
      "React",
      "React-Redux",
      "React-Router"
    ],
    workes: [
      {
        screen: todo,
        deploy: "https://todo-85af1.firebaseapp.com/",
        sourceCode: "https://github.com/kraken1970/New_Todo-react"
      },
      {
        screen: quiz,
        deploy: "https://quiz-react-95dda.firebaseapp.com/",
        sourceCode: "https://github.com/kraken1970/Quiz-react"
      },
      {
        screen: bookshop,
        deploy: "https://books-shop-react-2f877.firebaseapp.com/",
        sourceCode: "https://github.com/kraken1970/books-shop-react"
      },
      {
        screen: barbeshop,
        deploy: "https://barber-shop-2f8b7.firebaseapp.com/",
        sourceCode: "https://github.com/kraken1970/BarberShop"
      },
      {
        screen: tecnomart,
        deploy: "https://technomarket-e64f1.firebaseapp.com/",
        sourceCode: "https://github.com/kraken1970/Technomart"
      },
      {
        screen: device,
        deploy: "https://device-96603.firebaseapp.com/",
        sourceCode: "https://github.com/kraken1970/Device12"
      },
      {
        screen: baikal,
        deploy: "https://baical-deb6d.firebaseapp.com/",
        sourceCode: "https://github.com/kraken1970/Baikal-I-Shop"
      }
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
          <ul className="list-worked">
            {this.state.workes.map((work, index) => {
              return (
                <li key={index} className="worked">
                  <p>
                    <a
                      href={work.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={work.screen} alt="screen" />
                    </a>
                  </p>
                  <p>
                    <a
                      className="reposit-link"
                      href={work.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Посмотреть код в репозитории
                    </a>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    );
  }
}
