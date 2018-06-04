import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import widgetService from '../service/WidgetService';

export default class Widget extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, props.widget);
  }

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
            <Button title='Choose file' onPress={() => {}}/>
            <Text>Submit a link</Text>
            <TextInput/>
          </React.Fragment>
        );
      case 'Exam':
        return (
          <React.Fragment>
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
        <Button
          title='Update'
          onPress={this._updateWidget}
        />
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
    flexDirection: 'column',
    margin: 5,
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
  },
  preview: {
    marginTop: 5,
    marginBottom: 5,
  },
});
