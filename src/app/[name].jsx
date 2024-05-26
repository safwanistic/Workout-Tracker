import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import exercises from '../../assets/data/exercises.json'
import {Stack} from 'expo-router'

export default function ExerciseDetailsScreen(){
    const params = useLocalSearchParams();
    const exercise= exercises.find((item)=> item.name === params.name)

    if (!exercise){
        return <Text>Exercise Not Found 😞</Text>
    }

    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Stack.Screen options={{title: exercise.name}}/>
            <View style={styles.panel}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseSubtitles}>
                    <Text style={styles.subValue}>{exercise.muscle.toUpperCase()}</Text> | {' '}
                    <Text style={styles.subValue}>{exercise.equipment.toUpperCase()}</Text>
                </Text>
            </View>
            
            <View style={styles.panel}>
            <Text style={styles.instructions}>{exercise.instructions}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        gap:10,
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
    subValue:{
        textTransform: "capitalize"
    },
    instructions:{
        fontSize:16,
        lineHeight:20,
        letterSpacing:0.5,
    },
    panel:{
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
    }
})