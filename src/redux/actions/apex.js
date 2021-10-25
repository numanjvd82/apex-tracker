import { GET_STATS } from '../constants/apex';

export const getStats = (name, platform) => {
  return { type: GET_STATS, payload: { name, platform } };
};
