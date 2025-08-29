import { useState } from "react";
import RubberDuckForm from "../../templates/RubberDuckForm";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [propsToSendToAnswersList, setProps] = useState([]);

  
  const handleFormSubmit = (data) => {
    setProps(prev => [...prev, data]);
    console.log("Form submitted:", data);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
        answersList={propsToSendToAnswersList}
        />
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <RubberDuckForm onSubmit={handleFormSubmit} />
      </section>
    </main>
  );
}

export default Survey;