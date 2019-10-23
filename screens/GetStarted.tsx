import React from "react";
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default class GetStarted extends React.Component<any, any> {
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
      appLogoViewTranslateY: new Animated.Value(-1),
      appLogoViewOpacity: new Animated.Value(-1),
      sendMoneyToFriendTextTranslateY: new Animated.Value(-1),
      sendMoneyToFriendTextOpacity: new Animated.Value(-1),
      btnGetStartedButtonTranslateY: new Animated.Value(-1),
      btnGetStartedButtonOpacity: new Animated.Value(-1)
    };
  }

  componentDidMount() {
    this.startAnimationOne();
  }

  onBtnGetStartedPressed = () => {
    const { navigate } = this.props.navigation;

    navigate("SignIn");
  };

  startAnimationOne() {
    // Set animation initial values to all animated properties
    this.state.appLogoViewTranslateY.setValue(0);
    this.state.appLogoViewOpacity.setValue(0);
    this.state.btnGetStartedButtonTranslateY.setValue(0);
    this.state.btnGetStartedButtonOpacity.setValue(0);
    this.state.sendMoneyToFriendTextTranslateY.setValue(0);
    this.state.sendMoneyToFriendTextOpacity.setValue(0);

    // Configure animation and trigger
    Animated.parallel([
      Animated.parallel([
        Animated.timing(this.state.appLogoViewTranslateY, {
          duration: 450,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(this.state.appLogoViewOpacity, {
          duration: 450,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(this.state.btnGetStartedButtonTranslateY, {
          duration: 1400,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(this.state.btnGetStartedButtonOpacity, {
          duration: 1400,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(this.state.sendMoneyToFriendTextTranslateY, {
          duration: 950,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(this.state.sendMoneyToFriendTextOpacity, {
          duration: 950,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ])
    ]).start();
  }

  render() {
    return (
      <View style={styles.getStartedView}>
        <Animated.View
          style={[
            {
              opacity: this.state.appLogoViewOpacity.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [1, 0, 1]
              }),
              transform: [
                {
                  translateY: this.state.appLogoViewTranslateY.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0.01, -200, 0]
                  })
                }
              ]
            },
            styles.appLogoViewAnimated
          ]}
        >
          <View style={styles.appLogoView}>
            <Image
              source={require("./../../assets/images/rectangle-copy-4-2.png")}
              style={styles.rectangleCopy4Image}
            />
            <Image
              source={require("./../../assets/images/rectangle.png")}
              style={styles.rectangleImage}
            />
          </View>
        </Animated.View>
        <Animated.View
          style={[
            {
              opacity: this.state.sendMoneyToFriendTextOpacity.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [1, 0, 1]
              }),
              transform: [
                {
                  translateY: this.state.sendMoneyToFriendTextTranslateY.interpolate(
                    {
                      inputRange: [-1, 0, 1],
                      outputRange: [0.01, 200, 0]
                    }
                  )
                }
              ]
            },
            styles.sendMoneyToFriendTextAnimated
          ]}
        >
          <Text style={styles.sendMoneyToFriendText}>
            Send money to friends{"\n"}and family much easier
          </Text>
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
            <Text style={styles.btnGetStartedButtonText}>GET STARTED</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  getStartedView: {
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
    width: 119,
    height: 159,
    marginTop: 110
  },
  rectangleCopy4Image: {
    resizeMode: "center",
    backgroundColor: "transparent",
    position: "absolute",
    left: 0,
    right: -0,
    top: 39,
    height: 119
  },
  rectangleImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    position: "absolute",
    left: 1,
    right: 1,
    top: 1,
    height: 118
  },
  sendMoneyToFriendText: {
    backgroundColor: "transparent",
    color: "white",
    fontFamily: ".AppleSystemUIFont",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    lineHeight: 32
  },
  sendMoneyToFriendTextAnimated: {
    marginTop: 75
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
  btnGetStartedButtonAnimated: {
    width: 270,
    height: 45,
    marginBottom: 70
  },
  btnGetStartedButtonText: {
    color: "white",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center"
  },
  btnGetStartedButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  }
});
