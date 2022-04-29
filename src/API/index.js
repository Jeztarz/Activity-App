import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://final-project-backend-two.vercel.app',
  validateStatus: () => true,
});

export const getRecords = async () => {
    const response = await client.get('/users/me/records');
    return response
}