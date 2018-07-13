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
}, {
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    showLabel: false
  }
});

export default Main;
