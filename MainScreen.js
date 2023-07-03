import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {AuthContext} from './components/AuthContext';

const MainScreen = () => {
    const {logout} = React.useContext(AuthContext);
    return (
        <View>
            <TouchableOpacity onPress={() => { logout() }}>
                <View style={styles.signInbutton}>
                    <Text style={styles.signInText}>Logout</Text>
                </View>
            </TouchableOpacity>
            <Text>MainScreen</Text>
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    signInbutton: {
        backgroundColor: "#eec06b",
        padding: 15,
        marginTop: 60,
        alignItems: "center",
        borderRadius: 80,
        width: 240,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    signInText: {
        fontSize: 20,
        color: "black",
    },
})