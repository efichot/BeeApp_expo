import React, { useEffect } from "react";
import {
  Animated,
  Easing,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useNavigation } from "react-navigation-hooks";
import IconDrawer from "../components/IconDrawer";
import LateralNav from "../components/LateralNav";

const Contacts = () => {
  const { navigate } = useNavigation();
  const headerViewTranslateY = new Animated.Value(-1);
  const headerViewOpacity = new Animated.Value(-1);
  const friendsScrollViewTranslateY = new Animated.Value(-1);
  const friendsScrollViewOpacity = new Animated.Value(-1);

  const contacts = [
    {
      fullName: "Random",
      pseudo: "@paul",
      image: require("./../../assets/images/user-pic-2.png")
    },
    {
      fullName: "Pierre",
      pseudo: "@pierre",
      image: require("./../../assets/images/user-pic-3.png")
    },
    {
      fullName: "Christophe",
      pseudo: "@christophe",
      image: require("./../../assets/images/user-pic-4.png")
    },
    {
      fullName: "Random2",
      pseudo: "@paul",
      image: require("./../../assets/images/user-pic-5.png")
    },
    {
      fullName: "Random3",
      pseudo: "@random2",
      image: require("./../../assets/images/user-pic-6.png")
    },
    {
      fullName: "Fiona",
      pseudo: "@fionafy",
      image: require("./../../assets/images/user-pic-7.png")
    },
    {
      fullName: "Anna",
      pseudo: "@abell",
      image: require("./../../assets/images/user-pic-8.png")
    },
    {
      fullName: "Fiona2",
      pseudo: "@fionafy",
      image: require("./../../assets/images/user-pic-9.png")
    }
  ];

  useEffect(() => {
    startAnimationOne();
  }, []);

  const onBtnSendPressed = () => {
    navigate("MyDashboard");
  };

  const startAnimationOne = () => {
    // Set animation initial values to all animated properties
    headerViewTranslateY.setValue(0);
    headerViewOpacity.setValue(0);
    friendsScrollViewTranslateY.setValue(0);
    friendsScrollViewOpacity.setValue(0);

    // Configure animation and trigger
    Animated.parallel([
      Animated.parallel([
        Animated.timing(headerViewTranslateY, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(headerViewOpacity, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(friendsScrollViewTranslateY, {
          duration: 1000,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(friendsScrollViewOpacity, {
          duration: 1000,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ])
    ]).start();
  };

  return (
    <View style={styles.contactsView}>
      <Animated.View
        style={[
          {
            opacity: headerViewOpacity.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, 1]
            }),
            transform: [
              {
                translateY: headerViewTranslateY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0.01, -200, 0]
                })
              }
            ]
          },
          styles.headerViewAnimated
        ]}
      >
        <View style={styles.headerView}>
          <View
            pointerEvents="box-none"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              justifyContent: "center"
            }}
          >
            <Text style={styles.myCoText}>My Contacts</Text>
          </View>
          <View
            pointerEvents="box-none"
            style={{
              position: "absolute",
              left: 59,
              width: 218,
              top: 9,
              height: 56,
              alignItems: "flex-start"
            }}
          >
            <IconDrawer>
              <Text style={styles.contactsText}>Contacts</Text>
            </IconDrawer>
            <Text style={styles.selectThemAndSendText}>
              Select them and send it
            </Text>
          </View>
        </View>
        <LateralNav />
      </Animated.View>
      <Animated.View
        style={[
          {
            opacity: friendsScrollViewOpacity.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, 1]
            }),
            transform: [
              {
                translateY: friendsScrollViewTranslateY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0.01, 200, 0]
                })
              }
            ]
          },
          styles.friendsScrollViewAnimated
        ]}
      >
        <ScrollView style={styles.friendsScrollView}>
          {contacts.map(({ fullName, pseudo, image }) => (
            <View style={styles.itemView} key={fullName}>
              <Image source={image} style={styles.userPicImage} />
              <View
                pointerEvents="box-none"
                style={{
                  alignSelf: "flex-start",
                  width: 64,
                  height: 35,
                  marginLeft: 11,
                  marginTop: 10,
                  alignItems: "flex-start"
                }}
              >
                <Text style={styles.annaBellaText}>{fullName}</Text>
                <Text style={styles.abelleText}>{pseudo}</Text>
              </View>
              <View
                style={{
                  flex: 1
                }}
              />
              <View style={styles.btnSendView}>
                <View style={styles.rectangleCopy2View} />
                <View
                  pointerEvents="box-none"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    justifyContent: "center"
                  }}
                >
                  <View style={styles.rectangleView} />
                </View>
                <TouchableOpacity
                  onPress={onBtnSendPressed}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    justifyContent: "center"
                  }}
                >
                  <Text style={styles.addText}>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

Contacts.navigationOptions = {
  header: null
};

export default Contacts;

const styles = StyleSheet.create({
  contactsView: {
    backgroundColor: "rgb(27, 19, 62)",
    flex: 1
  },
  headerView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%"
  },
  headerViewAnimated: {
    position: "absolute",
    left: 0,
    right: -89,
    top: 21,
    height: 120
  },
  myCoText: {
    color: "rgb(35, 27, 70)",
    fontFamily: ".AppleSystemUIFont",
    fontSize: 150,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    lineHeight: 120,
    paddingTop: 57,
    backgroundColor: "transparent",
    marginRight: 73,
    width: "200%"
  },
  contactsText: {
    color: "white",
    fontSize: 26,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "transparent",
    width: "100%"
  },
  selectThemAndSendText: {
    color: "rgb(116, 110, 145)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    width: 218,
    marginTop: 8
  },
  friendsScrollView: {
    backgroundColor: "white",
    borderRadius: 14,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 15,
    shadowOpacity: 1,
    width: "100%",
    height: "100%"
  },
  friendsScrollViewAnimated: {
    position: "absolute",
    alignSelf: "center",
    width: 319,
    top: 104,
    height: 533
  },
  itemView: {
    backgroundColor: "transparent",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    margin: 10
  },
  userPicImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 57,
    height: 54
  },
  annaBellaText: {
    backgroundColor: "transparent",
    color: "rgb(38, 34, 105)",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left"
  },
  abelleText: {
    backgroundColor: "transparent",
    color: "rgb(154, 154, 154)",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginTop: 3
  },
  btnSendView: {
    backgroundColor: "transparent",
    width: 61,
    height: 22
  },
  rectangleCopy2View: {
    backgroundColor: "rgb(0, 145, 255)",
    borderRadius: 3.87,
    shadowColor: "rgba(0, 145, 255, 0.35)",
    shadowRadius: 12,
    shadowOpacity: 1,
    position: "absolute",
    left: 9,
    right: 9,
    bottom: 0,
    height: 8
  },
  rectangleView: {
    backgroundColor: "rgb(0, 145, 255)",
    borderRadius: 10.87,
    height: 22
  },
  addText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    marginLeft: 18,
    marginRight: 18
  }
});
