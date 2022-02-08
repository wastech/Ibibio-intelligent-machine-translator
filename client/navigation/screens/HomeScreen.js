import React from 'react';
import CardView from 'react-native-cardview';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import {Title, Caption, Subheading} from 'react-native-paper';

const Home = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://image.freepik.com/free-vector/business-team-looking-new-people-allegory-searching-ideas-staff-woman-with-magnifier-man-with-spyglass-flat-illustration_74855-18236.jpg?w=1380',
            }}
          />

          <Title style={styles.titleText}>Word of the day</Title>
          <Subheading style={styles.subText}>
            This is not really This is not really a bird nest a bird nest This
            is not really a bird nest
          </Subheading>
        </View>

        <CardView
          cardElevation={4}
          cardMaxElevation={4}
          cornerRadius={5}
          style={styles.cardComtainer}>
          <View style={styles.cardText}>
            <Title style={styles.textHeader}>
              Ambinister
              <Caption
                style={{
                  color: 'orange',
                  fontSize: 10,
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  marginLeft: 23,
                }}>
                [English]
              </Caption>
            </Title>

            <Subheading style={styles.textsub}>
              hello word
              <Caption
                style={{
                  color: 'orange',
                  fontSize: 10,
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                }}>
                [Ibibo]
              </Caption>
            </Subheading>
          </View>
        </CardView>
      </View>
    </ScrollView>
  );
};

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
  imageContainer: {
    top: 40,
    width: '85%',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 20,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    width: '80%',
  },
  subText: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: '400',
    color: '#000',
  },
  cardText: {
    padding: 30,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  cardComtainer: {
    width: '85%',
    marginTop: 100,
  },
  textsub: {
    marginTop: 20,
    textAlign: 'center',
  },
});
export default Home;
