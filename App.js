import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Auth from './src/components/Login/Auth'
import Orders from './src/components/Orders/Orders'

const Stack = createNativeStackNavigator()

const App = () => {
  const [isToken, setIsToken] = useState('')

  useEffect(() => {
    async function getToken() {
      try {
        const getUserToken = await AsyncStorage.getItem('token')
        setIsToken(getUserToken)
      } catch (error) {
        console.error(error)
      }
    }
    getToken()
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {isToken !== null ? (
          <Stack.Screen name="Pedidos" options={{ title: 'Pedidos' }}>
            {(props) => <Orders {...props} setIsToken={setIsToken} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="Home" options={{ title: 'Home' }}>
            {(props) => <Auth {...props} setIsToken={setIsToken} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
