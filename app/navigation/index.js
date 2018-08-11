import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {
  reduxifyNavigator,
  createNavigationReducer,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import init from './init';
import main from './main';

const Nav = createStackNavigator({
  init: main,
  main: main
}, {
  headerMode: 'none'
});

const mapStateToProps = (state) => {
  return { state: state.navigation };
}

const navMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigation
);

const navReducer = createNavigationReducer(Nav);

export default connect(mapStateToProps)(reduxifyNavigator(Nav, "root"));

export {
  navReducer,
  navMiddleware
};
