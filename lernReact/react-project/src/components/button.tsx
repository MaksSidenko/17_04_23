import React, { ReactNode } from "react";

interface Props {
  children: string;
  onClick: () => void;
}

const Mainbutton = ({ children, onClick }: Props) => {
  return (
    <button type="button" onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
};

export default Mainbutton;
