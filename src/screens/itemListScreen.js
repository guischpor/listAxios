import React from 'react';
import {
StyleSheet,
Text,
View }
from 'react-native';
import ItemList from '../components/itemList';

export default class itemListScreen extends React.Component {

render() {
    return (
        <View>
            <ItemList></ItemList>
        </View>
    );
    }
}

