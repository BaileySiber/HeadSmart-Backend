import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./Components/login";
import RegisterScreen from "./Components/register";
import SurveyScreen from "./Components/initialSurvey";
import HomeScreen from "./Components/howareyou";
import GridScreen from "./Components/grid";
import EmotionsScreen from "./Components/emotions";
import JournalScreen from "./Components/Journal";


import SuggestionsScreen from "./Components/suggestions";
import HomePageScreen from "./Components/homePageScreen";

import { StackNavigator } from 'react-navigation';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      name: "",
      email: "",
      phone: ""
    }
  }



  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}


export default StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
  Survey: {
    screen: SurveyScreen
  },
  Home: {
    screen: HomeScreen
  },
  Grid: {
    screen: GridScreen
  },
  Emotions: {
    screen: EmotionsScreen
  },
  Journal: {
    screen: JournalScreen
  },
  Suggestions: {
    screen: SuggestionsScreen
  },
  HomePage: {
    screen: HomePageScreen
  }
}, {initialRouteName: 'Login'});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
