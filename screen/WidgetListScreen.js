import React from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import widgetService from '../service/WidgetService';

export default class WidgetListScreen extends React.PureComponent {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('lessonTitle', ''),
    };
  };

  render() {
    const widgets = this.props.navigation.getParam('widgets', []);
    console.log(widgets);
    return (
      <View style={styles.container}>
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
});
