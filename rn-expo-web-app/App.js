import { SafeAreaView, StatusBar, Text, View } from 'react-native'

function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      
      <View>
        <Text style={ { fontSize: 24 } }>Hello world.</Text>
      </View>
    </SafeAreaView>
  )
}

export default App
