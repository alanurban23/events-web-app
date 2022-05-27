import axios from 'axios';
import { getEnv } from '../utils/helpers';

export const AxiosInit = axios.create({
  baseURL: getEnv('api_url'),
});
