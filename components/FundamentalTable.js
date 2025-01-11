import React, { memo } from 'react';
import PropTypes from 'prop-types';

const KeyValueTable = ({ data }) => {
  return (
    <div className="w-full">
      {data.map((item, index) => (
        <div key={index} className="flex justify-between py-2 border-b border-gray-300">
          <span className="font-medium text-gray-700">{item.key}</span>
          <span className="text-gray-900">{item.value}</span>
        </div>
      ))}
    </div>
  );
};

KeyValueTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number,PropTypes.object]).isRequired,
    })
  ).isRequired,
};

export default memo(KeyValueTable);
