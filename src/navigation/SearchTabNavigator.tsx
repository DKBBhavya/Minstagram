import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import UserSearchScreen from '../screens/UserSearchScreen';
import colors from '../theme/colors';
import {SearchTabNavigatorParamList} from './types';

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

const SearchTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Tab.Screen name="Users" component={UserSearchScreen} />
      <Tab.Screen name="Posts" component={CommentsScreen} />
    </Tab.Navigator>
  );
};

export default SearchTabNavigator;
