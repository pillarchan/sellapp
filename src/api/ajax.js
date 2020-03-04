import axios from 'axios';

const sellerBaseUrl = 'http://127.0.0.1:666/';
export const getSeller = () => {
  return axios.get(sellerBaseUrl + 'seller/');
};
