import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCart from '../../../shearedPage/NewsCart/NewsCart';

const Categories = () => {
    const allCataNews = useLoaderData();
    console.log();
    return (
        <div>
            {
                allCataNews.map(news => <NewsCart key={news._id} news={news}></NewsCart>)
            }
        </div>
    );
};

export default Categories;