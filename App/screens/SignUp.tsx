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

const SignUp = ({ navigation }) => {
  const appLogoViewScale = new Animated.Value(-1);
  const usernameViewTranslateY = new Animated.Value(-1);
  const usernameViewOpacity = new Animated.Value(-1);
  const passwordViewTranslateY = new Animated.Value(-1);
  const passwordViewOpacity = new Animated.Value(-1);
  const emailAddressViewTranslateY = new Animated.Value(-1);
  const emailAddressViewOpacity = new Animated.Value(-1);
  const btnSignUpButtonTranslateY = new Animated.Value(-1);
  const btnSignUpButtonOpacity = new Animated.Value(-1);
  const btnSignInButtonTranslateY = new Animated.Value(-1);
  const btnSignInButtonOpacity = new Animated.Value(-1);
  const btnSignUpWithGoogleButtonTranslateY = new Animated.Value(-1);
  const btnSignUpWithGoogleButtonOpacity = new Animated.Value(-1);

  useEffect(() => {
    startAnimationOne();
  }, []);

  const onBtnGetStartedPressed = () => {
    navigation.navigate("App");
  };

  const onBtnGetStartedTwoPressed = () => {
    navigation.navigate("SignIn");
  };

  const onBtnGetStartedThreePressed = () => {};

  const startAnimationOne = () => {
    // Set animation initial values to all animated properties
    appLogoViewScale.setValue(0);
    usernameViewTranslateY.setValue(0);
    usernameViewOpacity.setValue(0);
    passwordViewTranslateY.setValue(0);
    passwordViewOpacity.setValue(0);
    emailAddressViewTranslateY.setValue(0);
    emailAddressViewOpacity.setValue(0);
    btnSignUpButtonTranslateY.setValue(0);
    btnSignUpButtonOpacity.setValue(0);
    btnSignInButtonTranslateY.setValue(0);
    btnSignInButtonOpacity.setValue(0);
    btnSignUpWithGoogleButtonTranslateY.setValue(0);
    btnSignUpWithGoogleButtonOpacity.setValue(0);

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
        Animated.timing(usernameViewTranslateY, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(usernameViewOpacity, {
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
        Animated.timing(emailAddressViewTranslateY, {
          duration: 1150,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(emailAddressViewOpacity, {
          duration: 1150,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(btnSignUpButtonTranslateY, {
          duration: 1450,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(btnSignUpButtonOpacity, {
          duration: 1450,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(btnSignInButtonTranslateY, {
          duration: 1650,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(btnSignInButtonOpacity, {
          duration: 1650,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(btnSignUpWithGoogleButtonTranslateY, {
          duration: 1900,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(btnSignUpWithGoogleButtonOpacity, {
          duration: 1900,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ])
    ]).start();
  };

  return (
    <View style={styles.signUpView}>
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
            opacity: usernameViewOpacity.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, 1]
            }),
            transform: [
              {
                translateY: usernameViewTranslateY.interpolate({
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
              alignSelf: "stretch",
              height: 45,
              marginTop: 13
            }}
          >
            <View style={styles.rectangleView} />
            <TextInput
              autoCorrect={false}
              placeholder="anggarisky"
              style={styles.anggariskyTextInput}
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
            <View style={styles.rectangleThreeView} />
            <TextInput
              autoCorrect={false}
              placeholder="a@bcd.com"
              style={styles.aBcdComTextInput}
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
          onPress={onBtnGetStartedPressed}
          style={styles.btnSignUpButton}
        >
          <Text style={styles.btnSignUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </Animated.View>
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
          onPress={onBtnGetStartedTwoPressed}
          style={styles.btnSignInButton}
        >
          <Text style={styles.btnSignInButtonText}>SIGN IN</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          {
            opacity: btnSignUpWithGoogleButtonOpacity.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, 1]
            }),
            transform: [
              {
                translateY: btnSignUpWithGoogleButtonTranslateY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0.01, 200, 0]
                })
              }
            ]
          },
          styles.btnSignUpWithGoogleButtonAnimated
        ]}
      >
        <TouchableOpacity
          onPress={onBtnGetStartedThreePressed}
          style={styles.btnSignUpWithGoogleButton}
        >
          <Text style={styles.btnSignUpWithGoogleButtonText}>
            SIGN UP WITH GOOGLE
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  signUpView: {
    backgroundColor: "rgb(27, 19, 62)",
    flex: 1,
    alignItems: "center"
  },
  appLogoView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%"
  },
  appLogoViewAnimated: {
    alignSelf: "flex-start",
    width: 60,
    height: 80,
    marginLeft: 20,
    marginTop: 8
  },
  rectangleCopy4Image: {
    backgroundColor: "transparent",
    resizeMode: "center",
    position: "absolute",
    left: 0,
    right: -0,
    top: 20,
    height: 60
  },
  rectangleImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 59
  },
  usernameView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    alignItems: "flex-start"
  },
  usernameViewAnimated: {
    width: 312,
    height: 77,
    marginTop: 68
  },
  usernameText: {
    color: "white",
    fontFamily: "Montserrat-Light",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent"
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
    width: 286,
    top: 13,
    height: 19
  },
  passwordView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    alignItems: "flex-start"
  },
  passwordViewAnimated: {
    width: 312,
    height: 77,
    marginTop: 30
  },
  passwordText: {
    color: "white",
    fontFamily: "Montserrat-Light",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent"
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
    width: 287,
    top: 13,
    height: 19
  },
  emailAddressView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    alignItems: "flex-start"
  },
  emailAddressViewAnimated: {
    width: 312,
    height: 77,
    marginTop: 30
  },
  emailAddressText: {
    color: "white",
    fontFamily: "Montserrat-Light",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent"
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
    width: 291,
    top: 13,
    height: 19
  },
  btnSignUpButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  btnSignUpButton: {
    backgroundColor: "rgb(0, 145, 255)",
    borderRadius: 22.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: "100%",
    height: "100%"
  },
  btnSignUpButtonAnimated: {
    width: 270,
    height: 45,
    marginBottom: 6
  },
  btnSignUpButtonText: {
    color: "white",
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  btnSignInButton: {
    backgroundColor: "rgb(153, 161, 168)",
    borderRadius: 22.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: "100%",
    height: "100%"
  },
  btnSignInButtonText: {
    color: "white",
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  btnSignInButtonAnimated: {
    width: 270,
    height: 45,
    marginBottom: 6
  },
  btnSignInButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  btnSignUpWithGoogleButtonAnimated: {
    width: 270,
    height: 45,
    marginBottom: 18
  },
  btnSignUpWithGoogleButtonText: {
    color: "white",
    fontFamily: "Montserrat-Medium",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  btnSignUpWithGoogleButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  btnSignUpWithGoogleButton: {
    backgroundColor: "rgb(255, 0, 76)",
    borderRadius: 22.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: "100%",
    height: "100%"
  }
});
