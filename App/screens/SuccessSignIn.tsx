import React, { useEffect } from "react";
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const SuccessSignIn = ({ navigation }) => {
  const viewViewTranslateY = new Animated.Value(-1);
  const viewViewOpacity = new Animated.Value(-1);
  const iconUserViewTranslateY = new Animated.Value(-1);
  const iconUserViewOpacity = new Animated.Value(-1);
  const btnDashboardButtonTranslateY = new Animated.Value(-1);
  const btnDashboardButtonOpacity = new Animated.Value(-1);

  useEffect(() => {
    startAnimationOne();
  }, []);

  const onBtnDashboardPressed = () => navigation.navigate("MyDashboard");

  const startAnimationOne = () => {
    // Set animation initial values to all animated properties
    iconUserViewTranslateY.setValue(0);
    iconUserViewOpacity.setValue(0);
    viewViewTranslateY.setValue(0);
    viewViewOpacity.setValue(0);
    btnDashboardButtonTranslateY.setValue(0);
    btnDashboardButtonOpacity.setValue(0);

    // Configure animation and trigger
    Animated.parallel([
      Animated.parallel([
        Animated.timing(iconUserViewTranslateY, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(iconUserViewOpacity, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(viewViewTranslateY, {
          duration: 850,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(viewViewOpacity, {
          duration: 850,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(btnDashboardButtonTranslateY, {
          duration: 1350,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(btnDashboardButtonOpacity, {
          duration: 1350,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ])
    ]).start();
  };

  return (
    <View style={styles.successSignInView}>
      <Animated.View
        style={[
          {
            opacity: iconUserViewOpacity.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, 1]
            }),
            transform: [
              {
                translateY: iconUserViewTranslateY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0.01, -200, 0]
                })
              }
            ]
          },
          styles.iconUserViewAnimated
        ]}
      >
        <View style={styles.iconUserView}>
          <Image
            source={require("./../../assets/images/oval-4.png")}
            style={styles.ovalImage}
          />
        </View>
      </Animated.View>
      <Animated.View
        style={[
          {
            opacity: viewViewOpacity.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, 1]
            }),
            transform: [
              {
                translateY: viewViewTranslateY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0.01, 200, 0]
                })
              }
            ]
          },
          styles.viewViewAnimated
        ]}
      >
        <View style={styles.viewView}>
          <Text style={styles.congratulationsText}>Congratulations</Text>
          <Text style={styles.yourAccountHasBeeText}>
            Your account has been{"\n"}created now
          </Text>
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
            opacity: btnDashboardButtonOpacity.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, 1]
            }),
            transform: [
              {
                translateY: btnDashboardButtonTranslateY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0.01, 200, 0]
                })
              }
            ]
          },
          styles.btnDashboardButtonAnimated
        ]}
      >
        <TouchableOpacity
          onPress={onBtnDashboardPressed}
          style={styles.btnDashboardButton}
        >
          <Text style={styles.btnDashboardButtonText}>MY DASHBOARD</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SuccessSignIn;

const styles = StyleSheet.create({
  successSignInView: {
    backgroundColor: "rgb(27, 19, 62)",
    flex: 1,
    alignItems: "center"
  },
  iconUserView: {
    backgroundColor: "transparent",
    borderRadius: 68,
    borderWidth: 1.2,
    borderColor: "rgb(57, 51, 80)",
    borderStyle: "solid",
    width: "100%",
    height: "100%",
    justifyContent: "center"
  },
  iconUserViewAnimated: {
    width: 136,
    height: 136,
    marginTop: 103
  },
  ovalImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: null,
    height: 114,
    marginLeft: 11,
    marginRight: 12
  },
  viewView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    alignItems: "center"
  },
  viewViewAnimated: {
    width: 155,
    height: 32,
    marginTop: 56
  },
  congratulationsText: {
    color: "white",
    fontFamily: ".AppleSystemUIFont",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    lineHeight: 32,
    backgroundColor: "transparent"
  },
  yourAccountHasBeeText: {
    color: "white",
    fontFamily: ".AppleSystemUIFont",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    lineHeight: 32,
    backgroundColor: "transparent",
    marginTop: 17,
    width: "150%"
  },
  btnDashboardButtonAnimated: {
    width: 270,
    height: 45,
    marginBottom: 70
  },
  btnDashboardButtonText: {
    color: "white",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  btnDashboardButton: {
    backgroundColor: "rgb(0, 145, 255)",
    borderRadius: 22.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    width: "100%",
    height: "100%"
  },
  btnDashboardButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  }
});
