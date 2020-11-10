
import React, { Component } from 'react';
import { View, Keyboard, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, TextInput, Image } from "react-native";
import { connect } from 'react-redux';
import Checkbox from 'react-native-checkbox';
// action define 
import { GetAllMusicData, RemoveAllMusicData } from "../Application/Redux/Assignment.action";

// constant declare
const window = Dimensions.get("screen");

class AssignMent_2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            serachValue: "",
            isListViewShown: true,
        }

    }

    componentWillUnmount() {
        this.props.dispatch(RemoveAllMusicData([]))
    }

    render() {
        return (
            <View style={Styles.container}>

                {
                    (this.props.getAllMusicResponse.length > 0) ?
                        <FlatList
                            data={this.props.getAllMusicResponse}
                            renderItem={(this.state.isListViewShown) ? this.renderItemListView : this.renderItemCollectionViewRow}
                            ListHeaderComponent={this.renderListHeader}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            key={(this.state.isListViewShown) ? 1 : 0}
                            numColumns={this.state.isListViewShown ? 1 : 3}
                        />
                        :
                        <View style={{flex:1}}>
                            {this.renderListHeader()}
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold' }}>No Record Found</Text>
                            </View>
                        </View>

                }

            </View>
        )
    }

    // render item list view row
    renderItemListView = ({ item, index }) => {
        return (
            <View style={{ height: 100, width: window.width - 50, borderRadius: 5, borderWidth: 1, borderColor: 'black', margin: 3, marginLeft: 10, flexDirection: 'row', padding: 5 }}>
                <Image style={{ height: 90, width: 110, resizeMode: 'cover', }} source={{ uri: item.artworkUrl100 }} />
                <View style={{ marginLeft: 10, marginRight:10}}>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', paddingTop: 5,paddingRight:10 }} numberOfLines={1}>{item.collectionName}</Text>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', paddingTop: 5, paddingRight:10}} numberOfLines={1}>{item.trackName}</Text>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold', paddingTop: 5, paddingRight:10}} numberOfLines={1}>{item.trackPrice}</Text>
                </View>
            </View>
        );
    }

    // render item row
    renderItemCollectionViewRow = ({ item, index }) => {
        return (
            <View style={{ height: window.width / 3 - 20, width: window.width / 3 - 20, borderRadius: 5, borderWidth: 1, borderColor: 'black', margin: 3, marginLeft: 10, padding: 5 }}>
                <Image style={{ height: 90, width: 110, resizeMode: 'cover', }} source={{ uri: item.artworkUrl100 }} />
                <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold', textAlign: 'center', paddingTop: 5, paddingLeft: 5, paddingRight: 5 }} numberOfLines={1}>{item.collectionName}</Text>
            </View>
        );
    }

    // render list row
    renderListHeader = () => {
        return (
            <View>
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <View style={{ padding: 10, width: window.width - 150, borderRadius: 2, borderWidth: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <TextInput
                            onChangeText={this.onChangeText}
                            placeholder={"Search"}
                            keyboardType={"default"}
                            maxLength={20}
                            placeholderTextColor={"black"}
                        />
                    </View>

                    <TouchableOpacity hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }} style={Styles.button} onPress={this.getAllMusicData}>
                        <Text style={[Styles.seprator, { color: 'white' }]}>Search</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'flex-end', marginTop: 5 }}>
                    <Checkbox
                        value={this.state.isListViewShown}
                        onChange={() => { this.setState({ isListViewShown: !this.state.isListViewShown }) }}
                        label={"ListView"}
                    />
                </View>
            </View>

        );
    }



    // on change text
    onChangeText = (value) => {
        this.setState({ serachValue: value })
    }

    // get all music data
    getAllMusicData = () => {
        var data = {
            "search": this.state.serachValue.trim()
        }
        Keyboard.dismiss()
        this.props.dispatch(RemoveAllMusicData([]))
        this.props.dispatch(GetAllMusicData(data))
    }
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    seprator: {
        color: 'black',
        fontSize: 16,
        fontWeight: '300',
        alignSelf: 'center',
        marginLeft: 10
    },
    button: {
        marginLeft: 10,
        backgroundColor: 'green',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        borderWidth: 1
    }

})

function mapStateToProps(state) {
    return {
        getAllMusicResponse: (state.AssignMentReducer.getAllMusicResponse) ? state.AssignMentReducer.getAllMusicResponse : []
    }
}
export default connect(mapStateToProps)(AssignMent_2)


