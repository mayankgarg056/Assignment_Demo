
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput } from "react-native";

// component declare
import  {CustomSpinner} from './HOC_Assignment_3';

// constant declare
const window = Dimensions.get("screen");

class AssignMent_3 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            progressCount: 0,
            isVisibleProgressBar:false
        }

    }

    render() {
        return (
            <View style={Styles.container}>
                <CustomSpinner backgroundColor={'red'} progressCount={this.state.progressCount} visible={this.state.isVisibleProgressBar} />
                <TouchableOpacity style={[Styles.button,]} onPress={this.onPressNextAssignMent3}>
                    <Text style={[Styles.seprator, { color: 'white' }]}>Start Progress</Text>
                </TouchableOpacity>
            </View>
        )
    }
    // on press next assignment
    onPressNextAssignMent3=()=>{
       this.setState({isVisibleProgressBar:!this.state.isVisibleProgressBar},()=>{
           setInterval(() => {
               this.setState({progressCount:this.state.progressCount+10})
           }, 1000);
           if(this.state.isVisibleProgressBar){
               this.setState({progressCount:0})
           }
       })
    }


}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    seprator: {
        color: 'black',
        fontSize: 16,
        fontWeight: '300',
        alignSelf: 'center',
        marginLeft: 10
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

export default AssignMent_3;

