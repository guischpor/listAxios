import React from 'react';
import {
StyleSheet,
Text,
View }
from 'react-native';
import Itens from './Itens'

export default class ItemList extends React.Component {
render() {
    return (
        <View>
            <Itens/>
            <Itens/>
            <Itens/>
        </View>
    );
    }
}

