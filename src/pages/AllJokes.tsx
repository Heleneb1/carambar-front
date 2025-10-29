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

  useEffect(() => {
    JokeApi.getAllJokes()
      .then((res) => {
        setJokes(res.data);
      })
      .catch(() => setError("Erreur lors du chargement des blagues"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>{error}</div>;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedJoke(id);
    if (id) navigate(`/joke/${id}`); // redirection vers la blague
  };

  return (
    <div className="all-jokes-container">
      <div className="all-jokes-input">
        <img className="carambi" src={camramb} alt="Caramb" />
        <h1>Toutes les CaramBlagues</h1>
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
