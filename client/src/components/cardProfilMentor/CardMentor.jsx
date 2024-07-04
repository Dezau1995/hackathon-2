/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import imgProfile from "../../assets/photoprofil.png";
import "./Cardmentor.css";

function CardMentor() {
  const [mentorData, setMentorData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 5;

  useEffect(() => {
    fetch("http://192.168.1.251:8000/mentors")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          setMentorData(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching mentors:", error);
      });
  }, []);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentMentors = mentorData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(mentorData.length / cardsPerPage);

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
      {currentMentors.map((mentor, index) => (
        <React.Fragment key={index}>
          <section className="imgmentor" id={`mentor-${index}`}>
            <img className="imgprofile" src={imgProfile} alt="user" />
            <div className="name">
              <h1>{mentor.name}</h1>
              <p>{mentor.company.nom}</p>
            </div>
          </section>

          <article className="service" id={`service-${index}`}>
            <p className="titleservice">Service :</p>
            {mentor.skills}
          </article>
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
