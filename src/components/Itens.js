import React from 'react';
import {
StyleSheet,
Text,
View,
Image,
StatusBar
}
from 'react-native';

export default class itens extends React.Component {

render() {
    return (
        <View style={styles.item}>
            <View style={styles.foto}>
                <Image style={{ height: 100, width: 100 }}
                    source={{ uri: this.props.item.foto}}
                />
            </View>
            <View style={styles.detalhesItens}>
                <Text style={styles.txtTitulo}>
                    {this.props.item.titulo}
                </Text>
                <Text style={styles.txtValor}>
                    R$ {this.props.item.valor}
                </Text>
                <Text style={styles.txtDetalhes}>
                    Local: {this.props.item.local_anuncio}
                </Text>
                <Text style={styles.txtDetalhes}>
                    Data de publicação: {this.props.item.data_publicacao}
                </Text>
            </View>
        </View>
    );
    }
}

const styles = StyleSheet.create({
    item:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 60,
    },

    foto:{
        width: 102,
        height: 102
    },

    detalhesItens:{
        marginLeft: 20,
        flex: 1,
    },

    txtTitulo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
        marginBottom: 5,
    },

    txtValor:{
        fontWeight: 'bold',
        fontSize: 16,
    },

    txtDetalhes:{
        fontSize: 16,

    }
});
