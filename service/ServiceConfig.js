import {Platform} from 'react-native';

// 10.0.2.2 is the default local machine loopback address for Android emulator.
const hostname =
  __DEV__
    ? (Platform.OS === 'android' ? 'http://10.0.2.2:8080' : 'http://localhost:8080')
    : 'https://jingyuyao-webdev-1.herokuapp.com';

export const courseUrl = hostname + '/api/course';
export const moduleUrl = hostname + '/api/module';
export const lessonUrl = hostname + '/api/lesson';
export const widgetUrl = hostname + '/api/widget';
export const questionUrl = hostname + '/api/question';
