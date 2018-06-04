import React from 'react';
import {StyleSheet, View, Text, TextInput, Picker, Button} from 'react-native';
import questionService from '../service/QuestionService';

export default class QuestionForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, props.question);
  }

  _deleteQuestion = () => {};

  _updateQuestion = () => {};

  _renderTypeSpecificForm = () => {
    switch(this.state.type) {
      case 'BooleanQuestion':
        return (
          <React.Fragment>
            <Text>Answer:</Text>
            <Picker
              selectedValue={this.state.answer}
              onValueChange={(value, index) => this.setState({answer: value})}>
              <Picker.Item label='True' value={true}/>
              <Picker.Item label='False' value={false}/>
            </Picker>
          </React.Fragment>
        );
      case 'ChoiceQuestion':
        return null;
      case 'FillInQuestion':
        return null;
      case 'EssayQuestion':
        return null;
    }
  };

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
        {this._renderTypeSpecificForm()}
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
