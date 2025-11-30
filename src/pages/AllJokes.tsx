import { useEffect, useState } from "react";
import JokeApi from "../api/JokeApi";
import type { Joke } from "../models/Joke";
import { useNavigate } from "react-router-dom";
import camramb from "../assets/caramb.png";

function AllJokes() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [selectedJoke, setSelectedJoke] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const errMess = "Erreur lors du chargement des blagues";

  useEffect(() => {
    JokeApi.getAllJokes()
      .then((res) => {
        setJokes(res.data);
      })
      .catch(() => setError(errMess))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="load">Chargement...</div>;
  if (error)
    return (
      <div className="err">
        <p>{error}</p>
        <img
          className="carambi"
          src={camramb}
          loading="lazy"
          alt="image carambar"
        />
      </div>
    );
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedJoke(id);
    if (id) navigate(`/joke/${id}`);
  };

  return (
    <div className="all-jokes-container">
      <div className="all-jokes-input">
        <div className="count">{jokes.length}</div>
        <img
          className="carambi"
          src={camramb}
          loading="lazy"
          alt="image Carambar"
        />
        <h1>Toutes les CaramBlagues</h1>
        <div className="counter">
          Actuellement, il y a <span>{jokes.length}</span> blagues
        </div>
        <select className="select" value={selectedJoke} onChange={handleChange}>
          <option value="">Sélectionne une blague</option>
          {jokes.map((joke) => (
            <option key={joke.id} value={joke.id}>
              {joke.question}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default AllJokes;
