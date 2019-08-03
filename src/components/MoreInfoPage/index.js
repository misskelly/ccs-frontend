import React, { useState } from 'react';
import { faqs } from '../../assets/staticData/staticFAQ';

const MoreInfoPage = () => {
  const [answer, setAnswer] = useState('');
  const [pageY, setPageY] = useState(0);

  const questions = faqs.map(faq => (
    <p
      className="faq-question"
      role="button"
      aria-pressed="false"
      key={faq.id}
      onClick={
        (e) => {
          e.persist();
          setAnswer(faq.answer);
          setPageY(e.pageY);
        }
      }
    >
      {faq.question}
    </p>
  ));


  return (
    <section className="faq-container">
      <h2 className="about-heading">
        Frequently Asked Questions (FAQ)
      </h2>
      {questions}
      {
        answer
        && (
        <div
          className="answer-modal"
          style={{ transform: `translate(0, ${pageY}px)` }}
          role="dialog"
          aria-labelledby="dialog1Title"
          aria-describedby="dialog1Desc"
        >
          <h3 id="dialog1Title">Answer:</h3>
          <p id="dialog1Desc" className="faq-answer">{answer}</p>
          <img
            className="x-button"
            alt="close answer modal icon"
            role="button"
            src={require('../../assets/images/icons/cancel-x.svg')}
            onClick={() => setAnswer('')}
          />
        </div>
        )
      }
    </section>
  );
};

export default MoreInfoPage;
