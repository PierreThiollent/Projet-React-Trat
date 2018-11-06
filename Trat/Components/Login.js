import React from 'react';
import {StyleSheet, View, ImageBackground, Dimensions, TouchableOpacity, TextInput, Text} from 'react-native';
import { Button } from 'native-base';


export default class Login extends React.Component {
    render() {
        return (
                <ImageBackground source={require('../assets/Images/Login.png')} style={styles.container}>
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
                        style= {{ marginTop: 20 }}
                        full
                        rounded
                        success
                        onPress= {() => this.props.navigation.navigate('HomeScreen')}
                    >
                        <Text>Connexion</Text>
                    </Button>
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
    inputContainer: {
        height: 160,
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
