import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'james04nesbitt';

const getRepos = async () => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getRepos;