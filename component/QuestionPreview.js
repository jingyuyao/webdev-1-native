import React from 'react';
import {StyleSheet, View, Text, TextInput, Picker, FlatList, Button} from 'react-native';

export default class QuestionPreview extends React.PureComponent {
  _renderTypeSpecificPreview = () => {
    const question = this.props.question;
    switch(question.type) {
      case 'BooleanQuestion':
        return null;
      case 'ChoiceQuestion':
        return null;
      case 'FillInQuestion':
        return null;
      case 'EssayQuestion':
        return null;
    }
  }

  render() {
    const question = this.props.question;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          {question.title} Points: {question.points}
        </Text>
        <Text>{question.text}</Text>
        {this._renderTypeSpecificPreview()}
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
});
