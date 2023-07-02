import React, { useState, useEffect, useMemo } from "react";
import { View, Text, Image, StatusBar, Button, StyleSheet, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from "./GetStarted";
// import SignUp from "./LogIn";
import Wait from "./wait";
import LogIn from "./LogIn";
import { AuthContext } from "./components/context";
import MainScreen from "./MainScreen";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Splashscreen({ navigation }) {
    setTimeout(() => {
        navigation.replace('login')
    }, 2000)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
            <StatusBar barStyle='light-content' hidden={false} />
            <Image source={require('./images/splash.png')} />
        </View>
    );
}




const Stack = createNativeStackNavigator();
function App() {
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null);

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
    };

    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    }

    const [LoginState, dispatch] = React.useReducer(loginReducer, initialLoginState)

    const authContext = React.useMemo(() => ({
        signIn: async(userName, password) => {
            // setUserToken('prateek');
            // setIsLoading(false);
            let userToken;
            userToken = null;
            if (userName == '123456789' && password == 'pass') {
                try{
                    userToken = 'janus';
                    await AsyncStorage.setItem('userToken',userToken)
                }catch(e){
                    console.log(e)
                }
            }
            dispatch({ type: 'LOGIN', id: userName, token: userToken });
        },
        signOut: async() => {
            // setUserToken(null);
            // setIsLoading(false);
            try{
                userToken = 'janus';
                await AsyncStorage.removeItem('userToken');
            }catch(e){
                console.log(e)
            }
            dispatch({ type: 'LOGOUT' });
        },
        sign: () => {
            setUserToken('prateek');
            setIsLoading(false);
        },
    }), []);

    useEffect(() => {
        setTimeout(async() => {
            // setIsLoading(false)
            let userToken;
            userToken = null;
            try{
                userToken = await AsyncStorage.getItem('userToken',userToken)
            }catch(e){
                console.log(e)
            }
            dispatch({ type: 'REGISTER', token: userToken })
        }, 1000);
    }, []);

    if (LoginState.isLoading) {
        return (
            <Wait />
        )
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {
                    LoginState.userToken !== null ? (<Stack.Navigator>
                        {/* <Stack.Screen options={{ headerShown: false }} name="Home" component={Splashscreen} /> */}
                        {/* <Stack.Screen options={{ headerShown: false }} name="carosel" component={GetStarted} /> */}
                        {/* <Stack.Screen options={{ headerShown: false }} name="login" component={LogIn} /> */}
                        <Stack.Screen options={{ headerShown: false }} name="screen" component={MainScreen} />
                    </Stack.Navigator>) : <LogIn />
                }

            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default App;
