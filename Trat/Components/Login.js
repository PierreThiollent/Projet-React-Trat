import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'native-base';


export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/Images/Login.png')} style={styles.backgroundImage}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            keyboardType='email-address'
                            disableFullscreenUI={false}
                            style={styles.input}
                            placeholder='Identifiant :'
                            selectionColor='white'
                            placeholderTextColor='white'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Mot de passe :'
                            secureTextEntry={true}
                            selectionColor={'white'}
                            placeholderTextColor={'white'}
                        />
                        <TextInput
                            style={styles.input}
                            clearTextOnFocus={true}
                            placeholder='Code Premium :'
                            selectionColor='white'
                            placeholderTextColor='white'
                        />
                    </View>
                    <Button
                        style={{marginTop: 20}}
                        full
                        rounded
                        success
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
                    >
                        <Text>Connexion</Text>
                    </Button>
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
        zIndex: 100,
        position: 'absolute'
    },
    inputContainer: {
        height: 160,
        justifyContent: 'space-between',
        marginBottom: 40,
        zIndex: -1
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
