import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class ProfileClass extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Home1')}
                />
            </View>
        );
    }
}
