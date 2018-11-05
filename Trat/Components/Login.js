import React from 'react';
import {StyleSheet, View, ImageBackground, Dimensions, TouchableOpacity, TextInput} from 'react-native';


export default class Login extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../assets/Images/Login.png')} style={styles.container}>
                <View style={styles.inputContainer} >
                    <TextInput
                        style={styles.input}
                        placeholder='Identifiant :'
                        selectionColor={'white'}
                        placeholderTextColor={'white'}
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
                        placeholder='Code Premium :'
                        selectionColor={'white'}
                        placeholderTextColor={'white'}
                    />
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
        backgroundColor: 'black',
        width: 290,
        height: 42,
        alignItems: 'center',
        paddingLeft: 15,
        justifyContent: 'space-around',
        borderColor: '#FFFFFF',
        borderWidth: 1,
    },
});
