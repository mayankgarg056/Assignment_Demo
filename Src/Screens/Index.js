import React, { } from "react";
import { View, Dimensions, LogBox, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// class declared
import AssignMent_1 from './Assignment_1';
import AssignMent_2 from './Assignment_2';
import AssignMent_3 from './Assignment_3';
// local class variable
const Stack = createStackNavigator();


const Index = props => {
    React.useEffect(() => {
        LogBox.ignoreAllLogs(true)
    }, []);


    return (
            <View style={{ flex: 1, }}>
                <NavigationContainer >
                    <NavigationStack />
                </NavigationContainer>
            </View>
    );
}


const NavigationStack = () => {
    return (
        <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
            <Stack.Screen name="AssignMent_1" component={AssignMent_1}  />
            <Stack.Screen name="AssignMent_2" component={AssignMent_2}  />
            <Stack.Screen name="AssignMent_3" component={AssignMent_3}  />

            
        </Stack.Navigator>
    );

}

export default Index;