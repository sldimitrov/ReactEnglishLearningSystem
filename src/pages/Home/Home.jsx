import { useState } from "react";
import getDefinition from "../../services/getDefinitions";
import { useWordsContext } from "../../themeContext";

export default function HomePage() {
  const [newWord, setNewWord] = useState();
  const [newWords, setNewWords] = useWordsContext();

  function handleSubmit(event) {
    /* This function handles the submittion of the form. */
    event.preventDefault();
    getDefinition(newWord);
  }

  function handleSetNewWord(event) {
    /* This function changes the state of the newWord on every inputted value. */
    setNewWord(event.target.value);
  }

  return (
    <div id="content-container">
      <article id="introduction">
        <h1>Hello, dear Learner!</h1>
        <p>
          This section should expose the main purpose behing the project and
          also links where the user should go to start learning new words.{" "}
          <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Perspiciatis.
        </p>
      </article>
      <section>
        <h2>
          Here we input the unknown words and call the API that returns the
          definitions. <br /> All that is being saved down below in the new
          words section and in our dictionary. <br /> From then on we should
          write sentences with the use of the word-definition pattern and save
          them in the sentences page.
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="word-form">
            <label htmlFor="word">Enter word:</label>
            <input
              type="text"
              name="word"
              id="word"
              onChange={handleSetNewWord}
            />
          </div>
          <div className="form-actions">
            <button id="button">Save</button>
          </div>
        </form>
      </section>
    </div>
  );
}
