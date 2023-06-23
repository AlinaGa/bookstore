import { UseState } from "react";
import axios from "axios";


export default function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);

        const bookData = {
            email: email,
            password: password,
        };
        axios
            .post("/books", bookData)
            .then((response) => {
                console.log(response.data);
                // Perform any additional actions after successful form submission
            })
            .catch((error) => {
                console.error("Error submitting form:", error);
                // Handle the error and display an error message to the user
            });
    };



    return (
    <form className="form" onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}