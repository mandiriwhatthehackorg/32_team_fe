import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

class Home extends Component {

    render() {
        const items = [
            { name: 'Buka Rekening', code: '#1abc9c', conversation: [{}]}, 
            { name: 'Rekening Saya', code: '#2ecc71', conversation: [{}] },
            { name: 'Promo', code: '#f39c12', conversation: [{}] },
            { name: 'Transfer Uang', code: '#3498db', conversation: [{}] }, 
            { name: 'Isi E-Money', code: '#9b59b6', conversation: [{}] },
            { name: 'Bayar Bill', code: '#34495e', conversation: [{}] }, 
            { name: 'Isi Pulsa / Paket Data', code: '#95a5a6', conversation: [{}] }, 
            { name: 'Credit Card', code: '#16a085', conversation: [{}] },
            { name: 'Pinjaman', code: '#27ae60', conversation: [{}] }, 
            { name: 'Produk Mandiri', code: '#2980b9', conversation: [{}] },
            { name: 'Layanan Mandiri', code: '#8e44ad', conversation: [{}] }, 
            { name: 'Complaint & Feedback', code: '#2c3e50', conversation: [{}] },
            { name: 'Bantuan', code: '#e67e22', conversation: [{}] },
            { name: 'Suku Bunga', code: '#ecf0f1', conversation: [{}] },            
            { name: 'History Transaksi', code: '#e74c3c', conversation: [{}] }, 
            { name: 'Status Transaksi', code: '#c0392b', conversation: [{}] }
        ];

        return (
            <FlatGrid
                itemDimension={130}
                items={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                // spacing={20}
                renderItem={({ item, index }) => (
                    <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemCode}>{item.conversation.length} conversations</Text>
                    </View>
                )}
            />
        );
    }

}

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});

export default Home;