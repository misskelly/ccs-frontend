import React, { useState } from 'react';
import { faqs } from '../../assets/staticData/staticFAQ';

const MoreInfoPage = () => {
  const [answer, setAnswer] = useState('');
  const [pageY, setPageY] = useState(0);

  const questions = faqs.map((faq) => {
    return <p
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
  });


  return (
    <section className="faq-container">
      {questions}
      {
        answer
        &&
        <>
          <p className="faq-answer">{answer}</p>
          <img 
            className="x-button"
            alt="close answer modal icon"
            role="button" 
            src={require("../../assets/images/icons/cancel-x.svg")}
            onClick={ () => setAnswer('') }
          />
        </>
      }
    </section>
  );
};

export default MoreInfoPage;