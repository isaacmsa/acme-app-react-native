import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Chat from './Chat'

const Details = ({ setIsDetails, orders }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContent}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsDetails(false)}
          >
            <Text style={{ textAlign: 'right', fontSize: 16 }}>Cerrar</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Details of products</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>
            {orders.details}
          </Text>
        </View>
        <Chat />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1,
    height: '100%',
    width: '70%',
  },
  detailsContent: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    padding: 50,
    borderTopLeftRadius: 20,
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  closeButton: {
    marginTop: 15,
    marginBottom: 15,
  },
})

export default Details
