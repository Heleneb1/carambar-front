import { useState } from "react";
import JokeApi from "../api/JokeApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import carambarIcon from "../assets/realistic.png";

function AddJoke() {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    author: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Form Data Submitted:", {
        question: formData.question,
        answer: formData.answer,
      });
      const jokeData = {
        question: formData.question,
        answer: formData.answer,
        author: formData.author,
      };
      setFormData({ question: "", answer: "", author: "" });

      const response = await JokeApi.addJoke(jokeData);
      const jokeId = response.data.id;

      toast("Blague ajoutée !", {
        icon: (
          <img src={carambarIcon} alt="Carambar" style={{ width: "4rem" }} />
        ),
        className: "carambar-toast",

        onClose: () => navigate(`/joke/${jokeId}`),
      });
    } catch (error) {
      console.error("Error while adding joke:", error);
      alert("Erreur lors de la création");
    }
  };
  return (
    <div className="add-joke-container">
      <h1>Ajouter une blague</h1>

      <img className="carambj" src={carambarIcon} alt="Ajouter une blague" />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question:</label>
          <input
            type="text"
            value={formData.question}
            onChange={(e) =>
              setFormData({ ...formData, question: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Réponse:</label>
          <input
            type="text"
            value={formData.answer}
            onChange={(e) =>
              setFormData({ ...formData, answer: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label>Auteur:</label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
          />
        </div>
        <div></div>
        <button type="submit">Ajouter la blague</button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default AddJoke;
