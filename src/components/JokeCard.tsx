import { useState, useEffect } from "react";
import JokeApi from "../api/JokeApi";
import type { Joke } from "../models/Joke";
import lol from "../assets/lol.png";
import { Navigate } from "react-router-dom";

function JokeCard({ id }: { id: string }) {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    JokeApi.oneJoke(id)
      .then((res) => {
        console.log("Réponse API :", res.data);
        setJoke(res.data);
      })
      .catch((err) => {
        console.error(err);
        setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Chargement...</div>;
  if (notFound) return <Navigate to="/404" replace />;
  if (!joke) return <div>Aucune blague trouvée 😅</div>;

  return (
    <div className="joke-card-container">
      <div className="emoji-container">
        <img src={lol} alt="emoji rire" className="emoji emoji-1" />
        <img src={lol} alt="emoji rire" className="emoji emoji-2" />
        <img src={lol} alt="emoji rire" className="emoji emoji-3" />
      </div>
      <div className="joke-card">
        <h2>Carambar</h2>
        <p>
          <strong>Question :</strong> {joke.question}
        </p>
        <p>
          <strong>Réponse :</strong> {joke.answer}
        </p>
        {joke.author && (
          <p>
            <em>Auteur: {joke.author}</em>
          </p>
        )}
      </div>
      <button
        className="card-button"
        type="button"
        onClick={() => window.history.back()}
      >
        Retour
      </button>
    </div>
  );
}

export default JokeCard;
