
import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator,Dimensions } from "react-native";
import * as Progress from 'react-native-progress';

// constant declare
const window = Dimensions.get("screen");


// custom spinner view HOC
export const CustomSpinner = props => {
    const { visible, backgroundColor,progressCount } = props;
    return (
        <View style={{  }}>
            {
                (visible) ?
                    <View style={{  justifyContent: "center", height: 150, width:200, backgroundColor:'yellow' }}>
                        {/* <ActivityIndicator size="large" color={'white'} /> */}
                        <Progress.Bar progress={progressCount/100} width={200} color={backgroundColor}/>

                    </View> : null
            }
        </View>

    );
}

