import axios from 'axios';
import { SERVER_URL } from '../Config/server';

export async function CheckedToken(token) {
  const config = {
    method: 'get',
    url: `${SERVER_URL}/user/profile`,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  try {
    const response = await axios(config);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
