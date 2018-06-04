import React from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';

export default class LessonListScreen extends React.PureComponent {
  _lessonKeyExtractor = (item, index) => item.id.toString();

  _renderLesson = ({item}) => (
    <View style={styles.button}>
      <Button
        title={item.title}
        onPress={() => this._onLessonPress(item)}
      />
    </View>
  );

  _onLessonPress = lesson => console.log(lesson);

  render() {
    const {navigation} = this.props;
    const moduleTitle = navigation.getParam('moduleTitle', '');
    const lessons = navigation.getParam('lessons', []);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{moduleTitle}</Text>
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 5,
  },
});
