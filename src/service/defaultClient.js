import axios from 'axios';

const defaultClient = axios.create({
  baseURL: '/kart/v1.0',
  headers: {
    Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTc3ODg3MDY3NSIsImF1dGhfaWQiOiI0IiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwic2VydmljZV9pZCI6IjQzMDAxMTM5MyIsIlgtQXBwLVJhdGUtTGltaXQiOiIyMDAwMDoxMCIsIm5iZiI6MTY0NjYzMjMyMSwiZXhwIjoxNzA5NzA0MzIxLCJpYXQiOjE2NDY2MzIzMjF9.l2hPdl6jXw1GECTdpWUGhAnQwSO2-yTnEteodpUh4kU`,
  },
});

export default defaultClient;
