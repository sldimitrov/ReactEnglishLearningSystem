import axios from "axios";

export default async function getDefinition(word) {
  // Save the request URL into a constant variable
  const request = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;

  axios
    .get(request)
    .then((response) => {
      console.log("def: ", response.data[0]);
    })
    .catch((error) => {
      console.log(error);
    });
}
