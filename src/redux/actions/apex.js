import axios from 'axios';
import { GET_STATS } from '../constants/apex';

// * first response is for getting the uid then with the uid we can get the stats
export const getStats = (name, platform) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.mozambiquehe.re/nametouid?player=${name}&platform=${platform}&auth=9zhuKpMjdmRd3Hn0Vbe5`
      );
      const { uid } = res.data;
      if (uid) {
        const res2 = await axios.get(
          `https://api.mozambiquehe.re/bridge?platform=${platform}&uid=${uid}&auth=9zhuKpMjdmRd3Hn0Vbe5`
        );
        dispatch({ type: GET_STATS, payload: res2.data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
