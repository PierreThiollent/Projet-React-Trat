import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../assets/Images/Home.png')} style={styles.container}>
                <View>
                    <Text style={styles.description}>
                        Trat est un quiz détiné à occuper votre temps libre dans les transports en commun avec des
                        questions variées.

                        En partenariat avec le réseau astuce il vous offrira la possibilité de remporter des réductions
                    </Text>
                </View>
                <View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>QUIZ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>PROFIL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>STATISTIQUES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Boutique</Text>
                        </TouchableOpacity>
                    </View>
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
    description: {
        color: 'white',
        alignItems:'center'
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        borderRadius: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: 251,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        marginBottom: 100,
    },
    buttonText: {
        color: 'white',
        fontSize: 17,

    }
});
