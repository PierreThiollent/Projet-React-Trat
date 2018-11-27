import React from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import connect from "react-redux/es/connect/connect";

class Avantages extends React.Component {

    render() {
        return (
            <ImageBackground source={require('../assets/Images/Avantages.png')} style={styles.main_container}>
                <View style={styles.burger}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer()}
                        title="Go back home"
                    >
                        <Image source={require('../assets/Images/DrawerIcoBlack.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.header}>
                    <Text style={styles.title}>Avantages</Text>
                    <View style={styles.userInfos}>
                        <Text style={styles.title}>Martin Hériché</Text>
                    </View>
                    <ScrollView style={{marginTop: 20,}}>
                        <View style={styles.codeBarre}>
                            <View>
                                <TouchableOpacity>
                                    <Image source={require('../assets/Images/reduction1.png')}/>
                                </TouchableOpacity>
                                <Text style={styles.statsText}>1 voyage non utilisé</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Image source={require('../assets/Images/reduction2.png')}/>
                                </TouchableOpacity>
                                <Text style={styles.statsText}>10€ Intermarché</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    burger: {
        position: 'absolute',
        top: '5%',
        right: '5%',
        zIndex: 10,
    },

    header: {
        marginTop: 25,
        width: 100 + '%',
        justifyContent: "space-between",
    },
    title: {
        marginLeft: 15,
        color: 'white',
        fontSize: 25
    },

    userInfos: {
        marginTop: 20,
        width: 250,
    },
    codeBarre: {
        alignItems: 'center'
    },
    statsText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
});
const mapStateToProps = (state) => {
    return state
};
export default connect(mapStateToProps)(Avantages)