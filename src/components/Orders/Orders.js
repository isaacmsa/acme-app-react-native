import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Table from './Table'
import ButtonLogout from './ButtonLogout'

const Orders = ({ navigation, setIsToken }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerOrders}>
        <Text style={styles.title}>Listado de pedidos</Text>
        <ButtonLogout navigation={navigation} setIsToken={setIsToken} />
      </View>
      <Table />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  headerOrders: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 10,
  },
})

export default Orders
