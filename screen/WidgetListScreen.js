import React from 'react';
import {StyleSheet, View, Text, ScrollView, Button} from 'react-native';
import widgetService from '../service/WidgetService';
import Widget from '../component/Widget';

export default class WidgetListScreen extends React.PureComponent {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Lesson: ' + navigation.getParam('lessonTitle', ''),
    };
  };

  state = {widgets: []};

  componentDidMount() {
    this._refreshWidgets();
  }

  _refreshWidgets = () => {
    const lessonId = this.props.navigation.getParam('lessonId', 0);
    widgetService
      .findAllByLessonId(lessonId)
      .then(response => this.setState({widgets: response.widgets}));
  }

  _addAssignment = () => {
    const lessonId = this.props.navigation.getParam('lessonId', 0);
    const widgets = this.state.widgets;
    widgetService
      .create(lessonId, {
        type: 'Assignment',
        position: widgets.length,
      }).then(this._refreshWidgets);
  };

  _addExam = () => {
    const lessonId = this.props.navigation.getParam('lessonId', 0);
    const widgets = this.state.widgets;
    widgetService
      .create(lessonId, {
        type: 'Exam',
        position: widgets.length,
      }).then(this._refreshWidgets);
  };

  render() {
    const widgets = this.state.widgets;
    const assignmentsAndExams =
      widgets.filter(
        widget => widget.type === 'Assignment' || widget.type === 'Exam');
    assignmentsAndExams.sort((l, r) => l.position - r.position);

    return (
      <ScrollView style={styles.container}>
        <Text>
          Widgets can only be deleted and re-ordered in the web interface.
          Only Assignment and Exam widgets are shown.
        </Text>
        {assignmentsAndExams.map(
          widget => <Widget key={widget.id} widget={widget}/>)}
        <View style={styles.addButtonContainer}>
          <Button
            title='Add assignment'
            onPress={this._addAssignment}
          />
          <Button
            title='Add exam'
            onPress={this._addExam}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
  },
  addButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
