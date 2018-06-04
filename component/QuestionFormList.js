import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import questionService from '../service/QuestionService';

export default class QuestionFormList extends React.PureComponent {
  state = {questions: []};

  componentDidMount() {
    questionService
      .findAllByExamId(this.props.examId)
      .then(response => this.setState({questions: response.questions}));
  }

  render() {
    console.log(this.state.questions);
    return (
      <View>
        <Text>Questions</Text>
      </View>
    );
  }
}
