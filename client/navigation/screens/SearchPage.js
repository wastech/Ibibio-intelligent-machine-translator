// SearchBar.js
import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {
  Searchbar,
  Card,
  Caption,
  Title,
  Paragraph,
  Subheading,
} from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <SafeAreaView style={{padding: 10}}>
      <ScrollView style={styles.scrollView}>
        <Searchbar
          placeholder="Search.."
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.input}
        />

        <View style={styles.searchContent}>
          <Card>
            <Card.Content>
              <Title>
                Noun{' '}
                <Caption
                  style={{
                    color: 'orange',
                    fontSize: 10,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                  }}>
                  [English]
                </Caption>
              </Title>
              <Caption
                style={{
                  color: 'orange',
                  fontSize: 10,
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                }}>
                English to Ibibo
              </Caption>
              <Subheading>
                {' '}
                Subheading{' '}
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
            </Card.Content>
          </Card>
        </View>

        <View>
          <Card style={styles.searchContent}>
            <Card.Content>
              <Title style={styles.searchTitle}>Usage</Title>
              <Paragraph
                style={{
                  textTransform: 'capitalize',
                  fontStyle: 'italic',
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                <Text style={styles.usageText}> 1.</Text> inspect the React
                component hierarchy, their props, and state.
              </Paragraph>

              <Paragraph
                style={{
                  textTransform: 'capitalize',
                  marginTop: 10,
                  marginBottom: 5,
                  fontStyle: 'italic',
                }}>
                <Text style={styles.usageText}> 2.</Text> inspect the React
                component hierarchy, their props, and state.
              </Paragraph>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// styles
const styles = StyleSheet.create({
  input: {
    width: '100%',
    border: '#ccc',
    marginTop: 10,
    padding: 6,
    borderRadius: 20,
  },
  searchContent: {
    marginTop: 15,
  },
  searchTitle: {},
  searchSubTitle: {},
  usageText: {
    fontSize: 15,
    color: 'black',
  },
});
export default SearchBar;
