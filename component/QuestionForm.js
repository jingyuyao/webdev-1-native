import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import questionService from '../service/QuestionService';

export default class QuestionForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, props.question);
  }

  render() {
    return (
      <View styles={styles.container}>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  header: {
    fontWeight: 'bold',
  },
});
