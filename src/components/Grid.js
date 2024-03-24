import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';

const Grid = ({ icons }) => {
  return (
    <div className="grid">
      {icons.map(icon => (
        <div
          key={icon.id}
          className={`icon ${icon.type}`}
          style={{ left: icon.position.x, top: icon.position.y }}
        >
          {getIconComponent(icon.type)}
        </div>
      ))}
    </div>
  );
};

const getIconComponent = type => {
  switch (type) {
    case 'rock':
      return <FontAwesomeIcon icon={faHandRock} />;
    case 'paper':
      return <FontAwesomeIcon icon={faHandPaper} />;
    case 'scissors':
      return <FontAwesomeIcon icon={faHandScissors} />;
    default:
      return null;
  }
};

export default Grid;
