import React from 'react';
import BitCoinChart from "@/components/BitCoinChart";
import Performance from '@/components/Performance'
import Fundamentals from "@/components/Fundamentals";
import Sentiment from "@/components/Sentiment";
import Bottom from "@/components/Bottom";
import Tokenomics from "@/components/Tokenomics";
import AboutBitcoin from "@/components/AboutBitcoin";
import Team from "@/components/TeamDetails";
import GetStarted from '@/components/GetStarted';
import TrendingCoins from '@/components/Trending';
import NavigationMenu from '@/components/NavigationMenu';

export default async function Home() {
    // return (<div>Please go to /currency/bitcoin</div>)
    const apikey = 'CG-CBkPSNZde1ZQSHbokyk2GtBX'
    const url = 'https://api.coingecko.com/api/v3/coins/bitcoin'
    const response = await fetch(url)
    const resp = await response.json()

    return (
        <div className='bg-porcelian'>
            <div className='mx-8 pt-3'>
                <span className='text-riverBed'>{`Cryptocurrencies >> `}</span>
                <span >
                    {`Bitcoin`}
                </span>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 px-8 mt-2 ">
                <div className="lg:w-9/12 w-full space-y-8">
                    <BitCoinChart />
                    <NavigationMenu />
                    <div id="fundamentals">
                        <Performance
                            highest={resp?.market_data?.high_24h?.usd}
                            lowest={resp?.market_data?.low_24h?.usd}
                            current={resp?.market_data?.current_price?.usd}
                        />
                        <Fundamentals resp={resp} />
                    </div>
                    <div id="sentiment">
                        <Sentiment />
                    </div>
                    <div id="news-insights">
                        <AboutBitcoin />
                    </div>
                    <div id="tokenomics">
                        <Tokenomics />
                    </div>
                    <div id="team">
                        <Team />
                    </div>
                    <div id="bottom">
                    </div>
                </div>
                <div className="lg:w-3/12 w-full space-y-8">
                    <GetStarted />
                    <TrendingCoins />
                </div>
            </div>
            <Bottom />
        </div>

    );
}
