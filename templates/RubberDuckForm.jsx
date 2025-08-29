import { useState } from "react";
import "./rubberDuckForm.css"

function RubberDuckForm({onSubmit}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [duckColor, setDuckColor] = useState("");
  const [activities, setActivities] = useState([]);
  const [review, setReview] = useState("");

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setActivities([...activities, value]);
    } else {
      setActivities(activities.filter((a) => a !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { username, email, duckColor, activities, review };
    if (onSubmit) onSubmit(formData);
  };


  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>

      <div className="form__group radio">
        <h3>Please tell us your rubber duck colour</h3>
        <label className={duckColor === "red" ? "selected" : ""}>
          <input
            type="radio"
            name="duckColor"
            value="red"
            checked={duckColor === "red"}
            onChange={(e) => setDuckColor(e.target.value)}
          />
          Red
        </label>

        <label className={duckColor === "blue" ? "selected" : ""}>
          <input
            type="radio"
            name="duckColor"
            value="blue"
            checked={duckColor === "blue"}
            onChange={(e) => setDuckColor(e.target.value)}
          />
          Blue
        </label>

        <label className={duckColor === "pink" ? "selected" : ""}>
          <input
            type="radio"
            name="duckColor"
            value="pink"
            checked={duckColor === "pink"}
            onChange={(e) => setDuckColor(e.target.value)}
          />
          Pink
        </label>

      </div>

      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck?</h3>
        <label>
          <input
            type="checkbox"
            value="bath"
            checked={activities.includes("bath")}
            onChange={handleCheckboxChange}
          />
          In the bath
        </label>
        <label>
          <input
            type="checkbox"
            value="play"
            checked={activities.includes("play")}
            onChange={handleCheckboxChange}
          />
          Playing with it
        </label>
        <label>
          <input
            type="checkbox"
            value="collect"
            checked={activities.includes("collect")}
            onChange={handleCheckboxChange}
          />
          Collecting it
        </label>
      </div>

      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
      </label>

      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default RubberDuckForm;
