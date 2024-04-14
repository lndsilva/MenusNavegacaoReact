import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaA from "../views/TelaA";
import TelaB from "../views/TelaB";
import TelaC from "../views/TelaC";

import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator()

export default props => (    
    <Tab.Navigator screenOptions={({route})=>(
        {
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: 'blue',
            tabBarLabelStyle: { fontSize: 30},
            
        }
        
    )} initialRouteName="TelaA"

    
        
    >
        <Tab.Screen name="TelaA" component={TelaA}/>
        <Tab.Screen name="TelaB" component={TelaB}/>
        <Tab.Screen name="TelaC" component={TelaC}/>
    </Tab.Navigator>
        
)