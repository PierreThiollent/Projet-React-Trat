import {createStackNavigator} from 'react-navigation'
import Start from '../Components/Start'
import Login from '../Components/Login'
import Home from '../Components/Home'


const Navigation = createStackNavigator(
    {
        StartScreen: {
            screen: Start,
        },

        LoginScreen: {
            screen: Login,
        },
        HomeScreen: {
            screen: Home
        },
    },

    {
        initialRouteName: "StartScreen",
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'black'
            }
        }
    }
);

export default Navigation