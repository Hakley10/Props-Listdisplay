export default function Place({key, place}) {
  return (
    <li key={key} className="place-item">
      <button>
        <img src={place.image.src}alt={place.image.src}/>
        <h3>{place.title}</h3>
      </button>
    </li>
  );
}
