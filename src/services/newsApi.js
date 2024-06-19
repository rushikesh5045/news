import axios from 'axios';

const API_KEY = '25851e6859204f978f2dd622d87b4c2e';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchArticles = async (category = 'general', page = 1) => {
    try {
        const response = await axios.get(`${BASE_URL}/top-headlines`, {
            params: {
                apiKey: API_KEY,
                category,
                page,
                pageSize: 10,
                language:"en"
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
    }
};
