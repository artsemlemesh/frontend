
import axios from "axios";
import MockAdapter from "axios-mock-adapter";


const mock = new MockAdapter(axios, { delayResponse: 500 });



export const setupMock = () => {
    mock.onGet("/api/users").reply(200, {
        products: [
            { id: 1, name: 'Product 1', price: 29.99, description: 'Description for product 1' },
            { id: 2, name: 'Product 2', price: 19.99, description: 'Description for product 2' },
            { id: 3, name: 'Product 3', price: 39.99, description: 'Description for product 3' },
          ],
    })
    mock.onGet('/api/products').reply(200, {
        products: [
            { id: 1, name: 'Product 1', price: 29.99, description: 'Description for product 1' },
            { id: 2, name: 'Product 2', price: 19.99, description: 'Description for product 2' },
            { id: 3, name: 'Product 3', price: 39.99, description: 'Description for product 3' },
        ],
    })
}

export default axios;