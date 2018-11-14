import {createDrawerNavigator, createStackNavigator} from 'react-navigation'
import Start from '../Components/Start'
import Login from '../Components/Login'
import Home from '../Components/Home'
import SelectQuiz from "../Components/SelectQuiz";
import DrawerMenu from "../Components/DrawerMenu";
import SelectThemePremium from "../Components/SelectThemePremium";
import CulturegPremiumQuiz from "../Components/CulturegPremiumQuiz";
import Stats from "../Components/Stats";
import Profile from "../Components/Profile";
import SelectThemeSimple from "../Components/SelectThemeSimple";


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

        SelectThemePremium: {
            screen: SelectThemePremium
        },
        SelectThemeSimple: {
            screen: SelectThemeSimple
        },
        CulturegPremiumQuiz: {
            screen: CulturegPremiumQuiz
        },
        StatsScreen: {
            screen: Stats
        },
        ProfileScreen: {
            screen: Profile
        },
    },

    {
        initialRouteName: 'StartScreen',
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