import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import widgetService from '../service/WidgetService';
import questionService from '../service/QuestionService';
import QuestionFormList from '../component/QuestionFormList';
import QuestionPreview from '../component/QuestionPreview';

export default class Widget extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = Object.assign({questions: []}, props.widget);
  }

  componentDidMount() {
    if (this.state.type === 'Exam') {
      this._refreshQuestions();
    }
  }

  _refreshQuestions = () => {
    questionService
      .findAllByExamId(this.state.id)
      .then(response => this.setState({questions: response.questions}));
  };

  _updateWidget = () => {
    widgetService.update(this.state.id, this.state);
  };

  _renderTypeSpecificForm = () => {
    switch (this.state.type) {
      case 'Assignment':
        return (
          <React.Fragment>
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
            <View style={styles.updateButtonContainer}>
              <Button
                title='Update widget'
                onPress={this._updateWidget}
              />
            </View>
          </React.Fragment>
        );
      case 'Exam':
        return (
          <React.Fragment>
            <Text>Title:</Text>
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
            <View style={styles.updateButtonContainer}>
              <Button
                title='Update widget'
                onPress={this._updateWidget}
              />
            </View>
            <QuestionFormList
              examId={this.state.id}
              questions={this.state.questions}
              refreshQuestions={this._refreshQuestions}/>
          </React.Fragment>
        );
    }
  };

  _renderTypeSpecificPreview = () => {
    switch (this.state.type) {
      case 'Assignment':
        return (
          <React.Fragment>
            <Text style={styles.header}>
              {this.state.title} Points: {this.state.points}
            </Text>
            <Text>{this.state.text}</Text>
            <Text>Essay Answer</Text>
            <TextInput multiline={true} numberOfLines={3}/>
            <Text>Upload file</Text>
            <View style={styles.chooseFileButtonContainer}>
              <Button title='Choose file' onPress={() => {}}/>
            </View>
            <Text>Submit a link</Text>
            <TextInput/>
          </React.Fragment>
        );
      case 'Exam':
        return (
          <React.Fragment>
            <Text style={styles.header}>
              Exam Points: {this.state.points}
            </Text>
            <Text>{this.state.text}</Text>
            {this.state.questions.map(question =>
              <QuestionPreview key={question.id} question={question}/>)}
          </React.Fragment>
        );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {this.state.type} widget
        </Text>
        <Text>Widget name:</Text>
        <TextInput
          value={this.state.name}
          onChangeText={text => this.setState({name: text})}
        />
        {this._renderTypeSpecificForm()}
        <Text style={styles.preview}>Preview:</Text>
        {this._renderTypeSpecificPreview()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    margin: 5,
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
  },
  updateButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  chooseFileButtonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  preview: {
    marginTop: 5,
    marginBottom: 5,
  },
});
