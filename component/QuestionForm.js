import React from 'react';
import {StyleSheet, View, Text, TextInput, Picker, FlatList, Button} from 'react-native';
import questionService from '../service/QuestionService';

export default class QuestionForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = Object.assign({newChoice: ''}, props.question);
  }

  _deleteQuestion = () => {
    this.props.deleteQuestion();
  };

  _updateQuestion = () => {
    questionService.update(this.state.id, this.state);
  };

  _removeChoice = choice => {
    const newChoices = this.state.choices.filter(c => c !== choice);
    this.setState({choices: newChoices});
  };

  _addChoice = () => {
    this.setState({
      choices: [...this.state.choices, this.state.newChoice],
      newChoice: '',
    });
  };

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
        return (
          <React.Fragment>
            <Text>Choices:</Text>
            <FlatList
              data={this.state.choices}
              keyExtractor={(item, index) => item}
              renderItem={({item, index}) =>
                  <View style={styles.choice}>
                    <Text>{index}. {item}</Text>
                    <Button
                      title='Delete'
                      color='red'
                      onPress={() => this._removeChoice(item)}
                    />
                  </View>
              }
            />
            <View style={styles.newChoiceContainer}>
              <TextInput
                style={styles.newChoiceInput}
                value={this.state.newChoice}
                onChangeText={text => this.setState({newChoice: text})}
              />
              <Button
                title='Add choice'
                onPress={this._addChoice}
              />
            </View>
            <Text>Answer:</Text>
            <Picker
              selectedValue={this.state.answer}
              onValueChange={(value, index) => this.setState({answer: value})}>
              {this.state.choices.map((choice, index) =>
                <Picker.Item key={choice} label={index.toString()} value={index}/>)}
            </Picker>
          </React.Fragment>
        );
      case 'FillInQuestion':
        return <Text>Not implemented</Text>;
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
  choice: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newChoiceContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  newChoiceInput: {
    flexGrow: 1,
    marginRight: 5,
  },
});
