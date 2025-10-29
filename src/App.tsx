import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllJokes from "./pages/AllJokes";
import AddJoke from "./pages/AddJoke";
import NavBar from "./components/NavBar";
import JokeCard from "./components/JokeCard";
import Footer from "./components/Footer";
import { useParams } from "react-router-dom";
import NotFound from "./pages/NotFound";

function JokeCardWrapper() {
  const { id } = useParams<{ id: string }>();
  if (!id) return <Navigate to="/404" replace />;
  return <JokeCard id={id} />;
}

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jokes" element={<AllJokes />} />
          <Route path="/joke/:id" element={<JokeCardWrapper />} />
          <Route path="/add" element={<AddJoke />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
