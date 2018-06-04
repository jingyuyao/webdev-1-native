import React from 'react';
import {createStackNavigator} from 'react-navigation';
import CourseListScreen from './screen/CourseListScreen';
import ModuleListScreen from './screen/ModuleListScreen';

const RootStack = createStackNavigator(
  {
    CourseList: CourseListScreen,
    ModuleList: ModuleListScreen,
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
