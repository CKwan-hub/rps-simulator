import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faStop } from '@fortawesome/free-solid-svg-icons';

const InfoBar = ({ showInfoBar, paused, togglePause, stopSimulation }) => {
  const handlePauseClick = () => {
    togglePause();
  };

  const handleStopClick = () => {
    stopSimulation();
  };

  return (
    <div className={`info-bar ${showInfoBar ? 'show' : 'hide'}`}>
      <div className="left">
        <FontAwesomeIcon icon={faPause} onClick={handlePauseClick} />
        <FontAwesomeIcon icon={faStop} onClick={handleStopClick} />
      </div>
      <div className="right">
        {/* Placeholder for analytics */}
        Analytics Box
      </div>
    </div>
  );
};

export default InfoBar;