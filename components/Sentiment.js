import React, { memo } from 'react'
import CarouselCard from './CarausalCard'
import { SentimentItems } from '@/staticData'
const Sentiment = () => {
  return (
    <div className='bg-white  pt-6 rounded-md'>
      <h1 className="text-4xl mx-6   ">Sentiment</h1>
      <span className='ml-6 text-xl font-inter'>key events</span>
      <CarouselCard items={SentimentItems} />

      <AnalystEstimates buy={67} hold={34} sell={18} />
    </div>
  )
}


const AnalystEstimates = ({ buy, hold, sell }) => {
  const total = buy + hold + sell;

  const buyWidth = (buy / total) * 100;
  const holdWidth = (hold / total) * 100;
  const sellWidth = (sell / total) * 100;

  return (
    <div className="p-6">
      <h1 className="my-6 text-xl">Analyst Estimates</h1>
      <div className="flex items-center">
        <div className="flex-shrink-0 p-14 rounded-full bg-aquaSpring text-greenBlue font-bold">
          {((buy / total) * 100).toFixed(0)}%
        </div>
        <div className="ml-6 w-full space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slateGray mr-4">Buy</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-greenBlue rounded-full h-2"
                style={{ width: `${buyWidth}%` }}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slateGray mr-4">Hold</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-silver rounded-full h-2"
                style={{ width: `${holdWidth}%` }}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slateGray mr-4">Sell</span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 rounded-full h-2"
                style={{ width: `${sellWidth}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default memo(Sentiment)