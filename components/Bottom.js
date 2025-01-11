import { memo } from 'react';
import TrendingCoins from './TrendingCoins.js'

const Footer =async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
    const data = await response.json();

    return (
        <div className=' ml-6 rounded-md bg-white'>
            <h1 className='pl-5 pt-5 text-left text-xl font-bold'>You May Also Like</h1>
            <TrendingCoins trendingData={data.coins} />
            <h1 className='ml-5 text-left text-xl font-bold'>Trending Coins</h1>
            <TrendingCoins trendingData={data.coins} />
        </div>
    )
}

export default memo(Footer)