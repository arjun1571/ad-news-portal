import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../../shearedPage/NewsCart/NewsCart';

const Home = () => {
    const allNews= useLoaderData();
    return (
        <div>
            {
                allNews.map(news => <NewsCart key={news._id} news={news}></NewsCart>)
            }
        </div>
    );
};

export default Home;