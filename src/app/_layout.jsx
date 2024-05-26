import { Stack } from "expo-router";


export default function RootLayout(){
    return(
    <Stack>
        <Stack.Screen name="index" options={{title:'List of Exercises'}}></Stack.Screen>
    </Stack>
    );
}