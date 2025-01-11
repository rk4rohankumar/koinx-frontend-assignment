import React,{memo} from 'react';
const greenArrow = 'https://i.ibb.co/V213cpN/upward-green.png';
const redArrow = 'https://i.ibb.co/0ctqGxZ/down-redpreview.png';

const Trending = async() => {
    const trending = await fetch('https://api.coingecko.com/api/v3/search/trending').then(response => response.json()).then(data => data.coins || [])
 const filteredTrending = trending
        .filter((crypto) => crypto.item.score >= 0 && crypto.item.score <= 2)
        .slice(0, 3);

    return (
        <div>
            <div className="flex flex-col bg-white shadow-md rounded-lg my-6 text-black ">
                <div className="flex p-4  border-gray-300 text-2xl">
                    <div className="flex-1 font-bold my-2">
                        <p className='text-2xl'>Trending Coins (24 Hr)</p>
                    </div>
                </div>
                {filteredTrending.map((crypto, index) => (
                    <div key={index} className="flex py-2 px-4 mb-2 items-center">
                        {crypto.item.small && (
                            <img
                                src={crypto.item.small}
                                alt={crypto.item.name}
                                className="w-8 h-8 object-cover rounded-full mr-2"
                            />
                            
                        )}
                        <div className="flex-1 text-sm">
                            <div className="flex items-center">
                                <div>{crypto.item.name}</div>
                                <div className="ml-2">({crypto.item.symbol})</div>
                            </div>
                        </div>
                        <div  className={`flex items-center  p-2 mx-1 w-20 rounded-lg text-green-700 ${
                            crypto.item.data.price_change_percentage_24h.usd >= 0
                                ? `bg-green-100 text-green-700`
                                : `bg-red-100  text-red-700`
                        }`}>
                            {crypto.item.data.price_change_percentage_24h.usd >= 0 ? (
                                <span>▲</span>
                            ) : (
                                <span>▼</span>
                            )}
                            <div className="mr-1">
                                {Math.abs(crypto.item.data.price_change_percentage_24h.usd).toFixed(2)}%

                               



                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(Trending);