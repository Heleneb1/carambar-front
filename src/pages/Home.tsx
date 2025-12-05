import { useState, useEffect } from "react";
import carambarImage from "../assets/realistic.png";
import type { Joke } from "../models/Joke";
import JokeApi from "../api/JokeApi";

function Home() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showSlowMessage, setShowSlowMessage] = useState(false);
  const loadErr = "Patiente un peu...";
  const wait = "C'est un peu long aujourd'hui... ⏳, mais ça arrive !";

  const handleClick = () => {
    setLoading(true);
    setError(null);
    setShowSlowMessage(false);

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
      .finally(() => {
        setLoading(false);
        setShowSlowMessage(false);
      });
  };

  // Afficher le message "c'est long" après 5 secondes de chargement
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (loading) {
      timer = setTimeout(() => {
        setShowSlowMessage(true);
      }, 10000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [loading]);

  // Return précoce pour le loading - centré sur la page
  if (loading)
    return <div className="load">{showSlowMessage ? wait : loadErr}</div>;

  // Return précoce pour l'erreur - centré sur la page
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
