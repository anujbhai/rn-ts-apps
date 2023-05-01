import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import colors from './src/constants/colors'

function App(): JSX.Element {
  return (
    <SafeAreaView style={ styles.SafeAreaViewStyles }>
      <View style={ styles.header }>
        <Text style={ styles.headerText }>Header</Text>

        <Icon name="delete" size={ 25 } color={ colors.red } />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaViewStyles: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.primary,
    textTransform: 'uppercase',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    color: colors.white
  },
})

export default App
