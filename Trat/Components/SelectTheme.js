import React from 'react'
import {Image, ImageBackground, StyleSheet, TouchableOpacity, View, ScrollView, Text} from 'react-native'
import {connect} from 'react-redux';
import {jsonCGData} from "../Data/CGQuizDataFacile";
import {jsonScienceData} from "../Data/ScienceQuizDataFacile";


class SelectTheme extends React.Component {

    render() {
        return (
            <ImageBackground style={styles.main_container}>
                <View style={styles.head_container}>
                    <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/Logo.png') : null}/>
                    <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/Logo.png') : null}/>
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
                                this.props.navigation.navigate("QuizVue");
                                const action = {type: "SELECT_THEME_CG", value: jsonCGData};
                                this.props.dispatch(action);
                            }}>
                                <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/CultureG.png') : null}/>
                                <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/CultureG.png') : null}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Culture générale
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/Histoire.png') : null}/>
                                <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/Histoire.png') : null}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Histoire
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/Langues.png') : null}/>
                                <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/Langues.png') : null}/>
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
                                <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/Sport.png') : null}/>
                                <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/Sport.png') : null}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Sport
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("QuizVue");
                                const action = {type: "SELECT_THEME_SCIENCE", value: jsonScienceData};
                                this.props.dispatch(action);
                            }}>
                                <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/Science.png') : null}/>
                                <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/Science.png') : null}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Sciences
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/Arts.png') : null}/>
                                <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/Arts.png') : null}/>
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
                                <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/Numerique.png') : null}/>
                                <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/Numerique.png') : null}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Numérique
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/TV.png') : null}/>
                                <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/TV.png') : null}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Tv
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/Musique.png') : null}/>
                                <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/Musique.png') : null}/>
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
                                <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/Animaux.png') : null}/>
                                <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/Animaux.png') : null}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Animaux
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/JeuxVideo.png') : null}/>
                                <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/JeuxVideo.png') : null}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Jeux
                            </Text>
                        </View>
                        <View style={styles.topa}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate("")
                            }}>
                                <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/Nourriture.png') : null}/>
                                <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/Nourriture.png') : null}/>
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
                                <Image source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/Sante.png') : null}/>
                                <Image source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/Sante.png') : null}/>
                            </TouchableOpacity>
                            <Text style={styles.txt}>
                                Santé
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        )
    }
}

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

const mapStateToProps = (state) => {
    return state
};
export default connect(mapStateToProps)(SelectTheme)