import React from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import courseService from '../service/CourseService';
import moduleService from '../service/ModuleService';

export default class CourseListScreen extends React.PureComponent {
  static navigationOptions = {
    title: 'Courses',
  };

  state = {courses: []};

  _courseKeyExtractor = (item, index) => item.id.toString();

  _renderCourse = ({item}) => (
    <View style={styles.button}>
      <Button
        title={item.title}
        onPress={() => this._onCoursePress(item)}
      />
    </View>
  );

  _onCoursePress = course => {
    moduleService
      .findAllByCourseId(course.id)
      .then(modules => this.props.navigation.push('ModuleList', {
        courseTitle: course.title,
        modules: modules,
      }));
  };

  componentDidMount() {
    courseService
      .findAll()
      .then(courses => this.setState({courses: courses}));
  }

  render() {
    return (
      <View style={styles.container}>
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
    padding: 10,
  },
  button: {
    marginBottom: 5,
  },
});
