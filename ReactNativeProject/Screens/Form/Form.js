import React from 'react';
import {
    StyleSheet, View,
    TextInput
} from 'react-native';

export const Form = props => {
    return (

        <View style={styles.form}>
            <TextInput
                style={styles.input}
                // onFocus={() => setIsKeyboard(true)}
                placeholder="Login"
            />
            <TextInput
                style={styles.input}
                // onFocus={() => setIsKeyboard(true)}
                placeholder="Email"

            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginBottom: 16,
        backgroundColor: '#F6F6F6',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        color: '#212121',
    },
    form: {
        marginBottom: 16,
      },
    
});