import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Account from '../Account';

const Stack = createStackNavigator()

export default function AccountsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name= "account"
                component={Account}
                options={{title:"Cuenta"}}
            />
        </Stack.Navigator>
    )
}
