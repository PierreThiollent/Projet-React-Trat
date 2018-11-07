import {createDrawerNavigator, createStackNavigator} from 'react-navigation'
import Start from '../Components/Start'
import Login from '../Components/Login'
import Home from '../Components/Home'
import SelectQuiz from "../Components/SelectQuiz";
import DrawerMenu from "../Components/DrawerMenu";
import Profile from "../Components/Profile";



const AppStackNavigation = createStackNavigator(
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
        SelectQuiz: {
            screen: SelectQuiz
        },
        ProfileScreen: {
            screen: Profile
        },
    },

    {
        initialRouteName: 'ProfileScreen',
        navigationOptions: {
            header: null,
            headerStyle: {
                backgroundColor: 'black'
            }
        }
    }
);

const AppDrawerNavigator = createDrawerNavigator({
        Home: {
            screen: AppStackNavigation,
        },
        LoginScreen: {
            screen: Login,
        },
        HomeScreen: {
            screen: Home
        },
        SelectQuiz: {
            screen: SelectQuiz
        },
    },
    {
        drawerPosition: 'right',
        drawerBackgroundColor: 'transparent',
        contentComponent: DrawerMenu,

    });

export default AppDrawerNavigator