import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3000/';
export const getSeller = () => axios.get('api/seller');
export const getGoods = () => axios.get('api/goods');

// export default {
//   getSeller: () => axios.get('api/seller'),
//   getGoods: () => axios.get('api/goods')
// };
