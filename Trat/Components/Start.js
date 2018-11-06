import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
export var config = {
    apiKey: "AIzaSyDZABsfg5EI--eO4N2AogYOJMfrM7DMl0s",
    authDomain: "trat-46dbc.firebaseapp.com",
    databaseURL: "https://trat-46dbc.firebaseio.com",
    projectId: "trat-46dbc",
    storageBucket: "trat-46dbc.appspot.com",
    messagingSenderId: "529381865694"
};
firebase.initializeApp(config);

firebase.auth().signInAnonymously().catch(function (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
});

export default class Start extends React.Component {

    signInAnonymous = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                const isAnonymous = user.isAnonymous;
                const uid = user.uid;
                console.log("L'UID est : " + uid);
                console.log(user);
                this.props.navigation.navigate('HomeScreen')
            }
            else {
                console.log(errorMessage);
            }
        });
    };

    render() {
        return (
            <ImageBackground source={require('../assets/Images/Start.png')} style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('HomeScreen')
                    }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Accès Etudiant</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.signInAnonymous()}
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
