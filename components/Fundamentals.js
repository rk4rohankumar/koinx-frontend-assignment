import React, { memo } from 'react'
import KeyValueTable from './FundamentalTable'
const Fundamentals = async ({ resp }) => {

    const data1 = [
        {
            key: "Bitcoin Price",
            value: resp?.market_data?.current_price?.usd
        },
        {
            key: "24h High / 24h Low",
            value: `${resp?.market_data?.high_24h?.usd} / ${resp?.market_data?.low_24h?.usd}`
        },
        {
            key: "7d High / 7d Low",
            value: `${resp?.market_data?.ath?.usd} / ${resp?.market_data?.atl?.usd}`
        },
        {
            key: "Trading Volume",
            value: resp?.market_data?.total_volume?.usd
        },
        {
            key: "Market Cap Rank",
            value: resp?.market_cap_rank
        },
    ]
    const data2 = [
        {
            key: "Market Cap",
            value: resp?.market_data?.market_cap?.usd
        },
        {
            key: "Market Cap Dominance",
            value: `${resp?.market_data?.market_cap_percentage?.btc}%`
        },
        {
            key: "Volume / Market Cap",
            value: `${resp?.market_data?.total_volume?.usd} / ${resp?.market_data?.market_cap?.usd}`
        },
        {
            key: "All-Time High",
            value: <span>
                <div>${resp?.market_data?.ath?.usd} {<ColouredText value={resp?.market_data?.ath_change_percentage?.usd} />}%</div>
                {/* <div className='m-auto'>{resp?.market_data?.ath_date?.usd?.slice(0, 10)}</div> */}
            </span>
        },
        {
            key: "All-Time Low",
            value: <span>
                <div>${resp?.market_data?.atl?.usd} {<ColouredText value={resp?.market_data?.atl_change_percentage?.usd} />}%</div>
                {/* <div className='m-auto'>{resp?.market_data?.atl_date?.usd?.slice(0, 10)}</div> */}
            </span>
        },
    ]
    return (
        <div className=' h-full  p-6 rounded-md bg-white'>
            <h1 className="my-6 text-4xl">Fundamentals</h1>
            <div className='sm:flex gap-20'>
                <KeyValueTable data={data1} />
                <KeyValueTable data={data2} />
            </div>
        </div>
    )
}


const ColouredText = ({ value }) => {
    return value > 0 ? <span className='text-green-500'>{value}</span> : <span className='text-red-500'>{value}</span>
}

export default memo(Fundamentals)
