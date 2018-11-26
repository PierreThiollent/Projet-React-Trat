import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import connect from "react-redux/es/connect/connect";

class Boutique extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            price: 0
        })
    }

    _resetCoins() {
        if (this.props.updateCoins.coins < this.state.price) {
            alert("Plus de Thunes")
        }
        else {
            const action = {type: "RESET_COINS", value: this.state.price};
            this.props.dispatch(action);
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
                        <Text style={{fontSize: 17, color: 'white', marginLeft: 15, marginBottom: 50,}}>{this.props.updateCoins.coins}
                             Points</Text>
                    </View>


                    <Text style={styles.title}>PROMOTIONS</Text>
                    <View style={[styles.promotions,{marginTop:20,}]}>
                        <View>
                            <TouchableOpacity onPress={() => {
                                                            this._resetCoins();
                                                            this.setState({
                                                                price: 325,
                                                        })}
                            }
                                              style={{width: 40 + "%"}}>
                                <Image source={require('../assets/Images/ReductionB.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: 50 + "%", flexWrap: "wrap",}}>

                            <Text style={{fontSize: 17, color: 'white', textAlign: "center",}}>Ticket de transport
                                (1 voyage)
                                325 points</Text>
                        </View>
                    </View>
                    <View style={styles.promotions}>
                        <View style={{width: 50 + "%", flexWrap: "wrap",}}>

                            <Text style={{fontSize: 17, color: 'white', textAlign: "center",}}>Ticket de transport
                                (10 voyage)
                                2500 points</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => {
                                this._resetCoins();
                                this.setState({
                                    price: 2500,
                                })}
                            } style={{width: 40 + "%"}}>
                                <Image source={require('../assets/Images/ReductionBI.png')}/>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={styles.promotions}>
                        <View>
                            <TouchableOpacity onPress={() => {
                                this._resetCoins();
                                this.setState({
                                    price: 750,
                                })}
                            }
                                style={{width: 40 + "%"}}>
                                <Image source={require('../assets/Images/ReductionInt.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: 50 + "%", flexWrap: "wrap",}}>

                            <Text style={{fontSize: 17, color: 'white', textAlign: "center",}}>Bon d’achat de 10€
                                Intermarché
                                750 points</Text>
                        </View>
                    </View>

                </View>


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


    }
});
const mapStateToProps = (state) => {
    return state
};
export default connect(mapStateToProps)(Boutique)