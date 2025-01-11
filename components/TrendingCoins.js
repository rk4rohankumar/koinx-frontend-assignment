'use client'
import React, { memo } from 'react';
import CoinCard from './CoinCard.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingCoins = ({trendingData}) => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 1200,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 1600,
                settings: { slidesToShow: 5 }
            }
        ]
    };

    return (
        <div className="p-6">
            {trendingData.length > 0 ? (
                <Slider {...settings}>
                    {trendingData.map((coin) => (
                        <div key={coin.item.id} className="px-2">
                            <CoinCard coin={coin} />
                        </div>
                    ))}
                </Slider>
            ) : (
                <p className="text-center text-gray-500">Loading trending coins...</p>
            )}
        </div>
    );
}

export default memo(TrendingCoins);
