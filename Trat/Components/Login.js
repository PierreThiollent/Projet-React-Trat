import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import {Button, FormInput, FormLabel} from 'react-native-elements'
import * as firebase from 'firebase';

export default class Login extends React.Component {

    signUpUser = (email, password) => {

        try {
            if (this.state.password.length < 6) {
                alert('Veuillez entrez un mot de passe de minimum 6 caractères.');
                return;
            }
            firebase.auth().createUserWithEmailAndPassword(email, password).then(firebase.auth().onAuthStateChanged((user) => {
                if (user != null) {
                    this.props.navigation.navigate("HomeScreen");
                }
            }))

        }

        catch (error) {
            console.log(error.toString());
        }

    };
    signInUser = (email, password) => {
        try {

            firebase.auth().signInWithEmailAndPassword(email, password).then(firebase.auth().onAuthStateChanged((user) => {
                if (user != null) {
                    const email = user.email;
                    const uid = user.uid;
                    const providerData = user.providerData;
                    this.props.navigation.navigate("HomeScreen");
                }
            }))
        }
        catch (error) {
            console.log(error.toString());
        }

    };

    constructor(props) {
        super(props);
        this.state = ({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/Images/Login.png')} style={styles.backgroundImage}>
                    <View style={styles.inputContainer}>
                        <FormLabel>Identifiant :</FormLabel>
                        <FormInput
                            keyboardType='email-address'
                            returnKeyType='next'
                            onChangeText={(email) => this.setState({email})}
                        />
                        <FormLabel>Mot de passe :</FormLabel>
                        <FormInput
                            secureTextEntry={true}
                            returnKeyType='next'
                            onChangeText={(password) => this.setState({password})}
                        />
                        <FormLabel>Code Premium : </FormLabel>
                        <FormInput
                            returnKeyType='next'
                        />

                    </View>
                    <Button
                        raised
                        rounded
                        rightIcon={{name: 'input'}}
                        title='Inscription'
                        backgroundColor='green'
                        onPress={() => this.signUpUser(this.state.email, this.state.password)}
                    />
                    <Button
                        raised
                        rounded
                        rightIcon={{name: 'input'}}
                        title='Connexion'
                        backgroundColor='green'
                        onPress={() => this.signInUser(this.state.email, this.state.password)}
                    />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: 90 + '%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    inputContainer: {
        width: 90 + "%",
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    input: {
        borderRadius: 50,
        width: 290,
        height: 42,
        alignItems: 'center',
        paddingLeft: 15,
        justifyContent: 'space-around',
        borderWidth: 1,
    },
});
