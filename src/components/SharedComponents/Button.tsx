import React from 'react';
import '../../styles/Button.css'
interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
  <button className="shared-button" onClick={onClick}>
    {text}
  </button>
);

export default Button;