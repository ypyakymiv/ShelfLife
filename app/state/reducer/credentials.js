import { UPDATE } from '../actions/credentials';

const initialState = {};

const credentials = (state = initialState, action) => {
  const { type, data } = action;

  switch(type) {
    case UPDATE:
      return Object.assign({}, data);
      break;
    default:
      return state;
  }
}

export default credentials;
