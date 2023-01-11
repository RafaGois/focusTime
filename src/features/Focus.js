import React, { useState } from "react"
import { View, StyleSheet,Text, SafeAreaView } from "react-native"
import {TextInput} from 'react-native-paper'
import { RoundedButton } from "../components/RoundedButton.js"

import { Spacing } from "../utils/Sizes.js"

import { colors } from '../utils/Colors.js'


export const Focus = ({addSubject}) => {

    const [subject, setSubject] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                onChangeText={setSubject}
                label="What would you like to focus on?"
                />
                <View style={styles.button}>
                    <RoundedButton title ={'+'} size={50} onPress={() => addSubject(subject)}/>
                </View>
            </View>
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        padding: Spacing.lg,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    text: {
        color: colors.white,
    },
    input: {
        flex: 1,
        marginRight: Spacing.sm,
    },

    button: {
        justifyContent: 'center',
    },
})