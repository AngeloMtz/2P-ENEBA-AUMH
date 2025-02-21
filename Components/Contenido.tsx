import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contenido = () => {
  return (
    <View style={styles.container}>
      <Text>Contenido</Text>
    </View>
  )
}

export default Contenido

const styles = StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:'black',
        borderRadius:10
    }
})