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
      backgroundColor: 'beige',
      padding:10,
      borderRadius:10,
      gap:5,
      marginHorizontal:2,
        shadowColor:'#000',
        shadowOffset: {
            width:0,
            height: 1
        },
        shadowOpacity:0.4,
        shadowRadius:1.41,
        elevation:3,
    },
    subValue:{
        textTransform: "capitalize"
    }
  });
  