import React from 'react';
import {  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ListView,
  Alert,
  Button,
  RefreshControl,
  AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo';

export default class RegisterScreen extends React.Component {
  constructor(){
    super();
    this.state={
      username: "",
      password: "",
      name: "",
      email: "",
      phoneNumber: ""
    }
  }

  register(){
    Alert.alert(
  "Register",
  "Register button pressed!",
  [{ text: "yay" }] // Button
);
  }

  onPress() {
  //   fetch('/register', {
  //   method: 'POST',
  //   headers: {
  //       "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     name: this.state.name,
  //     username: this.state.username,
  //     password: this.state.password,
  //     email: this.state.email,
  //     phoneNumber: this.state.phoneNumber,
  //   })
  // })
  //   .then(
  this.props.navigation.navigate('Survey', {userInfo: this.state})
  // );
  }

  render() {
    return (
      <View >
        <LinearGradient colors={["#7fd64d", "#4dd6ba"]} >
          <View style={styles.container}>
            <Text style={styles.textBig}>Register</Text>
            <TextInput
              style={styles.textInp}
              placeholder=" Name"
              onChangeText={text => this.setState({ name: text })}
            />
            <TextInput
              style={styles.textInp}
              placeholder=" Email"
              onChangeText={text => this.setState({ email: text })}
            />
            <TextInput
              style={styles.textInp}
              placeholder=" Phone Number"
              onChangeText={text => this.setState({ phoneNumber: text })}
            />
            <TextInput
              style={styles.textInp}
              placeholder=" Username"
              onChangeText={text => this.setState({ username: text })}
            />
            <TextInput
              style={styles.textInp}
              placeholder=" Password"
              onChangeText={text => this.setState({ password: text })}
            />
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={this.onPress.bind(this)}
              >

                <Text style={styles.buttonLabel}>Register</Text>
              </TouchableOpacity>
          </View>
        </View>
    </LinearGradient>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop:100,
    flex: 1,
    //backgroundColor: '#d6f2c6',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  textBig: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Cochin'
  },
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'white',
    width: 200
  },
  buttonLabel: {
    textAlign: 'center',
    fontSize: 20
  },
  textInp: {
    margin: 15,
    width: 300,
    height: 40,
    borderColor: "#97ad8a",
    borderWidth: 2
  }

});
