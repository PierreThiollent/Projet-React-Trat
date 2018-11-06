import React from 'react';
import {StyleSheet, ImageBackground, Dimensions, Image, TouchableOpacity, View, Text} from 'react-native';

export default class SelectQuiz extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../assets/Images/SelecQuiz.png')} style={styles.container}>
                <View
                    style={styles.burger}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer()}
                        title="Go back home"
                    >
                        <Image source={require('../assets/Images/DrawerIco.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.icon}>
                    <View  style={styles.topa}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate("")}}>
                        <Image source={require('../assets/Images/Prénium.png')}/>
                    </TouchableOpacity>
                        <Text style={styles.txt}>
                            Prenium
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.topa} onPress={() => {this.props.navigation.navigate("")}}>
                        <Image source={require('../assets/Images/Géolocalisé.png')}/>
                        <Text style={styles.txt}>
                            Géolocalisé
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.topa} onPress={() => {this.props.navigation.navigate("")}}>
                        <Image source={require('../assets/Images/Simple.png')}/>
                        <Text style={styles.txt}>
                            Simple
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.go}>
                    <TouchableOpacity>
                        <Image source={require('../assets/Images/Go.png')}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
        marginRight: 50,
        marginLeft: 50
    },
    topa: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txt: {
        color: '#fff',
        fontWeight: 'bold'
    },
    go: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50
    },
    burger: {
        position: 'absolute',
        top: '5%',
        right: '5%',
        zIndex: 10,
    },
});
