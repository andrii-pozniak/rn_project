import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    TextInput

} from 'react-native';

const initialState = {
    login: '',
    email: '',

}

export const LoginScreen = () => {
    const [isKeyboard, setIsKeyboard] = useState(false)
    const [state, setState] = useState(initialState)
    const keyboardHide = () => {
        setIsKeyboard(false);
        Keyboard.dismiss();
        setState(initialState)
    }
    return (
        <TouchableWithoutFeedback onPress={keyboardHide}>
            <View style={styles.LoginScreenForm}>
                <Text style={styles.titleForm}>Enter</Text>
                <KeyboardAvoidingView
                    behavior={null}>
                    <View style={{ marginBottom: isKeyboard ? 16 : 132 }}>
                        <TextInput
                            style={styles.input}
                            onFocus={() => setIsKeyboard(true)}
                            value={state.login}
                            onChangeText={(value) =>
                                setState((prevState) => ({ ...prevState, login: value }))}
                            placeholder="Login"
                        />
                        <TextInput
                            style={styles.input}
                            onFocus={() => setIsKeyboard(true)}
                            value={state.email}
                            onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                            placeholder="Email"
                        />

                        <TouchableOpacity activeOpacity={0.5}
                            style={styles.btn} onPress={keyboardHide}>
                            <Text style={styles.titleBtn}>Enter</Text>
                        </TouchableOpacity>
                        <Text style={styles.textMessage}>Don't have an account? Register</Text>
                    </View>
                </KeyboardAvoidingView>
                <View style={styles.indicator}></View>
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({

    titleForm: {
        textAlign: 'center',
        marginTop: 92,
        fontSize: 30,
        fontWeight: 500,
        fontFamily: 'Roboto-Regular',
        marginBottom: 33,
    },

    LoginScreenForm: {
        position: 'absolute',
        width: '100%',
        height: 490,
        justifyContent: 'flex-end',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#FFFFFF',
        paddingLeft: 16,
        paddingRight: 16,
    },

    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 51,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginBottom: 16,
    },
    titleBtn: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Roboto-Regular',
        color: '#FFFFFF',
    },
    textMessage: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#1B4371',
        fontFamily: 'Roboto-Regular',
        // marginBottom: 132,
    },
    indicator: {

        width: 134,
        height: 5,
        backgroundColor: '#212121',
        borderRadius: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 7,
    },
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

});