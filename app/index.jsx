import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
export default function index() {
  return (
    <View>
      <Text>index</Text>

    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
})