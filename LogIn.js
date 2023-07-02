import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AuthContext } from './components/context';

const LogIn = () => {
    // const [mobileNumber, setMobileNumber] = useState('');
    // const [password, setPassword] = useState('');

    const [data, SetData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const { signIn } = React.useContext(AuthContext);
    const textInputChange = (val) => {
        if (val.lenght !== 0) {
            SetData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            SetData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        SetData({
            ...data,
            password: val
        })
    }
    const updateSecureTextEntry=()=>{
        SetData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    const loginhandle = (username,password)=>{
        signIn(username,password)
    }

    return (
        <View style={styles.body}>
            <ScrollView>
                <View>
                    <View style={styles.image}>
                        <Image source={require("./images/Logo.png")} style={styles.imageSize} />
                    </View>

                    <View style={styles.LogInTitle}>
                        <Text style={styles.LogInText}>Login</Text>
                    </View>
                    {/* mobile no input */}
                    <TextInput
                        style={styles.MobileNoInput}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Mobile No."
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {/* password input */}
                    <TextInput
                        style={styles.PasswordInput}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Password"
                        onChangeText={(val) => handlePasswordChange(val)}
                        secureTextEntry
                    />

                    <TouchableOpacity onPress={() => {loginhandle(data.username,data.password)}}>
                        <View style={styles.signInbutton}>
                            <Text style={styles.signInText}>SIGN IN</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.ForgotPasswordText}>Forgot password?</Text>
                    </TouchableOpacity>

                    <View style={styles.line}></View>

                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={{ textAlign: "center", paddingTop: 6 }}>You are not a registered user Click </Text>
                        <TouchableOpacity>
                            <Text style={{ textAlign: "center", paddingTop: 6, textDecorationLine: 'underline', }}> here </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default LogIn;

const styles = StyleSheet.create({
    body: {
        // backgroundColor: "white",
    },
    image: {
        marginTop: 10,
        alignSelf: 'center'
    },
    imageSize: {
        width: 350,
        height: 350,
        resizeMode: "cover",

    },
    LogInTitle: {
        fontSize: 18,
        alignSelf: 'center'
    },
    LogInText: {
        fontSize: 23,
        marginTop: 10,
        marginBottom: 20,
        textAlign: "center",
        color: "black",

    },
    MobileNoInput: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontSize: 13,
        width: "80%",
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        alignSelf: 'center'
    },
    PasswordInput: {
        borderWidth: 1,
        color: "#7d7d7d",
        marginTop: 10,
        marginBottom: 5,
        lineHeight: 25,
        fontSize: 13,
        width: 200,
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#bc9954",
        borderWidth: 0,
        width: '80%',
        marginTop: 50,
        alignSelf: 'center'
    },
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

    line: {
        width: "80%",
        height: 1.5,
        backgroundColor: "#a4a4a4",
        alignSelf: 'center'
    },
    customerText: {
        fontSize: 14,
        margin: 0,
        marginBottom: 28,
        marginTop: 10,
        color: "#000",
        textAlign: "center",
    },
    ForgotPasswordText: {
        fontSize: 14,
        color: "#a4a4a4",
        marginBottom: 35,
        textAlign: "center",
        marginTop: 20,
    },
    ClickableText: {
        textDecorationLine: 'underline',
    }
});