import React, {Component} from 'react';
import MainContainer from './navigation/MainContainer';
import {Provider as PaperProvider} from 'react-native-paper';
import {View, StyleSheet, StatusBar} from 'react-native';
class HelloWorldApp extends Component {
  render() {
    return (
      <PaperProvider>
        <View style={styles.containerMain}>
          {/* <ScrollView style={styles.scrollView}> */}
          <MainContainer />
          {/* </ScrollView> */}
          {/* <View style={styles.bottomView}>
          <Bottomfooter />
        </View> */}
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    fontFamily: 'sans-serif-medium',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
export default HelloWorldApp;
