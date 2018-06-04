import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import widgetService from '../service/WidgetService';

export default class Widget extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, props.widget);
  }

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
              onChangeText={text => this.setState({points: parseInt(text)})}
            />
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
              onChangeText={text => this.setState({points: parseInt(text)})}
            />
          </React.Fragment>
        );
    }
  };

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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    flexDirection: 'column',
    margin: 5,
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
  },
});
