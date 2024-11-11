import axios from './mockApi';

export const fetchProducts = async () => {
    try {
        const response = await axios.get('/api/products');
        console.log('response', response)
        return response.data.products
    } catch(error){
        console.error('Error fetching products:', error);
        return [];
    }
}