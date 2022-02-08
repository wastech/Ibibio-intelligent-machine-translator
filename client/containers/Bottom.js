import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Bottomfooter = ({navigation}) => {
  const pressHandler = () => {
    //navigation.navigate('ReviewDetails');
    navigation.navigate('searchPage');
  };

  return (
    <View style={styles.bottomContainer}>
      <Icon name="ios-menu" size={40} color="#900" />
      <Icon name="search" size={40} color="#900" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    position: 'absolute',
    bottom: 10,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
});
export default Bottomfooter;
