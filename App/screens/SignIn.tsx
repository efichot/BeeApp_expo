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
import { useNavigation } from "react-navigation-hooks";

const SignIn = () => {
  const { navigate } = useNavigation();
  const appLogoViewScale = new Animated.Value(-1);
  const usernameViewOpacity = new Animated.Value(-1);
  const usernameViewTranslateY = new Animated.Value(-1);
  const passwordViewOpacity = new Animated.Value(-1);
  const passwordViewTranslateY = new Animated.Value(-1);
  const emailAddressViewOpacity = new Animated.Value(-1);
  const emailAddressViewTranslateY = new Animated.Value(-1);
  const btnGetStartedButtonOpacity = new Animated.Value(-1);
  const btnGetStartedButtonTranslateY = new Animated.Value(-1);

  useEffect(() => {
    startAnimationOne();
  }, []);

  const onBtnGetStartedPressed = () => navigate("UntitledFour");

  const startAnimationOne = () => {
    // Set animation initial values to all animated properties
    appLogoViewScale.setValue(0);
    usernameViewOpacity.setValue(0);
    usernameViewTranslateY.setValue(0);
    passwordViewOpacity.setValue(0);
    passwordViewTranslateY.setValue(0);
    emailAddressViewOpacity.setValue(0);
    emailAddressViewTranslateY.setValue(0);
    btnGetStartedButtonOpacity.setValue(0);
    btnGetStartedButtonTranslateY.setValue(0);

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
        Animated.timing(usernameViewOpacity, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(usernameViewTranslateY, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(passwordViewOpacity, {
          duration: 900,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(passwordViewTranslateY, {
          duration: 900,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(emailAddressViewOpacity, {
          duration: 1300,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(emailAddressViewTranslateY, {
          duration: 1300,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(btnGetStartedButtonOpacity, {
          duration: 1500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(btnGetStartedButtonTranslateY, {
          duration: 1500,
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
              height: 45,
              marginTop: 14
            }}
          >
            <View style={styles.rectangleView} />
            <TextInput autoCorrect={false} style={styles.anggariskyTextInput} />
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
            opacity: btnGetStartedButtonOpacity.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, 1]
            }),
            transform: [
              {
                translateY: btnGetStartedButtonTranslateY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0.01, 200, 0]
                })
              }
            ]
          },
          styles.btnGetStartedButtonAnimated
        ]}
      >
        <TouchableOpacity
          onPress={onBtnGetStartedPressed}
          style={styles.btnGetStartedButton}
        >
          <Text style={styles.btnGetStartedButtonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

SignIn.navigationOptions = {
  header: null
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
