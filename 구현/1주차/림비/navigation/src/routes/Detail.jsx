import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../styles';

function Home({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>id: {route.params.id}</Text>
        <Button
          title='다음'
        />
        <Button
          title='뒤로가기'
          onPress={() => navigation.pop()}
        />
        <Button
          title='처음으로'
          onPress={() => navigation.popToTop()}
        />
      </View>
    </SafeAreaView>

  )
}

export default Home;