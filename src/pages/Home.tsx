import { useState } from "react";
import carambarImage from "../assets/realistic.png";
import type { Joke } from "../models/Joke";
import JokeApi from "../api/JokeApi";

function Home() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const loadErr = "Patiente un peu...";

  const handleClick = () => {
    setLoading(true);
    setError(null);

    JokeApi.displayRandomJoke()
      .then((res) => {
        setJoke(res.data);
      })
      .catch((err) => {
        console.error(
          "Erreur lors du chargement de la blague aléatoire :",
          err
        );
        setError(loadErr);
      })
      .finally(() => setLoading(false));
  };

  if (loading) return <div className="load">{loadErr}</div>;
  if (error) return <div className="load">{error}</div>;
  return (
    <div className="home-container">
      <img
        className="home-img"
        src={carambarImage}
        loading="lazy"
        alt=" image Carambar"
      />
      <article className="home-intro">
        <h1>Salut et bienvenue sur le site des CaramBlagues!</h1>
        <p>Découvre, ajoute et partage tes blagues 🤣 préférées.</p>
      </article>
      <button type="button" onClick={handleClick} className="home-button">
        Tu veux rire 😉
      </button>
      <div className="joke-modal-container">
        {joke && (
          <div className="modal" role="dialog" aria-modal="true">
            <div className="joke-display">
              <p>{joke.question}</p>
              <p>
                <em>Réponse :</em> {joke.answer}
              </p>
              {joke.author && (
                <p>
                  <em>— {joke.author}</em>
                </p>
              )}
              <button
                className="modal-close"
                type="button"
                onClick={() => {
                  setJoke(null);
                }}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
