import React from 'react';
import {Dimensions, Image, Modal, StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import connect from "react-redux/es/connect/connect";

const stack = <Image style={{padding: 2}} source={require('../assets/Images/money4.png')}/>;
const logo = <Image style={{padding: 2}} source={require('../assets/Images/money3.png')}/>;

class Boutique extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            price: 0,
            visible: false
        })
    }

    _resetCoins() {
        if (this.props.updateCoins.coins < this.state.price) {
            alert("Plus de Thunes");
        } else {
            const action = {type: "RESET_COINS", value: this.state.price};
            this.props.dispatch(action);
            this.setState({visible: false});
        }
    }

    render() {
        console.log(this.state.price);
        return (
            <View style={styles.container}>
                <View style={styles.burger}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer()}
                        title="Go back home"
                    >
                        <Image source={require('../assets/Images/DrawerIco.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.header}>
                    <Text style={styles.title}>BOUTIQUE</Text>
                    <View style={styles.userInfos}>
                        <Text style={styles.title}>Martin Hériché</Text>
                        <Text style={{
                            fontSize: 17,
                            color: 'white',
                            marginLeft: 15,
                            marginBottom: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>{this.props.updateCoins.coins} {stack}</Text>
                    </View>
                    <Text style={styles.title}>PROMOTIONS</Text>
                    <ScrollView style={{marginTop: 20,}}>
                        <View style={styles.promotions}>
                            <View style={styles.promWidth}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        price: 325,
                                        visible: true
                                    })
                                }
                                }
                                >
                                    <Image source={require('../assets/Images/ReductionB.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.promWidth}>
                                <Text style={{ color: 'white', textAlign: "center",}}>Ticket de transport
                                    1 voyage:
                                    325 {logo}</Text>
                            </View>
                        </View>
                        <View style={styles.promotions}>
                            <View style={styles.promWidth}>
                                <Text style={{ color: 'white', textAlign: "center",}}>Ticket de transport
                                    10 voyages: 2500 {logo} </Text>
                            </View>
                            <View style={styles.promWidth}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        price: 2500,
                                        visible: true
                                    })
                                }}>
                                    <Image source={require('../assets/Images/ReductionBI.png')}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.promotions}>
                            <View style={styles.promWidth}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        price: 750,
                                        visible: true
                                    })
                                }
                                }
                                >
                                    <Image source={require('../assets/Images/ReductionInt.png')}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.promWidth}>

                                <Text style={{ color: 'white', textAlign: "center",}}>Bon d’achat de 10€
                                    Intermarché:
                                    750 {logo}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <Modal animationType="slide"
                       transparent={true}
                       visible={this.state.visible}
                       onRequestClose={() => {
                       }}
                       onPress={() => {
                       }}>
                    <View style={styles.modal}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>Voulez-vous vraiment acheter cette
                                réduction ?</Text>
                            <Text style={[styles.modalText, {marginTop: 5}]}>Prix : {this.state.price}</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this._resetCoins()
                                }}><Text style={styles.modalText}>Oui</Text></TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this.setState({visible: false})
                                }}><Text style={styles.modalText}>Non</Text></TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: "black",
    },

    burger: {
        position: 'absolute',
        top: '5%',
        right: '5%',
        zIndex: 10,
    },

    header: {
        marginTop: 25,
        width: 100 + '%',
        justifyContent: "space-around",
    },
    title: {
        marginLeft: 15,
        color: 'white',
        fontSize: 25
    },

    userInfos: {
        marginTop: 20,
        width: 250,
    },
    promotions: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'space-around'
    },
    promWidth: {
        width: "50%"
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: "80%",
        height: "33%"
    },
    modalText: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center'
    },
    button: {
        borderRadius: 50,
        width: 251,
        height: 50,
        justifyContent: 'center',
        borderColor: '#FC6B32',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        borderWidth: 1,
        alignItems: 'center',
        marginTop: 20
    },
});
const mapStateToProps = (state) => {
    return state
};
export default connect(mapStateToProps)(Boutique)