import React from 'react';
import {Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Stats extends React.Component {
    render() {
        return (
            <ImageBackground source={require('../assets/Images/Stats.png')} style={styles.container}>
                <View style={styles.burger}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer()}
                        title="Go back home"
                    >
                        <Image source={require('../assets/Images/DrawerIco.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.header}>
                    <Text style={styles.title}>STATISTIQUES</Text>

                </View>
                <View style={styles.userInfos}>
                    <Text style={styles.userTitle}>Martin HERICHE</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={[styles.statsText, {fontSize: 80}]}>30</Text>
                            <Text style={styles.statsText}>Heures passées dans les transports</Text>
                        </View>
                        <View>
                            <Text style={[styles.statsText, {fontSize: 80}]}>10</Text>
                            <Text style={styles.statsText}>euros économisées depuis l'obtention de TRAT</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View>
                            <Text style={[styles.statsText, {fontSize: 80}]}>10</Text>
                            <Text style={styles.statsText}>km parcourus avec le réseau astuce</Text>
                        </View>
                        <View>
                            <Text style={[styles.statsText, {fontSize: 80}]}>120</Text>
                            <Text style={styles.statsText}>Voyages réalisé depuis que vous utilisez TRAT</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.statsText, {fontSize: 80}]}>F2</Text>
                        <Text style={styles.statsText}>Ligne Favorite</Text>
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
    },
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100 + '%',
        height: 100,
        flexDirection: 'row',
        marginTop: 10
    },
    title: {
        marginLeft: 15,
        color: 'white',
        fontSize: 40
    },
    burger: {
        position: 'absolute',
        top: '5%',
        right: '5%',
        zIndex: 10,
    },
    userInfos: {
        width: 100 + '%',
    },
    userTitle: {
        marginLeft: 15,
        color: 'white',
        fontSize: 27
    },
    statsText: {
        color: 'white',
        textAlign: 'center'
    }

});