import React from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import lessonService from '../service/LessonService';

export default class ModuleListScreen extends React.PureComponent {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('courseTitle', ''),
    };
  };

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
    const modules = navigation.getParam('modules', []);
    return (
      <View style={styles.container}>
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
  button: {
    marginBottom: 5,
  },
});
