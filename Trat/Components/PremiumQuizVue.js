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
import {jsonCGData} from "../Data/CGQuizDataFacile1";

export default class PremiumQuizVue extends React.Component {

    _Next = () => {
        this._scoring();
        if (this.state.count === 10) {
            this.setState({enable: true})
        }
        else {
            this.setState({
                    count: this.state.count + 1,
                    response: false,
                    disable: false,
                    enable: false,
                    qn: false
                }
            )

        }
    };
    _scoring = () => {
        console.log(this.state.qn, "qn debut");
        if (this.state.qn === true) {
            this.setState({
                    score: this.state.score + 1,
                }
            );
            console.log("true");
        }

        else {
            return (null);

        }
    };

    constructor(props) {
        super(props);
        this.state = ({
            count: 0,
            score: 0,
            qn: false,
            disable: false,
            enable: false,
            visible: false,
            response: false
        })
    }

    render() {
        return (
            <ImageBackground style={styles.main_container}>
                <View style={styles.head_container}>
                    <Image source={require('../assets/Images/QTP.png')}/>
                </View>
                <View style={styles.pic}>{jsonCGData.questions[this.state.count].images}</View>
                <View style={styles.quiz}>
                    <Text style={styles.questions}>{jsonCGData.questions[this.state.count].title}</Text>
                    <View style={styles.q_container}>
                        {
                            jsonCGData.questions[this.state.count].answer.map((el) => {
                                return (<TouchableHighlight disabled={this.state.disable}
                                                            style={[styles.answerButton, {backgroundColor: (el.res === true && this.state.response === true) ? "#006400" : "white"}]}
                                                            onPress={() => {
                                                                this.setState({
                                                                    qn: el.res,
                                                                    response: true,
                                                                    disable: true,
                                                                    visible: true,
                                                                });
                                                            }}
                                                            underlayColor={"yellow"}
                                >
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
                       onPress={() => {
                           this._Next();
                           this.setState({visible: false})
                       }}
                >


                    <TouchableOpacity style={styles.modal}
                                      onPress={() => {
                                          this._Next();
                                          this.setState({visible: false})
                                      }}>
                    </TouchableOpacity>
                </Modal>
                <Modal animationType="slide"
                       transparent={true}
                       visible={this.state.enable}
                       onRequestClose={() => {
                           this.props.navigation.navigate("HomeScreen");
                       }}>
                    <ImageBackground style={styles.result}>
                        <Text style={{color: '#fff'}}>
                            Le Quiz est terminé
                        </Text>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.props.navigation.navigate("HomeScreen");
                                    this.setState({enable: false})
                                }}>
                                <Text style={{textAlign: 'center',}}>{"Score: " + this.state.score + " /  11"}</Text>
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
        justifyContent: 'flex-end'

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
        justifyContent: 'space-between',
        marginBottom: 40,

    },
    questions: {
        textAlign: 'center',
        width: 300,
        height: 100,
        borderRadius: 5,
        color: 'white',
        fontSize: 17,
        justifyContent: 'center',

    },
    answerButton: {
        width: 150,
        height: 50,
        marginTop: 20,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#FCB045',
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
    button: {
        borderRadius: 50,
        width: 251,
        height: 50,
        justifyContent: 'center',
        borderColor: '#FC6B32',
        backgroundColor: '#fff',
        borderWidth: 1,
        alignContent: 'center',
    },

});