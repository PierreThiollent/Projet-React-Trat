import {createDrawerNavigator, createStackNavigator} from 'react-navigation'
import Start from '../Components/Start'
import Login from '../Components/Login'
import Home from '../Components/Home'
import SelectQuiz from "../Components/SelectQuiz";
import DrawerMenu from "../Components/DrawerMenu";
import QuizVue from "../Components/QuizVue";
import Stats from "../Components/Stats";
import Profile from "../Components/Profile";
import SelectTheme from "../Components/SelectTheme";
import Boutique from "../Components/Boutique"
import Avantages from "../Components/Avantages"


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

        SelectTheme: {
            screen: SelectTheme
        },
        QuizVue: {
            screen: QuizVue
        },
        StatsScreen: {
            screen: Stats
        },
        ProfileScreen: {
            screen: Profile
        },
        BoutiqueScreen: {
            screen: Boutique,
        },
        AvantagesScreen: {
            screen: Avantages,
        }
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