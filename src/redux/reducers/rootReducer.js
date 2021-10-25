// * redux imports
import { combineReducers } from 'redux';

//* reducers import
import statsReducer from './statsRedcuer';

const rootReducer = combineReducers({
  stats: statsReducer,
});

export default rootReducer;
