import * as React from 'react';
import {View, ScrollView} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
export default function SettingsScreen({navigation}) {
  return (
    <ScrollView>
      <View style={{padding: 5}}>
        <Card>
          <Card.Cover
            source={{
              uri: 'https://kristalmediaonline.com/wp-content/uploads/2016/09/INI-EDO.png',
            }}
          />

          <Card.Content>
            <Title>Hibibio History</Title>
            <Paragraph>
              The Ibibio people (English: /ɪbɪˈbiːəʊ/) are a coastal people in
              southern Nigeria. They are mostly found in Akwa Ibom and Cross
              River. They are related to the Annang, and Efik peoples. During
              the colonial period in Nigeria, the Ibibio Union asked for
              recognition by the British as a sovereign nation (Noah, 1988). The
              Ibibio people (English: /ɪbɪˈbiːəʊ/) are a coastal people in
              southern Nigeria. They are mostly found in Akwa Ibom and Cross
              River. They are related to the Annang, and Efik peoples. During
              the colonial period in Nigeria, the Ibibio Union asked for
              recognition by the British as a sovereign nation (Noah, 1988). The
              Ibibio people (English: /ɪbɪˈbiːəʊ/) are a coastal people in
              southern Nigeria. They are mostly found in Akwa Ibom and Cross
              River. They are related to the Annang, and Efik peoples. During
              the colonial period in Nigeria, the Ibibio Union asked for
              recognition by the British as a sovereign nation (Noah, 1988). The
              Ibibio people (English: /ɪbɪˈbiːəʊ/) are a coastal people in
              southern Nigeria. They are mostly found in Akwa Ibom and Cross
              River. They are related to the Annang, and Efik peoples. During
              the colonial period in Nigeria, the Ibibio Union asked for
              recognition by the British as a sovereign nation (Noah, 1988).
            </Paragraph>
          </Card.Content>
        </Card>
        {/* <Text
        onPress={() => navigation.navigate('Home')}
        style={{fontSize: 26, fontWeight: 'bold'}}>
        Settings Screen
      </Text> */}
      </View>
    </ScrollView>
  );
}
