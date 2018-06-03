import React from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import courseService from '../service/CourseService';

export default class CourseListScreen extends React.PureComponent {
  state = {courses: []};

  _courseKeyExtractor = (item, index) => item.id.toString();

  _renderCourse = ({item}) => (
    <Button
      title={item.title}
      onPress={() => this._onCoursePress(item)}
    />
  );

  _onCoursePress = item => console.log(item);

  componentDidMount() {
    courseService
      .findAll()
      .then(courses => this.setState({courses: courses}));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>CourseList</Text>
        <FlatList
          data={this.state.courses}
          keyExtractor={this._courseKeyExtractor}
          renderItem={this._renderCourse}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
