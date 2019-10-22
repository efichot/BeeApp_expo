import React from "react";
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default class SignIn extends React.Component<any, any> {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      appLogoViewScale: new Animated.Value(-1),
      usernameViewOpacity: new Animated.Value(-1),
      usernameViewTranslateY: new Animated.Value(-1),
      passwordViewOpacity: new Animated.Value(-1),
      passwordViewTranslateY: new Animated.Value(-1),
      emailAddressViewOpacity: new Animated.Value(-1),
      emailAddressViewTranslateY: new Animated.Value(-1),
      btnGetStartedButtonOpacity: new Animated.Value(-1),
      btnGetStartedButtonTranslateY: new Animated.Value(-1)
    };
  }

  componentDidMount() {
    this.startAnimationOne();
  }

  onBtnGetStartedPressed = () => {
    const { navigate } = this.props.navigation;

    navigate("UntitledFour");
  };

  startAnimationOne() {
    // Set animation initial values to all animated properties
    this.state.appLogoViewScale.setValue(0);
    this.state.usernameViewOpacity.setValue(0);
    this.state.usernameViewTranslateY.setValue(0);
    this.state.passwordViewOpacity.setValue(0);
    this.state.passwordViewTranslateY.setValue(0);
    this.state.emailAddressViewOpacity.setValue(0);
    this.state.emailAddressViewTranslateY.setValue(0);
    this.state.btnGetStartedButtonOpacity.setValue(0);
    this.state.btnGetStartedButtonTranslateY.setValue(0);

    // Configure animation and trigger
    Animated.parallel([
      Animated.parallel([
        Animated.timing(this.state.appLogoViewScale, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(this.state.usernameViewOpacity, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(this.state.usernameViewTranslateY, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(this.state.passwordViewOpacity, {
          duration: 900,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(this.state.passwordViewTranslateY, {
          duration: 900,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(this.state.emailAddressViewOpacity, {
          duration: 1300,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(this.state.emailAddressViewTranslateY, {
          duration: 1300,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(this.state.btnGetStartedButtonOpacity, {
          duration: 1500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(this.state.btnGetStartedButtonTranslateY, {
          duration: 1500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ])
    ]).start();
  }

  render() {
    return (
      <View style={styles.signInView}>
        <Animated.View
          style={[
            {
              transform: [
                {
                  scale: this.state.appLogoViewScale.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [1, 0, 1]
                  })
                }
              ]
            },
            styles.appLogoViewAnimated
          ]}
        >
          <View style={styles.appLogoView}>
            <Image
              source={require("./../../assets/images/rectangle-copy-4.png")}
              style={styles.rectangleCopy4Image}
            />
            <Image
              source={require("./../../assets/images/rectangle-3.png")}
              style={styles.rectangleImage}
            />
          </View>
        </Animated.View>
        <Animated.View
          style={[
            {
              opacity: this.state.usernameViewOpacity.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [1, 0, 1]
              }),
              transform: [
                {
                  translateY: this.state.usernameViewTranslateY.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0.01, 200, 0]
                  })
                }
              ]
            },
            styles.usernameViewAnimated
          ]}
        >
          <View style={styles.usernameView}>
            <Text style={styles.usernameText}>Username</Text>
            <View
              pointerEvents="box-none"
              style={{
                height: 45,
                marginTop: 14
              }}
            >
              <View style={styles.rectangleView} />
              <TextInput
                autoCorrect={false}
                style={styles.anggariskyTextInput}
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            {
              opacity: this.state.passwordViewOpacity.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [1, 0, 1]
              }),
              transform: [
                {
                  translateY: this.state.passwordViewTranslateY.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0.01, 200, 0]
                  })
                }
              ]
            },
            styles.passwordViewAnimated
          ]}
        >
          <View style={styles.passwordView}>
            <Text style={styles.passwordText}>Password</Text>
            <View
              pointerEvents="box-none"
              style={{
                height: 45,
                marginTop: 14
              }}
            >
              <View style={styles.rectangleTwoView} />
              <TextInput
                autoCorrect={false}
                secureTextEntry={true}
                style={styles.iscomicsansgoodTextInput}
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            {
              opacity: this.state.emailAddressViewOpacity.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [1, 0, 1]
              }),
              transform: [
                {
                  translateY: this.state.emailAddressViewTranslateY.interpolate(
                    {
                      inputRange: [-1, 0, 1],
                      outputRange: [0.01, 200, 0]
                    }
                  )
                }
              ]
            },
            styles.emailAddressViewAnimated
          ]}
        >
          <View style={styles.emailAddressView}>
            <Text style={styles.emailAddressText}>Email Address</Text>
            <View
              pointerEvents="box-none"
              style={{
                height: 45,
                marginTop: 14
              }}
            >
              <View style={styles.rectangleThreeView} />
              <TextInput autoCorrect={false} style={styles.aBcdComTextInput} />
            </View>
          </View>
        </Animated.View>
        <View
          style={{
            flex: 1
          }}
        />
        <Animated.View
          style={[
            {
              opacity: this.state.btnGetStartedButtonOpacity.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [1, 0, 1]
              }),
              transform: [
                {
                  translateY: this.state.btnGetStartedButtonTranslateY.interpolate(
                    {
                      inputRange: [-1, 0, 1],
                      outputRange: [0.01, 200, 0]
                    }
                  )
                }
              ]
            },
            styles.btnGetStartedButtonAnimated
          ]}
        >
          <TouchableOpacity
            onPress={this.onBtnGetStartedPressed}
            style={styles.btnGetStartedButton}
          >
            <Text style={styles.btnGetStartedButtonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signInView: {
    backgroundColor: "rgb(27, 19, 62)",
    flex: 1,
    alignItems: "center"
  },
  appLogoViewAnimated: {
    alignSelf: "flex-start",
    width: 60,
    height: 80,
    marginLeft: 20,
    marginTop: 8
  },
  appLogoView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%"
  },
  rectangleCopy4Image: {
    resizeMode: "center",
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    right: -0,
    top: 20,
    height: 60
  },
  rectangleImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 59
  },
  usernameView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%"
  },
  usernameViewAnimated: {
    width: 312,
    height: 77,
    marginTop: 68
  },
  usernameText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    alignSelf: "flex-start"
  },
  rectangleView: {
    backgroundColor: "rgb(43, 32, 89)",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgb(92, 80, 144)",
    borderStyle: "solid",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 45
  },
  anggariskyTextInput: {
    backgroundColor: "transparent",
    padding: 0,
    color: "rgb(92, 80, 144)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    position: "absolute",
    left: 13,
    width: 288,
    top: 13,
    height: 18
  },
  passwordViewAnimated: {
    width: 312,
    height: 77,
    marginTop: 30
  },
  passwordView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%"
  },
  passwordText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    alignSelf: "flex-start"
  },
  rectangleTwoView: {
    backgroundColor: "rgb(43, 32, 89)",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgb(92, 80, 144)",
    borderStyle: "solid",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 45
  },
  iscomicsansgoodTextInput: {
    backgroundColor: "transparent",
    padding: 0,
    color: "rgb(92, 80, 144)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    position: "absolute",
    left: 13,
    width: 289,
    top: 13,
    height: 18
  },
  emailAddressView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%"
  },
  emailAddressViewAnimated: {
    width: 312,
    height: 77,
    marginTop: 30
  },
  emailAddressText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    alignSelf: "flex-start"
  },
  rectangleThreeView: {
    backgroundColor: "rgb(43, 32, 89)",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "rgb(92, 80, 144)",
    borderStyle: "solid",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 45
  },
  aBcdComTextInput: {
    backgroundColor: "transparent",
    padding: 0,
    color: "rgb(92, 80, 144)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    position: "absolute",
    left: 13,
    width: 285,
    top: 13,
    height: 18
  },
  btnGetStartedButtonText: {
    color: "white",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  btnGetStartedButtonAnimated: {
    width: 270,
    height: 45,
    marginBottom: 70
  },
  btnGetStartedButton: {
    backgroundColor: "rgb(0, 145, 255)",
    borderRadius: 22.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: "100%",
    height: "100%"
  },
  btnGetStartedButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  }
});
