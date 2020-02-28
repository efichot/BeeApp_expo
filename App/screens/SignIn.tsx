import React, { useEffect } from "react";
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

const SignIn = ({ navigation }) => {
  const appLogoViewScale = new Animated.Value(-1);
  const btnSignInButtonTranslateY = new Animated.Value(-1);
  const btnSignInButtonOpacity = new Animated.Value(-1);
  const emailAddressViewTranslateY = new Animated.Value(-1);
  const emailAddressViewOpacity = new Animated.Value(-1);
  const passwordViewTranslateY = new Animated.Value(-1);
  const passwordViewOpacity = new Animated.Value(-1);
  const btnSignUpButtonTranslateY = new Animated.Value(-1);
  const btnSignUpButtonOpacity = new Animated.Value(-1);

  useEffect(() => {
    startAnimationOne();
  }, []);

  const onBtnGetStartedPressed = () => {
    navigation.navigate("App");
  };

  const onBtnGetStartedTwoPressed = () => {
    navigation.navigate("SignUp");
  };

  const startAnimationOne = () => {
    // Set animation initial values to all animated properties
    appLogoViewScale.setValue(0);
    emailAddressViewTranslateY.setValue(0);
    emailAddressViewOpacity.setValue(0);
    passwordViewTranslateY.setValue(0);
    passwordViewOpacity.setValue(0);
    btnSignInButtonTranslateY.setValue(0);
    btnSignInButtonOpacity.setValue(0);
    btnSignUpButtonTranslateY.setValue(0);
    btnSignUpButtonOpacity.setValue(0);

    // Configure animation and trigger
    Animated.parallel([
      Animated.parallel([
        Animated.timing(appLogoViewScale, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(emailAddressViewTranslateY, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(emailAddressViewOpacity, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(passwordViewTranslateY, {
          duration: 850,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(passwordViewOpacity, {
          duration: 850,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(btnSignInButtonTranslateY, {
          duration: 1200,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(btnSignInButtonOpacity, {
          duration: 1200,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(btnSignUpButtonTranslateY, {
          duration: 1550,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(btnSignUpButtonOpacity, {
          duration: 1550,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ])
    ]).start();
  };

  return (
    <View style={styles.signInView}>
      <Animated.View
        style={[
          {
            transform: [
              {
                scale: appLogoViewScale.interpolate({
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
            opacity: emailAddressViewOpacity.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, 1]
            }),
            transform: [
              {
                translateY: emailAddressViewTranslateY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0.01, 200, 0]
                })
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
              alignSelf: "stretch",
              height: 45,
              marginTop: 13
            }}
          >
            <View style={styles.rectangleView} />
            <TextInput
              autoCorrect={false}
              placeholder="a@bcd.com"
              style={styles.aBcdComTextInput}
            />
          </View>
        </View>
      </Animated.View>
      <Animated.View
        style={[
          {
            opacity: passwordViewOpacity.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, 1]
            }),
            transform: [
              {
                translateY: passwordViewTranslateY.interpolate({
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
              alignSelf: "stretch",
              height: 45,
              marginTop: 13
            }}
          >
            <View style={styles.rectangleTwoView} />
            <TextInput
              autoCorrect={false}
              placeholder="iscomicsansgood"
              secureTextEntry={true}
              style={styles.iscomicsansgoodTextInput}
            />
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
            opacity: btnSignInButtonOpacity.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, 1]
            }),
            transform: [
              {
                translateY: btnSignInButtonTranslateY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0.01, 200, 0]
                })
              }
            ]
          },
          styles.btnSignInButtonAnimated
        ]}
      >
        <TouchableOpacity
          onPress={onBtnGetStartedPressed}
          style={styles.btnSignInButton}
        >
          <Text style={styles.btnSignInButtonText}>SIGN IN</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          {
            opacity: btnSignUpButtonOpacity.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, 1]
            }),
            transform: [
              {
                translateY: btnSignUpButtonTranslateY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0.01, 200, 0]
                })
              }
            ]
          },
          styles.btnSignUpButtonAnimated
        ]}
      >
        <TouchableOpacity
          onPress={onBtnGetStartedTwoPressed}
          style={styles.btnSignUpButton}
        >
          <Text style={styles.btnSignUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SignIn;

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
  emailAddressView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%"
  },
  emailAddressViewAnimated: {
    width: 312,
    height: 77,
    marginTop: 194
  },
  emailAddressText: {
    color: "white",
    fontFamily: "Montserrat-Light",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
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
  aBcdComTextInput: {
    color: "rgb(92, 80, 144)",
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    padding: 0,
    position: "absolute",
    left: 13,
    width: 293,
    top: 13,
    height: 19
  },
  passwordViewAnimated: {
    width: 312,
    height: 77,
    marginTop: 15
  },
  passwordView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    alignItems: "flex-start"
  },
  passwordText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: "Montserrat-Light",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left"
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
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    position: "absolute",
    left: 13,
    width: 291,
    top: 13,
    height: 19
  },
  btnSignInButtonText: {
    color: "white",
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  btnSignInButton: {
    backgroundColor: "rgb(0, 145, 255)",
    borderRadius: 22.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: "100%",
    height: "100%"
  },
  btnSignInButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  btnSignInButtonAnimated: {
    width: 270,
    height: 45,
    marginBottom: 6
  },
  btnSignUpButtonAnimated: {
    width: 270,
    height: 45,
    marginBottom: 19
  },
  btnSignUpButtonText: {
    color: "white",
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  btnSignUpButton: {
    backgroundColor: "rgb(153, 161, 168)",
    borderRadius: 22.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: "100%",
    height: "100%"
  },
  btnSignUpButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  }
});
