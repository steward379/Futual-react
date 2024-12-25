import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const CustomButton = ({ children, className = '', textClassName = '' }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(children.split(''));
  }, [children]);

  return (
    <button className={`custom-button ${className}`}>
      <div>
        {letters.map((letter, index) => (
          <span className={textClassName} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  textClassName: PropTypes.string,
};

export default CustomButton;