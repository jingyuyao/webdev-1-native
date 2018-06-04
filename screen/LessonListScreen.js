import React from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';

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
    this.props.navigation.push('WidgetList', {
      lessonId: lesson.id,
      lessonTitle: lesson.title,
    });
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
