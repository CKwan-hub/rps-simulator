import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faNoteSticky, faScissors } from '@fortawesome/free-solid-svg-icons';

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
      return <FontAwesomeIcon icon={faGem} />;
    case 'paper':
      return <FontAwesomeIcon icon={faNoteSticky} />;
    case 'scissors':
      return <FontAwesomeIcon icon={faScissors} />;
    default:
      return null;
  }
};

export default Grid;
