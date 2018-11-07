import React from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View, StyleSheet, Dimensions} from 'react-native';

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
                    <View style={styles.topa}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("")
                        }}>
                            <Image source={require('../assets/Images/Premium.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            Premium
                        </Text>
                    </View>
                    <View style={styles.topa}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("")
                        }}>
                            <Image source={require('../assets/Images/Geoloc.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            Géolocalisé
                        </Text>
                    </View>
                    <View style={styles.topa}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("")
                        }}>
                            <Image source={require('../assets/Images/Simple.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            Simple
                        </Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>5 minutes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>10 minutes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>15 minutes</Text>
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
        flex: 1,
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
    buttonContainer: {
        flex: 2,
        marginTop: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        borderRadius: 50,
        width: 251,
        height: 50,
        justifyContent: 'center',
        borderColor: '#FC6B32',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth: 1,
        alignContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center'
    }
});
