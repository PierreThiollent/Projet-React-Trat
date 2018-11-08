import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../assets/Images/Home.png')} style={styles.container}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 90 + '%'}}>
                    <Text style={styles.description}>
                        Trat est un quiz détiné à occuper votre temps libre dans les transports en commun avec des
                        questions variées.
                    </Text>
                    <Text style={styles.description}>
                        En partenariat avec le réseau astuce il vous offrira la possibilité de
                        remporter
                        des réductions
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SelectQuiz')}
                                      style={[styles.button, {alignItems: 'flex-end', marginRight: 35}]}>
                        <Text style={[styles.buttonText, {marginRight: 15}]}>QUIZ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {alignItems: 'flex-start'}]}>
                        <Text style={[styles.buttonText, {marginLeft: 15}]}>PROFIL</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.buttonContainer, {marginBottom: 120}]}>
                    <TouchableOpacity style={[styles.button, {alignItems: 'flex-end', marginRight: 35}]}>
                        <Text style={[styles.buttonText, {marginRight: 15}]}>STATISTIQUES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {alignItems: 'flex-start'}]}>
                        <Text style={[styles.buttonText, {marginLeft: 15}]}>BOUTIQUE</Text>
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
        alignItems: 'center',

    },
    description: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 80,
        fontSize: 17
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 50
    },
    button: {
        borderRadius: 50,
        width: 251,
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderColor: '#FC6B32',
        borderWidth: 1,
    },
    buttonText: {
        color: 'white',
        fontSize: 17,


    }
});
