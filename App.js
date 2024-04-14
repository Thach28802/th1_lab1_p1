import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Project1 from './src/Project1';
import Project2 from './src/Project2';
import Project3 from './src/Project3';
import Project4 from './src/Project4';
import Project5 from './src/Project5';
import Project6 from './src/Project6';
import Project7 from './src/Project7';
import Project8 from './src/Project8';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.projectContainer}>
        <Project1 />
      </View>
      <View style={styles.projectContainer}>
        <Project2 />
      </View>
      <View style={styles.projectContainer}>
        <Project3 />
      </View>
      <View style={styles.projectContainer}>
        <Project4 />
      </View>
      <View style={styles.projectContainer}>
        <Project5 />
      </View>
      <View style={styles.projectContainer}>
        <Project6 />
      </View>
      <View style={styles.projectContainer}>
        <Project7 />
      </View>
      <View style={styles.projectContainer}>
        <Project8 />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectContainer: {
    marginBottom: 50,
  },
});

export default App;
