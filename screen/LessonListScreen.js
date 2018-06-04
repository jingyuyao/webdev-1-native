import React from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import widgetService from '../service/WidgetService';

export default class LessonListScreen extends React.PureComponent {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('moduleTitle', ''),
    };
  };

  _lessonKeyExtractor = (item, index) => item.id.toString();

  _renderLesson = ({item}) => (
    <View style={styles.button}>
      <Button
        title={item.title}
        onPress={() => this._onLessonPress(item)}
      />
    </View>
  );

  _onLessonPress = lesson => {
    widgetService
      .findAllByLessonId(lesson.id)
      .then(response => this.props.navigation.push('WidgetList', {
        lessonTitle: lesson.title,
        widgets: response.widgets,
      }));
  };

  render() {
    const {navigation} = this.props;
    const lessons = navigation.getParam('lessons', []);
    return (
      <View style={styles.container}>
        <FlatList
          data={lessons}
          keyExtractor={this._lessonKeyExtractor}
          renderItem={this._renderLesson}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
  },
  button: {
    marginBottom: 5,
  },
});