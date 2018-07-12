import { createStackNavigator } from 'react-navigation';
import init from './init';
import main from './main';

const Nav = createStackNavigator({
  init: main,
  main: main
}, {
  headerMode: 'none'
});

export default Nav;
