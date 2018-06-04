import React from 'react';
import {createStackNavigator} from 'react-navigation';
import CourseListScreen from './screen/CourseListScreen';
import ModuleListScreen from './screen/ModuleListScreen';
import LessonListScreen from './screen/LessonListScreen';

const RootStack = createStackNavigator(
  {
    CourseList: CourseListScreen,
    ModuleList: ModuleListScreen,
    LessonList: LessonListScreen,
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
