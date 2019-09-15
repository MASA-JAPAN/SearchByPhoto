import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, paddingBottom: 45 }}>Let's search!</Text>
      <Button
        icon={
          <Icon
            name="camera"
            size={200}
            color="white"
          />
        }
      />
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18
  },
});
