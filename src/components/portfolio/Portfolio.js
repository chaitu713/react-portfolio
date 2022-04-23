import React from "react";
import "./Portfolio.css";
import CRUD1 from "../../assets/CRUD1.png";
import PF1 from "../../assets/portfolio.png";
import PF from "../../assets/feedback.png";
import CRUD from "../../assets/CRUD.png";

const data = [
  {
    id: 1,
    image: CRUD1,
    title: "CRUD Operations using React and Redux",
    github: "https://github.com/chaitu713/redux-crudops",
    demo: "https://redux-crudop.netlify.app/",
  },

  {
    id: 2,
    image: CRUD,
    title: "React CRUD Operations using Hooks",
    github: "https://github.com/chaitu713/react-crudops",
    demo: "https://redux-crudop.netlify.app/",
  },

  {
    id: 3,
    image: PF,
    title: "Feedback Form using React, and Redux",
    github: "https://github.com/chaitu713/feedback-form",
    demo: "https://feedback-p3.netlify.app/",
  },

  {
    id: 4,
    image: PF1,
    title: "Portfolio Website built using HTML, CSS, JS and React",
    github: "https://github.com/chaitu713/redux-crudops",
    demo: "https://redux-crudop.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img
                  // className="portfolio__item-image"
                  width="198px"
                  height="200px"
                  src={image}
                  alt={title}
                />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
