import React from 'react';
import {StyleSheet, View} from 'react-native';
import widgetService from '../service/WidgetService';
import Widget from '../component/Widget';

export default class WidgetListScreen extends React.PureComponent {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('lessonTitle', ''),
    };
  };

  render() {
    const widgets = this.props.navigation.getParam('widgets', []);
    const assignmentsAndExams =
      widgets.filter(
        widget => widget.type === 'Assignment' || widget.type === 'Exam');
    assignmentsAndExams.sort((l, r) => l.position - r.position);

    return (
      <View style={styles.container}>
        {assignmentsAndExams.map(
          widget => <Widget key={widget.id} widget={widget}/>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
  },
});
