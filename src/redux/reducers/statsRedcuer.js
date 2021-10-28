import { GET_STATS } from '../constants/apex';

const initialState = {
  stats: {},
  loading: true,
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATS:
      return {
        ...state,
        stats: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default statsReducer;
