import { useState } from "react";

interface Props {
  heading: string;
  animals: string[];
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ heading, animals, onSelectItem }: Props) => {
  // const animals = [];

  const message = () => {
    return animals.length === 0 && <p>Not found</p>;
  };

  const [selectedItem, setSelectedItem] = useState(-1);

  // const handleMessage = (e: MouseEvent) => {
  //   console.log(e.target.animal);
  // };

  return (
    <>
      <h1>{heading}</h1>
      {message()}
      <ul className="list-group">
        {animals.map((animal, index) => (
          <li
            onClick={() => {
              setSelectedItem(index);
              onSelectItem(animal);
            }}
            key={animal}
            className={
              selectedItem === index
                ? "list-group-item active"
                : " list-group-item"
            }
          >
            {animal}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
