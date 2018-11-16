import React from 'react';
import {Image, ImageBackground, Text, TouchableOpacity, View, StyleSheet, Dimensions} from 'react-native';
import {connect} from "react-redux";

class SelectQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            type: "",
            time: 0
        })
    }
    _updateQuizLength5() {
                const action = {type: "UPD_LENGTH_5", value: 10};
                this.props.dispatch(action);
    }
    _updateQuizLength10() {
        const action = {type: "UPD_LENGTH_10", value: 20};
        this.props.dispatch(action);
    }
    _updateQuizLength15() {
        const action = {type: "UPD_LENGTH_15", value: 30};
        this.props.dispatch(action);
    }

    _updateQuizSimple() {
        const action = {type: "UPD_TYPE_SIMPLE", value: 'Simple'};
        this.props.dispatch(action);
    }

    _updateQuizPremium() {
        const action = {type: "UPD_TYPE_PREMIUM", value: 'Premium'};
        this.props.dispatch(action);
    }

    _updateQuizGeoloc() {
        const action = {type: "UPD_TYPE_GEOLOC", value: 'Geoloc'};
        this.props.dispatch(action);
    }

    _goToTheme = () => {
      if ( this.props.updateQuizType.quizType === "" || this.props.updateQuizLength.quizLength === 0) {
          alert("Veuillez séléctionner un type de quiz et une durée.");
      }
      else if  (this.props.updateQuizType.quizType === "Geoloc") {
          alert("Ce quiz n'est pas encore disponible.");
      }
      else {
          this.props.navigation.navigate("SelectTheme");
      }
    };


    render() {
        return (
            <ImageBackground source={require('../assets/Images/SelectQuiz.png')} style={styles.container}>
                <View
                    style={styles.burger}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer()}
                        title="Go back home"
                    >
                        <Image source={require('../assets/Images/DrawerIco.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.icon}>
                    <View style={styles.topa}>
                        <TouchableOpacity onPress={() => {
                            this._updateQuizPremium();
                            this.setState({
                            type: "premium"
                        });
                        }}>
                            <Image source={(this.state.type === "premium") ? require('../assets/Images/validP.png') : require('../assets/Images/Premium.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            Premium
                        </Text>
                    </View>
                    <View style={styles.topa}>
                        <TouchableOpacity onPress={() => {
                            this._updateQuizGeoloc();
                            this.setState({
                            type: "geoloc"
                        });
                        }}>
                            <Image source={(this.state.type === "geoloc") ? require('../assets/Images/validG.png') : require('../assets/Images/Geoloc.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            Géolocalisé
                        </Text>
                    </View>
                    <View style={styles.topa}>
                        <TouchableOpacity onPress={() => {
                            this._updateQuizSimple();
                            this.setState({
                            type: "simple"
                        });
                        }}>
                            <Image source={(this.state.type === "simple") ? require('../assets/Images/validS.png') : require('../assets/Images/Simple.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.txt}>
                            Simple
                        </Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => {
                        this._updateQuizLength5();
                        this.setState({
                            time: 5,
                        });
                    }}
                                      style={[styles.button, {backgroundColor: (this.state.time === 5) ? "#rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.3)"}]}>
                        <Text style={styles.buttonText}>5 minutes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this._updateQuizLength10();
                        this.setState({
                            time: 10,
                        });
                    }}
                                      style={[styles.button, {backgroundColor: (this.state.time === 10) ? "#rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.3)"}]}>
                        <Text style={styles.buttonText}>10 minutes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this._updateQuizLength15();
                        this.setState({
                            time: 15,
                        });
                    }}
                    style={[styles.button, {backgroundColor: (this.state.time === 15) ? "#rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.3)"}]}>
                        <Text style={styles.buttonText}>15 minutes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.go}>
                    <TouchableOpacity onPress={() => this._goToTheme()}>
                        <Image source={require('../assets/Images/Go.png')}/>
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
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 50,
        marginRight: 50,
        marginLeft: 50
    },
    topa: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txt: {
        color: '#fff',
        fontWeight: 'bold'
    },
    go: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50
    },
    burger: {
        position: 'absolute',
        top: '5%',
        right: '5%',
        zIndex: 10,
    },
    buttonContainer: {
        flex: 2,
        marginTop: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        borderRadius: 50,
        width: 251,
        height: 50,
        justifyContent: 'center',
        borderColor: '#FC6B32',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderWidth: 1,
        alignContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center'
    }
});

const mapStateToProps = (state) => {
    return state
};
export default connect(mapStateToProps)(SelectQuiz)