import { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './home';
import Profile from './profile';

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

const AppNavigator = createStackNavigator({
    Home1: { screen: Home },
    Profile1: { screen: Profile },
}, {
        initialRouteName: 'Home',
    });

const AppNav1 = () => (
    <AppNavigator />
);

export default AppNav1;

// const AppNav2 = createStackNavigator({
//     screen: AppNavigator
// })

// const AppNav = createAppContainer(AppNavigator);

// export default class AppNav1 extends Component {
//     render() {
//         return <AppNavigator />
//     }
// }