import React from 'react';
import {StyleSheet, View, Text, TextInput, Picker} from 'react-native';

export default class QuestionPreview extends React.PureComponent {
  _renderTypeSpecificPreview = () => {
    const question = this.props.question;
    switch(question.type) {
      case 'BooleanQuestion':
        return (
          <React.Fragment>
            <Text>Answer:</Text>
            <Picker>
              <Picker.Item label='True'/>
              <Picker.Item label='False'/>
            </Picker>
          </React.Fragment>
        );
      case 'ChoiceQuestion':
        return (
          <React.Fragment>
            <Text>Answer:</Text>
            <Picker>
              {question.choices.map(choice =>
                <Picker.Item key={choice} label={choice}/>)}
            </Picker>
          </React.Fragment>
        );
      case 'FillInQuestion':
        return <Text>FillInQuestion preview is not implemented.</Text>;
      case 'EssayQuestion':
        return (
          <React.Fragment>
            <Text>Answer:</Text>
            <TextInput multiline={true} numberOfLines={3}/>
          </React.Fragment>
        );
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
