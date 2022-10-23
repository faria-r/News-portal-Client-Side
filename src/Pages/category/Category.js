import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../Home/Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    console.log(categoryNews);
const {name}= categoryNews;

    return (
        <div>
            <h2>this is {categoryNews.name}</h2>
            {
                categoryNews.map(news => <NewsSummeryCard 
                key={news._id}
                news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;