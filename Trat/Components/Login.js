import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, View} from 'react-native';
import {Button, FormInput, FormLabel} from 'react-native-elements'


export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/Images/Login.png')} style={styles.backgroundImage}>
                    <View style={styles.inputContainer}>
                        <FormLabel>Identifiant :</FormLabel>
                        <FormInput
                            keyboardType='email-address'
                            returnKeyType='next'
                        />
                        <FormLabel>Mot de passe :</FormLabel>
                        <FormInput
                            secureTextEntry={true}
                            returnKeyType='next'
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
                        title='Connexion'
                        backgroundColor='green'
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
        borderColor: '#FFFFFF',
        borderWidth: 1,
    },
});
