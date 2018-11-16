import React from 'react'
import {Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default class DrawerMenu extends React.Component {


    render() {
        return (
            <ImageBackground source={require('../assets/Images/menu_burger.png')} style={{
                flex: 1,
                position: 'absolute',
                top: 0,
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
                zIndex: -10
            }}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')}
                                      style={styles.uglyDrawerItem}>
                        <Image source={require('../assets/Images/TratIco.png')}/>
                    </TouchableOpacity>
                    <Text
                        onPress={() => this.props.navigation.navigate('SelectQuiz')}
                        style={styles.uglyDrawerItem}>
                        QUIZ
                    </Text>
                    <Text
                        onPress={() => this.props.navigation.navigate('ProfileScreen')}
                        style={styles.uglyDrawerItem}>
                        PROFIL
                    </Text>
                    <Text
                        onPress={() => this.props.navigation.navigate('StatsScreen')}
                        style={styles.uglyDrawerItem}>
                        STATISITIQUES
                    </Text>
                    <Text
                        onPress={() => this.props.navigation.navigate('BoutiqueScreen')}
                        style={styles.uglyDrawerItem}>
                        BOUTIQUE
                    </Text>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    uglyDrawerItem: {
        marginRight: 60,
        fontSize: 35,
        color: '#fff',
        padding: 10,
        alignItems: 'center',
        textAlign: 'center'
    }
});