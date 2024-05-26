import { StyleSheet, Text, View, FlatList } from 'react-native';



export default function ExerciseListItem({item}){
    return (
        <View style={styles.exerciseContainer}>
          <Text style={styles.exerciseName}>Exercise Name:{item.name}</Text>
          <Text style={styles.exerciseSubtitles}>
            <Text style={styles.subValue}>{item.muscle.toUpperCase()}</Text> | {' '}
            <Text style={styles.subValue}>{item.equipment.toUpperCase()}</Text>
          </Text>
        </View>
    );
  }


const styles = StyleSheet.create({
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
    },
    subValue:{
        textTransform: "capitalize"
    }
  });
  