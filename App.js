import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';

export default function App() {
  const exercise = exercises[8];
  

  return (
    <View style={styles.container}>
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>Exercise Name: {exercise.name}</Text>
        <Text style={styles.exerciseSubtitles}>Muscle in Action: {exercise.muscle.toUpperCase()}</Text>
        <Text style={styles.exerciseSubtitles}>Equipment in Use: {exercise.equipment.toUpperCase()}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding:10,
  },
  exerciseName:{
    fontSize:20, 
    fontWeight: '600',
    marginBottom:5
  },
  exerciseSubtitles:{
    color: 'dimgray', 
    fontWeight: '600',
  },
  exerciseContainer:{
    backgroundColor: '#fff',
    padding:10,
    borderRadius:10,
    gap: 5,
  }
});
