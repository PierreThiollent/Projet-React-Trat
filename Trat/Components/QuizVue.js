import React from 'react'
import {Dimensions, Image, ImageBackground, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native'
import CountdownCircle from 'react-native-countdown-circle';
import {connect} from 'react-redux'
import shuffle from 'shuffle-array'


class QuizVue extends React.Component {

    constructor(props) {
        super(props);
        this.jsonData = shuffle.pick(this.props.selectTheme.theme, {'picks': this.props.updateQuizLength.quizLength});
        this.state = ({
            count: 0,
            score: 0,
            qn: false,
            disable: false,
            enable: false,
            visible: false,
            response: false,
            timer: 30,
        })
    }

    _Next = () => {
        this._scoring();
        if (this.state.count === this.jsonData.length - 1) {
            this.setState({
                enable: true
            })
        }
        else {
            this.setState({
                    count: this.state.count + 1,
                    response: false,
                    disable: false,
                    enable: false,
                    qn: false,
                }
            )
        }
    };
    _scoring = () => {
        if (this.state.qn === true) {
            this.updateExp();
            this.setState({
                    score: this.state.score + 1,

                }
            );
            console.log("Score : " + this.state.score);
        }

        else {
            return (null);
        }
    };

    updateExp() {
        const action = {type: "UPD_EXP", value: +10};
        this.props.dispatch(action)
    }

    render() {
        console.log(this.props.updateQuizLength.quizLength);
        return (
            <ImageBackground style={styles.main_container}>
                <View style={styles.timer}>
                    <CountdownCircle
                        seconds={this.state.timer}
                        radius={30}
                        borderWidth={4}
                        color='#FC6B32'
                        bgColor="#fff"
                        textStyle={{fontSize: 20}}
                        onTimeElapsed={() => this.setState({
                            visible: true,
                            response: true,
                        })}
                    />
                </View>
                <View style={styles.head_container}>
                    <Image
                        source={(this.props.updateQuizType.quizType === "Premium") ? require('../assets/Images/Theme/Premium/LogoQuiz.png') : null}/>
                    <Image
                        source={(this.props.updateQuizType.quizType === "Simple") ? require('../assets/Images/Theme/Simple/LogoQuiz.png') : null}/>
                </View>
                <View style={styles.pic}>{this.jsonData[this.state.count].images}</View>
                <View style={styles.quiz}>
                    <Text style={styles.questions}>{this.jsonData[this.state.count].title}</Text>
                    <View style={styles.q_container}>
                        {
                            this.jsonData[this.state.count].answer.map((el) => {
                                return (<TouchableHighlight disabled={this.state.disable}
                                                            style={[styles.answerButton, {backgroundColor: (el.res === true && this.state.response === true) ? "#006400" : "white"},
                                                                {borderColor: (this.props.updateQuizType.quizType === "Premium") ? "#FCB045" : "#9E005D"},
                                                                {borderColor: (this.props.updateQuizType.quizType === "Simple") ? "#9E005D" : "#FCB045"}]}
                                                            onPress={() => {
                                                                this.setState({
                                                                    qn: el.res,
                                                                    response: true,
                                                                    disable: true,
                                                                    visible: true,
                                                                    timer: 1,
                                                                });
                                                            }}
                                                            underlayColor={"white"}>
                                    <Text>{el.nom}</Text>

                                </TouchableHighlight>)
                            })
                        }
                    </View>
                </View>
                <Modal style={styles.modal}
                       animationType="slide"
                       transparent={true}
                       visible={this.state.visible}
                >
                    <TouchableOpacity style={styles.modal}
                                      onPress={() => {
                                          this._Next();
                                          this.setState({
                                              visible: false,
                                              timer: 30
                                          })
                                      }}>
                    </TouchableOpacity>
                </Modal>
                <Modal animationType="slide"
                       visible={this.state.enable}
                       onRequestClose={() => {
                           const action = {type: "SELECT_THEME_END", value: []};
                           this.props.dispatch(action);
                       }}
                       onPress={() => {
                           this.props.navigation.navigate("HomeScreen");
                           this.setState({
                               count: 0,
                           })
                       }}>
                    <ImageBackground source={require('../assets/Images/Result.png')} style={styles.result}>
                        <View style={styles.burger}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.openDrawer()}
                                title="Go back home"
                            >
                                <Image source={require('../assets/Images/DrawerIco.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Text style={{color: '#fff', fontSize: 50, marginBottom: 20, fontWeight: '600'}}>Quiz
                                terminé !</Text>
                            <Text style={{
                                color: '#fff',
                                fontSize: 30,
                                marginBottom: 20
                            }}>{"Score : " + this.state.score + " / " + this.jsonData.length}</Text>
                            <Text style={{
                                color: '#fff',
                                fontSize: 25,
                                marginBottom: 20
                            }}>+ {this.props.updateExp.exp} XP</Text>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('HomeScreen');
                            }}
                                              style={[styles.button, {borderColor: (this.props.updateQuizType.quizType === "Premium") ? "#FCB045" : "#9E005D"},
                                                  {borderColor: (this.props.updateQuizType.quizType === "Simple") ? "#9E005D" : "#FCB045"}]}>
                                <Text style={styles.buttonText}>Accueil</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </Modal>
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
    pic: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    timer: {
        position: 'absolute',
        top: '5%',
        right: '5%',
        zIndex: 10,
    },
    quiz: {
        justifyContent: 'space-between',
        textAlign: 'center',
        alignItems: 'center',
    },
    q_container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'space-around',
        marginBottom: 40,

    },
    questions: {
        textAlign: 'center',
        width: 300,
        height: 100,
        borderRadius: 5,
        color: 'white',
        fontSize: 25,
        justifyContent: 'center',

    },
    answerButton: {
        width: 150,
        height: 50,
        marginTop: 20,
        borderRadius: 50,
        borderWidth: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    next: {
        marginTop: 20,
        alignItems: 'center'
    },
    modal: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    result: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 2,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    burger: {
        position: 'absolute',
        top: '5%',
        right: '5%',
        zIndex: 10,
    },

    button: {
        borderRadius: 50,
        width: 251,
        height: 50,
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        alignContent: 'center',
    },

    buttonText: {
        color: 'black',
        fontSize: 17,
        textAlign: 'center'
    }
});

const mapStateToProps = (state) => {
    return state
};
export default connect(mapStateToProps)(QuizVue)