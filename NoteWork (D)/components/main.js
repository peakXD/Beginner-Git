import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput,TouchableOpacity } from 'react-native';

import Note from './note';

export default class Main extends React.Component {

    constructor(props){
        super(props);
        this.state={
            noteArray: [],
            noteText: '',
        }
    }

  render() {
    let notes = this.state.noteArray.map((val, key) => { 
        return <Note key={key} keyval={key} val={val} 
        deleteMethod={() => this.deleteNote(key)}/>
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.textHeader}> - Note Work - </Text>
        </View>
        <ScrollView style={styles.ScrollView}>
            {notes}
        </ScrollView>
        <View style={styles.footer}>
            <TextInput
            onChangeText={(noteText) => this.setState({noteText})}
            style={styles.TextInput}
            placeholder="Tuliskan Tugasmu"
            placeholderTextColor="white"/>            
        </View>
        <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
            <Text style={styles.addButtonText}> + </Text>
        </TouchableOpacity>
      </View>
    );
  }
  addNote() {
      if(this.state.noteArray){
          var d = new Date();
          this.state.noteArray.push({
              'date' : d.getFullYear() +
              '/' + (d.getMonth() + 1) +
              '/' + d.getDate(),
              'note' : this.state.noteText
          });
          this.setState({ noteArray: this.state.noteArray})
          this.setState({noteText: ''})
        }
  }
  deleteNote(key) {
      this.state.noteArray.splice(key, 1);
      this.setState({ noteArray: this.state.noteArray})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
      backgroundColor: '#E91E63',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#ddd',
  },
  textHeader: {
      color: 'white',
      fontSize: 18,
      paddingTop: 48,
      paddingBottom: 15,
  },
  ScrollView: {
      flex: 1,
      marginBottom: 100,
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 15,
  },
  TextInput: {
      alignSelf: 'stretch',
      color: '#ffff',
      padding: 15,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
  },
  addButton: {
      position: 'absolute',
      zIndex: 12,
      right: 10,
      bottom: 90,
      backgroundColor: '#E91E63',
      width: 50,
      height: 50,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
  },
  addButtonText: {
      color: 'white',
      fontSize: 24,
  },
});
