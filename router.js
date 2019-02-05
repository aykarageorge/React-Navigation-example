import { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeClass from './home';
import ProfileClass from './profile';

// const HomeStack = createStackNavigator({
//     Home: {
//         screen: Home,
//     },
// });

// const ProfileStack = createStackNavigator({
//     Profile: {
//         screen: Profile,
//     },
// });

const MainNavigator = createStackNavigator({
    Home1: { screen: HomeClass },
    Profile1: { screen: ProfileClass },
}, {
        initialRouteName: 'Home1',
    });

const AppNav = createAppContainer(MainNavigator);

export default AppNav;

// const AppNav2 = createStackNavigator({
//     screen: AppNavigator
// })

// const AppNav = createAppContainer(AppNavigator);

// export default class AppNav1 extends Component {
//     render() {
//         return <AppNavigator />
//     }
// }