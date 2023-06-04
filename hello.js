import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from 'react-native';

const HelloComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'blue',
      fontSize:90,
    }
  });  

export default  HelloComponent;