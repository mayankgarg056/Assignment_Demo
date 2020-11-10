
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput } from "react-native";

// constant declare
const window = Dimensions.get("screen");

class AssignMent_1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hoursValue: "",
            minutesValue: "",
        }

    }

    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.title}>Please enter time for angle</Text>
                <View style={{ marginTop: 10, flexDirection: 'row' }}>
                    <View style={Styles.hoursContainer}>
                        <TextInput
                            value={this.state.hoursValue}
                            onChangeText={(hoursValue) => { this.setState({ hoursValue }) }}
                            placeholder={"Hours"}
                            maxLength={2}
                            keyboardType={"number-pad"}
                            placeholderTextColor={"black"}
                        />
                    </View>
                    <Text style={Styles.seprator}>:</Text>
                    <View style={Styles.hoursContainer}>
                        <TextInput
                            value={this.state.minutesValue}
                            onChangeText={(minutesValue) => { this.setState({ minutesValue }) }}
                            placeholder={"Minute"}
                            keyboardType={"number-pad"}
                            maxLength={2}
                            placeholderTextColor={"black"}
                        />
                    </View>
                </View>
                <TouchableOpacity style={Styles.button} onPress={this.onPressFindAngle}>
                    <Text style={[Styles.seprator, { color: 'white' }]}>Find Angel</Text>
                </TouchableOpacity>


                <TouchableOpacity style={[Styles.button,{marginTop:20}]} onPress={this.onPressNextAssignMent2}>
                    <Text style={[Styles.seprator, { color: 'white' }]}>Next Assignment2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.button,{marginTop:20}]} onPress={this.onPressNextAssignMent3}>
                    <Text style={[Styles.seprator, { color: 'white' }]}>Next Assignment3</Text>
                </TouchableOpacity>
            </View>
        )
    }

    // on press find angle
    onPressFindAngle = () => {
        const { hoursValue, minutesValue } = this.state;
        if (hoursValue.trim() != "" && hoursValue.trim() != 0 && minutesValue.trim() != "") {
            alert(this.findAnglesBetweenHoursAndMinutes(hoursValue, minutesValue))
        } else {
            alert("Please enter values")
        }
    }

    // find angles
    findAnglesBetweenHoursAndMinutes = (hour, minute) => {
        let angles = (hour * 30 + minute * 0.5) - (minute * 6)
        return angles
    }

    // on press next assignment
    onPressNextAssignMent2=()=>{
        this.props.navigation.navigate("AssignMent_2")
    }

    // on press next assignment
    onPressNextAssignMent3=()=>{
        this.props.navigation.navigate("AssignMent_3")
    }


}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: '400'
    },
    seprator: {
        color: 'black',
        fontSize: 16,
        fontWeight: '300',
        alignSelf: 'center',
        marginLeft: 10
    },
    hoursContainer: {
        marginLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        width: 90
    },
    button: {
        marginTop: 10,
        backgroundColor: 'green',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1
    }


})

export default AssignMent_1;

