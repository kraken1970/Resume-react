import React from "react";

import { skills, workes } from "./constants";

const Main = () => {
  return (
    <main className="main">
      <div className="request">
        <h3>Требования к будущей работе:</h3>
        <p>Должность:Разработчик React</p>
        <p>Верстальщик HTML, React</p>
        <p>Зарплата (минимум): 850USD</p>
        <p>Режим работы: удаленно</p>
        <p>График работы: полный рабочий день</p>
      </div>
      <div className="skills">
        <h3>Ключевые навыки:</h3>
        <ul className="my-skills">
          {skills.map((skill, index) => {
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
        <h2>Ссылки на выполненые работы: </h2>
        <ul className="list-worked">
          {workes.map((work, index) => {
            return (
              <li key={index} className="worked">
                <h4>{work.head}</h4>
                <p>
                  <a
                    href={work.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5 className="smallHead">{work.head2}</h5>
                    <p className="descr">{work.description}</p>
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
};

export default Main;
