import { combineReducers } from 'redux';
import credentials from './credentials';
import feed from './feed';
import search from './search';
import library from './library';
import messages from './messages';
import transactions from './transactions';
import navigation from './navigation';

const reducer = combineReducers({
  credentials,
  feed,
  search,
  library,
  messages,
  transactions,
  navigation
});

export default reducer;
