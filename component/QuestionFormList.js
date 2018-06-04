import React from 'react';
import {StyleSheet, View, Text, Picker, Button} from 'react-native';
import questionService from '../service/QuestionService';
import QuestionForm from './QuestionForm';

export default class QuestionFormList extends React.PureComponent {
  state = {
    questions: [],
    newQuestionType: 'BooleanQuestion',
  };

  componentDidMount() {
    this._refreshQuestions();
  }

  _refreshQuestions = () => {
    questionService
      .findAllByExamId(this.props.examId)
      .then(response => this.setState({questions: response.questions}));
  };

  _onNewQuestionTypeChange = (itemValue, itemIndex) => {
    this.setState({newQuestionType: itemValue})
  };

  _addQuestion = () => {
    questionService
      .create(this.props.examId, {type: this.state.newQuestionType})
      .then(this._refreshQuestions);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Questions</Text>
        {this.state.questions.map(question =>
          <QuestionForm key={question.id} question={question}/>)}
        <View style={styles.addQuestionContainer}>
          <Picker
            style={styles.addQuestionTypePicker}
            selectedValue={this.state.newQuestionType}
            onValueChange={this._onNewQuestionTypeChange}>
            <Picker.Item label="BooleanQuestion" value="BooleanQuestion"/>
            <Picker.Item label="ChoiceQuestion" value="ChoiceQuestion"/>
            <Picker.Item label="FillInQuestion" value="FillInQuestion"/>
            <Picker.Item label="EssayQuestion" value="EssayQuestion"/>
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
  addQuestionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  addQuestionTypePicker: {
    flexGrow: 1,
    marginRight: 5,
  },
});
