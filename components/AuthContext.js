import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

import AsyncStorage from '@react-native-async-storage/async-storage'

import axios from 'axios'
import { BASE_URL } from "../config";

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const login = (username, password) => {
        setIsLoading(true);
        axios.post(`${BASE_URL}api/auth/login`, {
            "mobile": username,
            "password": password,
        }).then(res => {
            // console.log(res.data);
            let userInfo = res.data;
            console.log(userInfo.token);
            setUserInfo(userInfo);
            setUserToken(userInfo.token);
            AsyncStorage.setItem('userinfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', userInfo.token);
            console.log('userToken' + userInfo.token);
        })
            .catch(e => {
                console.log(`Login error hello ${e}`);
                setIsLoading(false);
            })
    }
    const logout = () => {
        setIsLoading(true)
        setUserToken(null)
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userinfo');
        setIsLoading(false);
    }

    const isLogedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            let userInfo = await AsyncStorage.getItem('userinfo');
            userInfo = JSON.parse(userInfo);

            if (userInfo) {
                setUserToken(userToken);
                setUserInfo(userInfo);
            }
            setIsLoading(false);
        } catch (e) {
            console.log(`is logged in error ${e}`);
        }
    }
    useEffect(() => {
        isLogedIn();
    }, [])
    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken, userInfo }}>
            {children}
        </AuthContext.Provider>
    )
}