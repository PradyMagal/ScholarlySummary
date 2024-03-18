import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView, Alert } from 'react-native';
import { Card, Button, Icon } from '@rneui/themed';
async function makeCall(searchTerm){
  console.log("WAhh")
  var response = await fetch(
      "https://t4jewn5cay3zj7ld6e3y2qe54q0zktgv.lambda-url.us-west-1.on.aws/",
      {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({"terms":searchTerm})
          
      },
      
      )
      console.log("done w fetch")
      console.log(response)
      let termsGen = await response.json()
      console.log(termsGen)
}
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>Welcome,</Text>
      <Card>
      <Card.FeaturedSubtitle style={styles.cSub}>Here's a Random Scholarly Article We Think You'd Like:</Card.FeaturedSubtitle>
      <Card.Divider></Card.Divider>
      <Card.Title style={styles.cTitle}>Article Title</Card.Title>
      <Text style={styles.cAuthor}>Author Name</Text>
      <Text style={styles.summaryText}>Summary of Article here, blah blah long ass text</Text>
      <Text style={styles.cSource}>Source</Text>
      </Card>
  
      <Text style={styles.typeText}>Type in up to 5 topics you are interested in and we will find articles based on those (Don't worry about punctuation, we got you)</Text>
      <TextInput style={styles.scrollView}
      editable
      placeholder="Topics Here...">
      </TextInput>
      <Button style={styles.subButton} title={"Save Topics"}/>
      <Button
      style = {styles.subButton}
        title="Find me an Article"
        color="#f194ff"
        onPress={() => makeCall("cars,biology")}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontFamily: "Helvetica",
    fontWeight: "bold",
    textShadowColor: "black",
    fontSize: 35,
  },
  cTitle: {
    alignSelf: "flex-start",
    fontFamily: "Helvetica",
    fontSize: 25,
    color: "#28014f"
  },
  cSub: {
    fontFamily: "Arial",
    fontSize: 16,
    fontStyle: "italic",
    color: "gray"
  },
  cSource: {
    fontSize: 12,
    color: "gray",
    paddingTop: 5,
    fontStyle: "italic"
  },
  cAuthor: {
    fontSize: 14,
    fontFamily: "Helvetica",
    paddingBottom: 4,
  },
  summaryText: {
    fontSize: 17,
    fontFamily: "Helvetica",
    paddingBottom: 2,
    paddingTop: 2,
  },
  input: {
    margin: 12,
    borderWidth: 0.5,
    padding: 12,
  },
  typeText:{
    paddingHorizontal:15,
    paddingTop: 15,
    fontWeight: "200"
  },
  scrollView: {
    padding:10,
    margin: 12,
    maxHeight: "25%",
    minWidth: "90%",
    backgroundColor: '#fffed4',
    borderRadius: 7,
  },
  subButton: {
    fontSize: 10,
    borderRadius: 5,
    padding: 8
  }
});
