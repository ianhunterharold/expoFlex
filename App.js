import React from 'react';
import { Text, View, ActivityIndicator,ProgressViewIOS, Button, Alert, Dimensions,Platform, ProgressBarAndroid, StyleSheet } from 'react-native';


export default function App(){

  const { height, width } = Dimensions.get('window');

  const onButtonPress = () => {
    Alert.alert(`${new Date().toLocaleTimeString()}clicked the button`)
  };
  return (
    <View style={styles.page}>
      <ActivityIndicator size='large' color='#61DBFB'/>
      
      <Text style={styles.text}>
        piss off
      </Text>
      <Button title="Click Me" onPress={onButtonPress}></Button>
      <Text style={styles.text}>Height: {height} and Width: {width} and device platform: {Platform.OS}</Text>
      {Platform.OS === 'ios' && <ProgressViewIOS progress={0.5} />}
      {Platform.OS ==='android' && (
        <ProgressBarAndroid 
          styleAttr='Horizontal'
          indeterminate={false}
          color='blue'
        />
      )} 
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'row',
    
    alignItems: 'center',

    marginTop: 20,
    backgroundColor: "#DDD",

  },
  text:{
  
    textAlign: 'center',
    fontSize: 10,
    color: "red",
    backgroundColor: "yellow",
    margin: 5,
    padding: 5,
  }

})