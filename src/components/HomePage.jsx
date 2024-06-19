import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../services/newsApi';
import ArticleCard from './ArticleCard';
import './HomePage.css'; // Import the CSS file if styles are in a separate file
import Navbar from './Navbar';

const HomePage = () => {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('general');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            setError(null);
            try {
                const fetchedArticles = await fetchArticles(category, page);
                setArticles(fetchedArticles);
            } catch (error) {
                setError('Failed to fetch articles');
            }
            setLoading(false);
        };

        getArticles();
    }, [category, page]);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setPage(1); // Reset to the first page when category changes
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <Navbar/>
            <h1>Todays latest News</h1>
            <select value={category} onChange={handleCategoryChange}>
                <option value="general">General</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
                <option value="entertainment">Entertainment</option>
            </select>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="articles">
                {articles.map((article) => (
                    <ArticleCard key={article.url} article={article} />
                ))}
            </div>
            <div className="pagination">
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                    Previous
                </button>
                <span>Page {page}</span>
                <button onClick={() => handlePageChange(page + 1)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default HomePage;
