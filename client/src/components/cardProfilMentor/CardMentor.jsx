/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import fakeMentors from "../../data";
import "./Cardmentor.css";

function CardMentor() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentMentors = fakeMentors.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(fakeMentors.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 2) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            type="button"
            key={i}
            onClick={() => handlePageChange(i)}
            className={currentPage === i ? "active" : ""}
          >
            {i}
          </button>
        );
      }
    } else {
      const startPage = Math.max(1, currentPage - 1);
      const endPage = Math.min(totalPages, currentPage + 1);
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            type="button"
            key={i}
            onClick={() => handlePageChange(i)}
            className={currentPage === i ? "active" : ""}
          >
            {i}
          </button>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <section id="cardmentor">
      <h1 className="titlelistementor">
        Trouver le mentor qui vous correspond
      </h1>
      {currentMentors.map((mentor, index) => (
        <React.Fragment key={index}>
          <NavLink to={`/mentor/${mentor.id}`} className="mentor-name">
            <div className="container-mentors">
              <section className="imgmentor" id={`mentor-${index}`}>
                <img className="imgprofile" src={mentor.img} alt="user" />
                <div className="name">
                  <h3>{mentor.name}</h3>
                  <p>{mentor.job}</p>
                </div>
              </section>
              <article className="service" id={`service-${index}`}>
                <h2 className="titleservice">Mes compétences :</h2>
                <ul className="mentor-skills">
                  <li>{mentor.skills1}</li>
                  <li>{mentor.skills2}</li>
                  <li>{mentor.skills3}</li>
                  <li>{mentor.skills4}</li>
                </ul>
              </article>
            </div>
          </NavLink>
        </React.Fragment>
      ))}

      <div className="pagination">
        <button
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &larr;
        </button>
        {renderPageNumbers()}
        <button
          type="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &rarr;
        </button>
      </div>
    </section>
  );
}

export default CardMentor;
