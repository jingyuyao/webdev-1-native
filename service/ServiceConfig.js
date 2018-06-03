const hostname =
  __DEV__ ? 'http://localhost:8080' : 'https://jingyuyao-webdev-1.herokuapp.com';

export const courseUrl = hostname + '/api/course';
export const moduleUrl = hostname + '/api/module';
export const lessonUrl = hostname + '/api/lesson';
export const widgetUrl = hostname + '/api/widget';
export const questionUrl = hostname + '/api/question';
