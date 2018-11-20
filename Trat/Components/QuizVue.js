import React from 'react'
import {
    Dimensions,
    Image,
    ImageBackground,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native'
import CountdownCircle from 'react-native-countdown-circle';
import {connect} from 'react-redux'
import shuffle from 'shuffle-array'
import {jsonScienceData} from "../Data/ScienceQuizDataFacile";
import {jsonCGData} from "../Data/CGQuizDataFacile";


class QuizVue extends React.Component {

    _Next = () => {
        this._scoring();
        if (this.state.count === this.jsonDataQuestion.length - 1) {
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
                    xp: this.state.xp + 10,

                }
            );
            console.log("Score : " + this.state.score);
        }

        else {
            return (null);
        }
    };
    _levelUp = () => {
        if (this.props.updateExp.exp === this.props.updateExpMax.expMax || this.props.updateExp.exp > this.props.updateExpMax.expMax) {
            this._nextLevel();
            this._upExpMax();
            this._resetExp();

        }
        else {
            console.log("mon console.log")
        }
    };

    constructor(props) {
        super(props);
        this.jsonDataQuestion = shuffle.pick(this.props.selectTheme.theme.questions, {'picks': this.props.updateQuizLength.quizLength});
        this.state = ({
            count: 0,
            score: 0,
            qn: false,
            disable: false,
            enable: false,
            visible: false,
            response: false,
            timer: 30,
            xp: 0
        })
    }

    _upExpMax() {
        const action = {type: "UPD_EXP_MAX", value: 2};
        this.props.dispatch(action);
    }

    _nextLevel() {
        const action = {type: "LEVEL_UP", value: +1};
        this.props.dispatch(action);
    }

    _resetExp() {
        const action = {type: "RESET_EXP", value: 0};
        this.props.dispatch(action);
    }

    updateExp() {
        const action = {type: "UPD_EXP", value: +10};
        this.props.dispatch(action)
    };

    render() {
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
                <View style={styles.pic}>{this.jsonDataQuestion[this.state.count].images}</View>
                <View style={styles.container}><Text
                    style={styles.questions}>{this.jsonDataQuestion[this.state.count].title}</Text></View>
                <View style={styles.quiz}>
                    <View style={styles.q_container}>
                        {this.jsonDataQuestion[this.state.count].answer.map((el) => {
                            return (
                                <TouchableHighlight disabled={this.state.disable}
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
                                                        this._levelUp();
                                                    }}
                                                    underlayColor={"white"}>
                                    <Text style={{textAlign: 'center'}} key={el.nom}>{el.nom}</Text>
                                </TouchableHighlight>)
                        })}
                    </View>
                </View>
                <Modal style={styles.modal}
                       animationType="slide"
                       transparent={true}
                       visible={this.state.visible}
                       onRequestClose={() => {

                       }}
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

                       }}

                       onPress={() => {
                           this.props.navigation.navigate("HomeScreen");
                           this.setState({
                               count: 0,
                           })
                       }}>
                    <ImageBackground source={require('../assets/Images/Result.png')} style={styles.result}>
                        <View style={styles.buttonContainer}>
                            <View style={{marginBottom: 30}}>
                                <Image
                                    source={(this.props.updateQuizType.quizType === "Premium" && this.props.selectTheme.theme === jsonCGData) ? require('../assets/Images/Theme/Premium/CultureG.png') : null}/>
                                <Image
                                    source={(this.props.updateQuizType.quizType === "Premium" && this.props.selectTheme.theme === jsonScienceData) ? require('../assets/Images/Theme/Premium/Science.png') : null}/>
                                <Image
                                    source={(this.props.updateQuizType.quizType === "Simple" && this.props.selectTheme.theme === jsonCGData) ? require('../assets/Images/Theme/Simple/CultureG.png') : null}/>
                                <Image
                                    source={(this.props.updateQuizType.quizType === "Simple" && this.props.selectTheme.theme === jsonScienceData) ? require('../assets/Images/Theme/Simple/Science.png') : null}/>
                            </View>
                            <Text style={{color: '#fff', fontSize: 40, marginBottom: 20}}>Quiz terminé !</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this._levelUp();
                                    this.props.navigation.navigate("HomeScreen");
                                    this.setState({enable: false})
                                }}>
                                <Text
                                    style={{textAlign: 'center',}}>{"Score: " + this.state.score + " / " + this.jsonDataQuestion.length}</Text>
                            </TouchableOpacity>
                            <Text style={{color: '#fff', fontSize: 35, marginBottom: 20}}>+ {this.state.xp} XP</Text>
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
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 40,

    },
    questions: {
        borderRadius: 5,
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10

    },
    answerButton: {
        width: 160,
        height: 55,
        padding: 10,
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
        borderColor: '#FC6B32',
        backgroundColor: '#fff',
        borderWidth: 1,
        alignContent: 'center',
        marginBottom: 20
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