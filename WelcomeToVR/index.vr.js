import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
    render() {
        return (
            <View>
                <Pano source={asset('candies.jpg')}/>
                <Text
                    style={{
                        backgroundImage: '#777879',
                        fontSize: 0.5,
                        fontWeight: '400',
                        layoutOrigin: [0.5, 0.5],
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [{translate: [0, 0, -3]}],
                    }}>
                    Hello World!
                </Text>
            </View>
        );
    }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
