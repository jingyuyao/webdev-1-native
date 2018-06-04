import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import widgetService from '../service/WidgetService';

export default class Widget extends React.PureComponent {
  render() {
    const widget = this.props.widget;
    return (
      <View style={styles.container}>
        <Text>Preview:</Text>
        <Text style={styles.header}>
          {widget.title ? widget.title : 'Exam'} Points: {widget.points}
        </Text>
        <Text>{widget.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 10,
  },
  header: {
    fontWeight: 'bold',
  },
});
