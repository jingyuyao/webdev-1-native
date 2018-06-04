import React from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import lessonService from '../service/LessonService';

export default class ModuleListScreen extends React.PureComponent {
  _moduleKeyExtractor = (item, index) => item.id.toString();

  _renderModule = ({item}) => (
    <View style={styles.button}>
      <Button
        title={item.title}
        onPress={() => this._onModulePress(item)}
      />
    </View>
  );

  _onModulePress = module => {
    lessonService
      .findAllByModuleId(module.id)
      .then(lessons => this.props.navigation.push('LessonList', {
        moduleTitle: module.title,
        lessons: lessons,
      }));
  };

  render() {
    const {navigation} = this.props;
    const courseTitle = navigation.getParam('courseTitle', '');
    const modules = navigation.getParam('modules', []);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{courseTitle}</Text>
        <FlatList
          data={modules}
          keyExtractor={this._moduleKeyExtractor}
          renderItem={this._renderModule}/>
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
