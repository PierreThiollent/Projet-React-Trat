import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../assets/Images/Start.png')} style={styles.container}>

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
});
