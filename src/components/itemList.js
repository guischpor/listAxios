import React from 'react';
import {
StyleSheet,
Text,
View,
ScrollView  }
from 'react-native';
import Itens from './Itens'
import axios from 'axios';

export default class ItemList extends React.Component {

constructor(props){
    super(props);
    this.state = {
        itensListProducts: [],
    };
}

componentWillMount() {
    //requisição http
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
        .then(response => {
            this.setState({itensListProducts: response.data})
        })
        .catch(() => {
            console.log('Erro ao recuperar os dados');
        });
}

render() {
    return (
        <ScrollView style={{backgroundColor: '#DDD'}}>
            {this.state.itensListProducts.map ( item => {
                return (
                    <Itens
                        key={item.titulo}
                        item={item}
                    />
                );
            })
            }
        </ScrollView>
    );
    }
}

