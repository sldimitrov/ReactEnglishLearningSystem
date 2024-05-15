import axios from "axios";
import apiURL from "../constants/const";

export default async function getDefinition(word) {
  word.preventDefault();
  // Save the request URL into a constant variable
  console.log(word);
  const request = apiURL + word;

  axios
    .get(request)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
