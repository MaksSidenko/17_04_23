import { MouseEvent } from "react";

const ListGroup = () => {
  const cities = ["Kiev", "Lviv", "qwer"];
  // const cities = [];

  const handleClick = (e: MouseEvent) => console.log(e);

  const message = () => {
    return cities.length === 0 && <p>no itemm</p>;
  };
  return (
    <>
      <h1>List Group</h1>
      {message()}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li key={city} onClick={handleClick} className="list-group-item">
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
