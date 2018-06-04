import {Platform} from 'react-native';

const androidHost = 'http://10.0.2.2:8080';
const iosHost = 'http://localhost:8080';
const prodHost = 'https://jingyuyao-webdev-1.herokuapp.com';
const hostname =
  __DEV__ ? (Platform.OS === 'android' ? androidHost : iosHost) : prodHost;

export const courseUrl = hostname + '/api/course';
export const moduleUrl = hostname + '/api/module';
export const lessonUrl = hostname + '/api/lesson';
export const widgetUrl = hostname + '/api/widget';
export const questionUrl = hostname + '/api/question';
