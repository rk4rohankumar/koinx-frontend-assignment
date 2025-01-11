import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ highest, lowest, current }) => {
  const percentage = ((current - lowest) / (highest - lowest)) * 100;

  return (
    <div className="w-full bg-gradient-to-r from-LightRed to-TealishGreen rounded-full h-2 relative">
      <div
        className="absolute top-0 left-0 h-full rounded-full"
        style={{ width: `100%` }}
      />
      <div
        className="absolute top-10 left-0 h-full rounded-full"
        style={{ left: `${percentage}%` }}
      >
        {current&&<>
        <div className="relative -top-4 text-black text-sm">
          ▲ 
        </div>
        <div className='-top-4 relative -left-2'
        >${current}</div>
        </>}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  highest: PropTypes.number.isRequired,
  lowest: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired
};

export default ProgressBar;
