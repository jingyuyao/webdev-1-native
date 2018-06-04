import React from 'react';
import {StyleSheet, View, Text, Picker, Button} from 'react-native';
import questionService from '../service/QuestionService';
import QuestionForm from './QuestionForm';

export default class QuestionFormList extends React.PureComponent {
  state = {
    newQuestionType: 'BooleanQuestion',
  };

  _onNewQuestionTypeChange = (itemValue, itemIndex) => {
    this.setState({newQuestionType: itemValue})
  };

  _addQuestion = () => {
    questionService
      .create(this.props.examId, {type: this.state.newQuestionType})
      .then(this.props.refreshQuestions);
  };

  _deleteQuestion = question => {
    questionService
      .remove(question.id)
      .then(this.props.refreshQuestions);
  };

  _updateQuestion = question => {
    questionService
      .update(question.id, question)
      .then(this.props.refreshQuestions);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Questions</Text>
        {this.props.questions.map(question =>
          <QuestionForm
            key={question.id}
            question={question}
            deleteQuestion={() => this._deleteQuestion(question)}
            updateQuestion={this._updateQuestion}
          />)}
        <View style={styles.addQuestionContainer}>
          <Picker
            style={styles.addQuestionTypePicker}
            selectedValue={this.state.newQuestionType}
            onValueChange={this._onNewQuestionTypeChange}>
            <Picker.Item label='BooleanQuestion' value='BooleanQuestion'/>
            <Picker.Item label='ChoiceQuestion' value='ChoiceQuestion'/>
            <Picker.Item label='FillInQuestion' value='FillInQuestion'/>
            <Picker.Item label='EssayQuestion' value='EssayQuestion'/>
          </Picker>
          <Button
            title='Add question'
            onPress={this._addQuestion}
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
  addQuestionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  addQuestionTypePicker: {
    flexGrow: 1,
    marginRight: 5,
  },
});
