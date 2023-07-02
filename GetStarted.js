import React from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image, TouchableOpacity, Button, Pressable } from 'react-native';

const images = [
    require('./images/Logo.png'),
    require('./images/Logo.png'),
    require('./images/Logo.png'),
]



function GetStarted() {
    const Pressable=()=>{
        console.warn("hello ji")
    }
    return (
        <View>
            <View style={{ backgroundColor: '' }}>
                <Image style={{ height: 250, width: 200, alignSelf: 'center' }} source={require('./images/Logo.png')} />
            </View>
            <View style={{ marginTop: 20 }}>
                <SliderBox images={images} sliderBoxHeight={300} dotColor="#eec06b" inactiveDotColor="black" autoplay={false} autoplayInterval={1000} circleLoop={true} />
            </View>
            <View>
                <Button onPress={()=>Pressable} title='GET STARTED' color='#eec06b' style={{ textAlign: "center", backgroundColor: "#eec06b", padding: 20, marginTop: 40, alignItems: "center", borderRadius: 80, width: 240, height: 70, justifyContent: 'center', alignItems: 'center', marginLeft: 60, fontSize: 20, color: "black", fontWeight: 600 }}>
                    {/* <View style={{}}>
                        <Text style={{ textAlign: "center", backgroundColor: "#eec06b", padding: 20, marginTop: 40, alignItems: "center", borderRadius: 80, width: 240, height: 70, justifyContent: 'center', alignItems: 'center', marginLeft: 60, fontSize: 20, color: "black", fontWeight: 600 }}>Get Started</Text>
                    </View> */}
                </Button>
            </View>
        </View>
    );
}
export default GetStarted;