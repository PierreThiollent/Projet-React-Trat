import React from 'react';
import {Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from "react-native-elements";

export default class Profile extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../assets/Images/Profile.png')} style={styles.container}>
                <View style={styles.burger}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer()}
                        title="Go back home"
                    >
                        <Image source={require('../assets/Images/DrawerIco.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.header}>
                        <Text style={styles.title}>PROFIL</Text>

                </View>
                <View style={styles.userInfos}>
                    <Text style={styles.title}>Martin HERICHE</Text>
                    <Text style={{fontSize:17, color:'white', marginLeft: 15}}>Etudiant en Web Design</Text>
                </View>
                <View style={styles.avatar}>
                    <Avatar
                        width={200}
                        height={200}
                        rounded
                        source={require('../assets/Images/profileImage.jpg')}
                    />
                    <Text style={styles.avatarText}>Niveau 12</Text>
                    <Text style={{ color:'white'}}>800 / 1200xp</Text>
                </View>
                <View style={styles.gamesContainer}>
                    <TouchableOpacity>
                        <Image source={require('../assets/Images/GameSport.png')}/>
                        <Text style={[styles.gamesText, {marginTop: 10}]}>Sports</Text>
                        <Text style={styles.gamesText}>Niveau 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/Images/GameMusic.png')}/>
                        <Text style={[styles.gamesText, {marginTop: 10}]}>Musique</Text>
                        <Text style={styles.gamesText}>Niveau 5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/Images/GameFood.png')}/>
                        <Text style={[styles.gamesText, {marginTop: 10}]}>Nourriture</Text>
                        <Text style={styles.gamesText}>Niveau 5</Text>
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
    },
    header: {
        alignItems:'center',
        justifyContent:'space-between',
        width:100+'%',
        height:100,
        flexDirection: 'row',
        marginTop: 10
    },
    title: {
        marginLeft: 15,
        color: 'white',
        fontSize: 30
    },
    burger: {
        position: 'absolute',
        top: '5%',
        right: '5%',
        zIndex: 10,
    },
    userInfos: {
        width:100+'%',
    },
    avatar:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    avatarText: {
        color:'white',
        fontSize: 24
    },
    gamesContainer:{
        width:60+'%',
        flexDirection: 'row',
        marginLeft: 25,
        justifyContent:'space-between',
        marginTop: 120
    },
    gamesText: {
        color:'#9F9F9F',
        textAlign: 'center'
    }
});