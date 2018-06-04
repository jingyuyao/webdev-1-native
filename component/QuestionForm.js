import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import questionService from '../service/QuestionService';

export default class QuestionForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, props.question);
  }

  _deleteQuestion = () => {};

  _updateQuestion = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.type}</Text>
        <Text>Title:</Text>
        <TextInput
          value={this.state.title}
          onChangeText={text => this.setState({title: text})}
        />
        <Text>Description:</Text>
        <TextInput
          value={this.state.text}
          onChangeText={text => this.setState({text: text})}
        />
        <Text>Points:</Text>
        <TextInput
          keyboardType='numeric'
          value={this.state.points.toString()}
          onChangeText={
            text => this.setState({points: text ? parseInt(text) : 0})}
        />
        <View style={styles.actionsContainer}>
          <Button
            title='Delete question'
            color='red'
            onPress={this._deleteQuestion}
          />
          <Button
            title='Update question'
            onPress={this._updateQuestion}
          />
        </View>
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
  actionsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
