import React from 'react';


const ArticleCard = ({ article }) => {
    return (
        <div className="article-card">
            <img src={article.urlToImage} alt={article.title} />
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    );
};

export default ArticleCard;
