import React from 'react';
import {Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import {connect} from 'react-redux'

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            score: 0,
            level: 0,
        })
    }


    render() {
        console.log(this.props);
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

                    <View style={styles.userInfos}>
                        <Text style={styles.title}>BEBER Benben</Text>
                        <Text style={{fontSize: 17, color: 'white', marginLeft: 15}}>Etudiant en Web Design</Text>
                    </View>
                </View>
                <View style={styles.avatar}>
                    <ProgressCircle
                        percent={(this.props.updateExp.exp * 100) / this.props.updateExpMax.expMax}
                        radius={90}
                        borderWidth={8}
                        color="#000"
                        shadowColor="#FFF"
                        bgColor="rgba(0, 0, 0, 0.3)"
                    >
                        <Image source={require('../assets/Images/profileImage.jpg')}/>
                    </ProgressCircle>
                    <Text style={styles.avatarText}>Niveau {this.props.levelUp.lvl}</Text>
                    <Text style={styles.avatarText}>{this.props.updateExp.exp} / {this.props.updateExpMax.expMax}</Text>
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
        backgroundColor: 'black'
    },
    header: {
        marginTop: 25,
        justifyContent: 'flex-start',
        width: 100 + '%',
        height: 50 + "%",
    },
    title: {
        marginLeft: 15,
        color: 'white',
        fontSize: 25
    },
    burger: {
        position: 'absolute',
        top: '5%',
        right: '5%',
        zIndex: 10,
    },
    userInfos: {
        marginTop: 20,
        width: 250,
    },
    avatar: {
        alignItems: 'center',
        position: 'absolute',
        bottom: '30%',
        right: '25%'

    },
    avatarText: {
        color: 'white',
        fontSize: 24
    },
    gamesContainer: {
        width: 60 + '%',
        flexDirection: 'row',
        marginLeft: 25,
        justifyContent: 'space-between',
        marginTop: 120
    },
    gamesText: {
        color: '#9F9F9F',
        textAlign: 'center'
    }
});

const mapStateToProps = (state) => {
    return state
};
export default connect(mapStateToProps)(Profile)