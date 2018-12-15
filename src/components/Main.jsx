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
        sourceCode: "https://github.com/kraken1970/New_Todo-react",
        head: "Todo List React"
      },
      {
        screen: quiz,
        deploy: "https://quiz-react-95dda.firebaseapp.com/",
        sourceCode: "https://github.com/kraken1970/Quiz-react",
        head: "Quiz React"
      },
      {
        screen: bookshop,
        deploy: "https://books-shop-react-2f877.firebaseapp.com/",
        sourceCode: "https://github.com/kraken1970/books-shop-react",
        head: "Books Shop React"
      },
      {
        screen: barbeshop,
        deploy: "https://barber-shop-2f8b7.firebaseapp.com/",
        sourceCode: "https://github.com/kraken1970/BarberShop",
        head: "BarberShop"
      },
      {
        screen: tecnomart,
        deploy: "https://technomarket-e64f1.firebaseapp.com/",
        sourceCode: "https://github.com/kraken1970/Technomart",
        head: "Techno Market"
      },
      {
        screen: device,
        deploy: "https://device-96603.firebaseapp.com/",
        sourceCode: "https://github.com/kraken1970/Device12",
        head: "Device Market"
      },
      {
        screen: baikal,
        deploy: "https://baical-deb6d.firebaseapp.com/",
        sourceCode: "https://github.com/kraken1970/Baikal-I-Shop",
        head: "I-Shop Baical"
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
          <h3>Ссылки на выполненые работы: </h3>
          <ul className="list-worked">
            {this.state.workes.map((work, index) => {
              return (
                <li key={index} className="worked">
                  <h4>{work.head}</h4>
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
