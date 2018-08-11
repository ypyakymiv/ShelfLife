import { createStackNavigator } from 'react-navigation';
import { Search, Details } from '../../../scenes/main';

const SearchNav = createStackNavigator({
  Search,
  Details
}, {
  headerMode: 'none'
});

export default SearchNav;
