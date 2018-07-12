import { createBottomTabNavigator } from 'react-navigation';
import Feed from './Feed';
import Search from './Search';
import Library from './Library';
import Messages from './Messages';
import Transactions from './Transactions';

const Main = createBottomTabNavigator({
  Feed,
  Search,
  Library,
  Messages,
  Transactions
});

export default Main;
