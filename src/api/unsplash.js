import axios from "axios";

//method to create an instance object of axios that will take parameters and execute on given values

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID WrckD9eF-RJfenu-idQtuKEQHFHypWAKMm8zem8u52g",
  },
});
