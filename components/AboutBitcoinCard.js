import { memo } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const AboutBitcoinCard = ({ imageSrc, heading1, buttonLabel,backgroundColor, onClickButton }) => {
  return (
    <div
      className={`flex flex-col md:flex-row rounded-lg shadow-md ${backgroundColor} h-full sm:min-h-[180px]  overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 m-2`}
    >
      <div className="w-full md:w-1/3 h-48 p-2 rounded-md  md:h-auto">
        <img
          src={imageSrc}
          alt="Card"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl mb-4 text-white w-full sm:w-52">{heading1}</h2>
        <button
          className="flex items-center justify-center bg-white text-black py-2 px-4 w-full sm:w-48 rounded-lg  hover:bg-gray-200 transition-colors duration-300"
        //   onClick={onClickButton}
        >
          <span>{buttonLabel}</span>
          <FaArrowRight size={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default memo(AboutBitcoinCard);
