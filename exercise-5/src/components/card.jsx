function Card({ person }) {
    return (
      <div className="card">
        <img src={person.image} alt={person.name} />
        <h2><strong>{person.name}</strong></h2>
        <p>{person.class}</p>
        <p><i>{person.hobbies}</i></p>
      </div>
    );
  }
  
  export default Card;
  