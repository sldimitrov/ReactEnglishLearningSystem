import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/dictionary">the dictionary</Link>
      </p>
    </div>
  );
}

export default HomePage;
