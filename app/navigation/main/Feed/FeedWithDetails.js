import { createStackNavigator } from 'react-navigation';
import { Feed, Details, FeedDetailsTransition } from '../../../scenes/main';
import { Animated, Easing } from 'react-native';

const FeedWithDetails = createStackNavigator({
  Feed,
  FeedDetailsTransition,
  Details
}, {
  headerMode: 'none',
  transitionConfig: () => ({
    cardStyle: {
      backgroundColor: 'transparent'
    },
  	transitionSpec: {
  		duration: 0,
  		timing: Animated.timing,
  		easing: Easing.step0,
  	}
  }),
  mode: 'modal'
});

export default FeedWithDetails;
