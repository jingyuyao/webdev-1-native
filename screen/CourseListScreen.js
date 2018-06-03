import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class CourseListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CourseListScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
