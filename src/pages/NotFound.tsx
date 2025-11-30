import carambi from "../assets/caramb.png";

function NotFound() {
  return (
    <div className="notfound">
      <h1>404 - Page non trouvée</h1>
      <img
        className="carambi"
        src={carambi}
        loading="lazy"
        alt="image carambar"
      />

      <p>Oups ! Cette page n'existe pas ou a été déplacée.</p>
    </div>
  );
}

export default NotFound;
