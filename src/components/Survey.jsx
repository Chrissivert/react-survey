import { useState } from "react";
import RubberDuckForm from "../../templates/RubberDuckForm";
import AnswersList from "./AnswersList";

export default function Survey() {
  const [propsToSendToAnswersList, setProps] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleFormSubmit = (data) => {
  const { username, email, duckColor, activities, review } = data || {};
  
  if (!duckColor || !activities || !review) {
    console.warn("Form submission is missing required fields:", data);
    return;
  }

  const safeData = {
    username: username || "Anon",
    email: email || "",
    duckColor,
    activities: Array.isArray(activities) ? activities : [],
    review,
  };

  setProps(prev => [...prev, safeData]); 

  setShowAnimation(true);

  setTimeout(() => {
    setShowAnimation(false);
    setShowAnswers(true);
  }, 2000); 
};


  return (
    <main className="survey">
      <section className="survey__list">
        <h2>Answers list</h2>
        {showAnimation && (
          <img
            src="/assets/explosiongif.gif"
            alt="Explosion animation"
            style={{ width: "150px" }}
          />
        )}
        {showAnswers && (
          <AnswersList answersList={propsToSendToAnswersList} />
        )}
      </section>

      <section className="survey__form">
        <RubberDuckForm onSubmit={handleFormSubmit} />
      </section>
    </main>
  );
}
