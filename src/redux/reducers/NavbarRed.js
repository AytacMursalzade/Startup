// reducers.js
import { OPEN_SUBMENU, CLOSE_SUBMENU } from './actions';

const initialState = {
  activeSubmenu: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SUBMENU:
      return true;
    case CLOSE_SUBMENU:
      return false;
    default:
      return state;
  }
};

export default reducer;
