const initialState = {
  data: [],
  focused: null
};

const feed = (state = initialState, action) => {
  switch(action.type) {
    case "LOAD_FEED_SUCCESS":
      return Object.assign({}, state, action.payload.data.feed);
    case "SET_FOCUS":
      return Object.assign({}, state, {focused: action.payload});
    case "CLEAR_FOCUS":
      return Object.assign({}, state, {focused: null});
    default:
      return state;
  }
}

export default feed;
