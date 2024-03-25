import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo, faStop, faU } from '@fortawesome/free-solid-svg-icons';

const InfoBar = ({ showInfoBar, resetSimulation, stopSimulation }) => {
  return (
    <div className={`info-bar ${showInfoBar ? 'show' : 'hide'}`}>
      <div className="left">
        <FontAwesomeIcon icon={faUndo} onClick={resetSimulation} />
        <FontAwesomeIcon icon={faStop} onClick={stopSimulation} />
      </div>
      <div className="right">
        {/* Placeholder for analytics */}
        Analytics Box
      </div>
    </div>
  );
};

export default InfoBar;