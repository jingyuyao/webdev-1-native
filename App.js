import React from 'react';
import {createStackNavigator} from 'react-navigation';
import CourseListScreen from './screen/CourseListScreen';

const RootStack = createStackNavigator(
  {
    CourseList: CourseListScreen,
  },
  {
    initialRouteName: 'CourseList',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}
