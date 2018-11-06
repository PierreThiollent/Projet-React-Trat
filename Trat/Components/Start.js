import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';

export default class Start extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../assets/Images/Start.png')} style={styles.container}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('LoginScreen')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Accès à l'application</Text>
                    </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    button: {
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: 282,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        marginBottom: 100,
    },
    buttonText: {
        color: 'white',
        fontSize: 22,

    }
});
