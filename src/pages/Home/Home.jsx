export default function HomePage() {
  return (
    <div id="content-container">
      <article id="introduction">
        <h1>Hello, dear Learner!</h1>
        <p>
          This section should expose the main purpose behing the project and
          also links where the user should go to start learning new words.{" "}
          <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Perspiciatis incidunt numquam ad maxime distinctio provident
          temporibus eius dignissimos cumque repudiandae nesciunt mollitia rem,
          dolor rerum odio itaque alias doloribus reiciendis?
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
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <label for="name">Unknown word:</label>
          <input type="text" placeholder="word" ref="word" />
          <button type="submit">Submit</button>
        </form> */}
      </section>
    </div>
  );
}
