import { createStackNavigator } from 'react-navigation';
import { Details, FeedDetailsTransition } from '../../../state/scenes/main';
import { Feed } from '../../../state/scenes/main';
import { Animated, Easing } from 'react-native';

const FeedWithDetails = createStackNavigator({
  Feed,
  FeedDetailsTransition,
  Details
}, {
  headerMode: 'none',
  cardStyle: {
    backgroundColor: 'transparent',
    opacity: 1,
  },
  transitionConfig: () => ({
    containerStyle: {
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
