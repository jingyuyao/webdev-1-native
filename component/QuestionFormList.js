import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import questionService from '../service/QuestionService';
import QuestionForm from './QuestionForm';

export default class QuestionFormList extends React.PureComponent {
  state = {questions: []};

  componentDidMount() {
    questionService
      .findAllByExamId(this.props.examId)
      .then(response => this.setState({questions: response.questions}));
  }

  render() {
    return (
      <View styles={styles.container}>
        <Text>Questions</Text>
        {this.state.questions.map(question =>
          <QuestionForm key={question.id} question={question}/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
});
