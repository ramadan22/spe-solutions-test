import axios from 'axios';

export const getList = async () => {
  try {
    const response = await axios.get('https://spe-academy.spesolution.com/api/recruitment', {
      headers: {
          Authorization: 'Bearer o7Ytbt9XQLI3PgtebJfKSXKEf0XHU74Y',
      },
    });

    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};