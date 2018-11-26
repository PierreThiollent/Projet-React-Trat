import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as firebase from 'firebase';
import LottieView from 'lottie-react-native';

export var firebaseConfig = {
    apiKey: "AIzaSyDZABsfg5EI--eO4N2AogYOJMfrM7DMl0s",
    authDomain: "trat-46dbc.firebaseapp.com",
    databaseURL: "https://trat-46dbc.firebaseio.com",
    projectId: "trat-46dbc",
    storageBucket: "trat-46dbc.appspot.com",
    messagingSenderId: "529381865694"
};
firebase.initializeApp(firebaseConfig);


export default class Start extends React.Component {

    signInAnonymous = () => {
        firebase.auth().signInAnonymously().catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode === 'auth/operation-not-allowed') {
                alert('You must enable Anonymous auth in the Firebase Console.');
            }
            else {
                console.error(error);
            }
        })
    };

    componentDidMount() {
        this.animation.play();
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                this.props.navigation.navigate('HomeScreen');
            }
        })
    }

    render() {
        return (
            <ImageBackground source={require('../assets/Images/Start.png')} style={styles.container}>
                <View style={{width: 160 + "%", height: 400, flex: 2, justifyContent: 'center'}}>
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        autoPlay
                        autoSize={false}
                        loop={false}
                        source={require('../Animations/logo')}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('LoginScreen')
                        }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Accès Etudiant</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.signInAnonymous();
                        }}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Accès à l'application</Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 2,
        marginTop: 80
    },
    button: {
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: 282,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        marginTop: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center'
    }

});
