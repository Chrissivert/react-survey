import { useState } from "react";
import RubberDuckForm from "../../templates/RubberDuckForm";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* <AnswersList/> */}
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <RubberDuckForm></RubberDuckForm>
      </section>
    </main>
  );
}

export default Survey;