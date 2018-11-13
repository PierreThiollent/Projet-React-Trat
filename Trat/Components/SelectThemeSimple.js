import React from 'react'
import {Image, ImageBackground, StyleSheet, TouchableOpacity, View, ScrollView, Text} from 'react-native'

export default class SelectThemeSimple extends React.Component {
    render() {
        return (
            <ImageBackground style={styles.main_container}>
                <View style={styles.head_container}>
                    <Image source={require('../assets/Images/QTS.png')}/>
                    <TouchableOpacity
                        style={styles.burger}
                        onPress={() => this.props.navigation.openDrawer()}
                        title="Go back home"
                    >
                        <Image source={require('../assets/Images/DrawerIco.png')}/>
                    </TouchableOpacity>
                </View>
                <ScrollView >
                    <View style={styles.icon}>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("CulturegPremiumQuiz")
                            }}>
                                <Image source={require('../assets/Images/Theme/Simple/CultureG.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Culture générale
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={require('../assets/Images/Theme/Simple/Histoire.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Histoire
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={require('../assets/Images/Theme/Simple/Langues.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Langues
                            </Text>
                        </View>
                    </View>
                    <View style={styles.icon}>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={require('../assets/Images/Theme/Simple/Sport.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Sport
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("SciencesPremiumQuiz")
                            }}>
                                <Image source={require('../assets/Images/Theme/Simple/Science.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Sciences
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={require('../assets/Images/Theme/Simple/Arts.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Arts
                            </Text>
                        </View>
                    </View>
                    <View style={styles.icon}>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={require('../assets/Images/Theme/Simple/Numerique.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Numérique
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={require('../assets/Images/Theme/Simple/TV.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Tv
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={require('../assets/Images/Theme/Simple/Musique.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Musique
                            </Text>
                        </View>
                    </View>
                    <View style={styles.icon}>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={require('../assets/Images/Theme/Simple/Animaux.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Annimaux
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={require('../assets/Images/Theme/Simple/JeuxVideo.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Jeux
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={require('../assets/Images/Theme/Simple/Nourriture.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Nourriture
                            </Text>
                        </View>
                    </View>
                    <View style={styles.icon}>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={require('../assets/Images/Theme/Simple/Sante.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Santé
                            </Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>5 minutes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>10 minutes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>15 minutes</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>


            </ImageBackground>
        )
    }
};

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    head_container: {
        marginTop: 25,
        flexDirection: 'row',
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginRight: 30,
        marginLeft: 30
    },
    burger: {
        position: 'absolute',
        top: '5%',
        right: '5%',
        zIndex: 10,
    },
    topa: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txt: {
        color: '#fff',
        fontWeight: 'bold'
    },
});