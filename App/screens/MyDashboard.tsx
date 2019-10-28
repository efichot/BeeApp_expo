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
import { useNavigation } from "react-navigation-hooks";
import IconDrawer from "../components/IconDrawer";

const MyDashboard = () => {
  const { navigate } = useNavigation();
  const headerViewTranslateY = new Animated.Value(-1);
  const headerViewOpacity = new Animated.Value(-1);
  const cardViewTranslateY = new Animated.Value(-1);
  const cardViewOpacity = new Animated.Value(-1);
  const mainMenusTextTranslateY = new Animated.Value(-1);
  const mainMenusTextOpacity = new Animated.Value(-1);
  const itemMenuViewTranslateX = new Animated.Value(-1);
  const itemMenuTwoViewTranslateX = new Animated.Value(-1);
  const itemMenuThreeViewTranslateX = new Animated.Value(-1);
  const recentTransactionViewTranslateY = new Animated.Value(-1);
  const recentTransactionViewOpacity = new Animated.Value(-1);

  useEffect(() => {
    startAnimationTwo();
  }, []);

  const onaddContactPressed = () => navigate("Contacts");

  const startAnimationTwo = () => {
    // Set animation initial values to all animated properties
    headerViewTranslateY.setValue(0);
    headerViewOpacity.setValue(0);
    cardViewTranslateY.setValue(0);
    cardViewOpacity.setValue(0);
    recentTransactionViewTranslateY.setValue(0);
    recentTransactionViewOpacity.setValue(0);
    mainMenusTextTranslateY.setValue(0);
    mainMenusTextOpacity.setValue(0);
    itemMenuViewTranslateX.setValue(0);
    itemMenuThreeViewTranslateX.setValue(0);
    itemMenuTwoViewTranslateX.setValue(0);

    // Configure animation and trigger
    Animated.parallel([
      Animated.parallel([
        Animated.timing(headerViewTranslateY, {
          duration: 950,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(headerViewOpacity, {
          duration: 950,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(cardViewTranslateY, {
          duration: 650,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(cardViewOpacity, {
          duration: 650,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(recentTransactionViewTranslateY, {
          duration: 2000,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(recentTransactionViewOpacity, {
          duration: 2000,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(mainMenusTextTranslateY, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        }),
        Animated.timing(mainMenusTextOpacity, {
          duration: 500,
          easing: Easing.bezier(0.42, 0, 0.58, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(itemMenuViewTranslateX, {
          duration: 1450,
          easing: Easing.bezier(0, 0, 1, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(itemMenuThreeViewTranslateX, {
          duration: 1000,
          easing: Easing.bezier(0, 0, 1, 1),
          toValue: 1
        })
      ]),
      Animated.parallel([
        Animated.timing(itemMenuTwoViewTranslateX, {
          duration: 500,
          easing: Easing.bezier(0, 0, 1, 1),
          toValue: 1
        })
      ])
    ]).start();
  };

  return (
    <View style={styles.myDashboardView}>
      <View
        pointerEvents="box-none"
        style={{
          alignSelf: "stretch",
          height: 271,
          marginTop: 21
        }}
      >
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
              <Text style={styles.dashboardText}>Dashboard</Text>
            </View>
            <View
              pointerEvents="box-none"
              style={{
                position: "absolute",
                left: 59,
                width: 240,
                top: 9,
                height: 56,
                alignItems: "flex-start"
              }}
            >
              <IconDrawer>
                <Text style={styles.dashboardCopyText}>Dashboard</Text>
              </IconDrawer>
              <Text style={styles.allReportsUpdatedText}>
                All reports updated automatically
              </Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={[
            {
              opacity: cardViewOpacity.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [1, 0, 1]
              }),
              transform: [
                {
                  translateY: cardViewTranslateY.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0.01, -200, 0]
                  })
                }
              ]
            },
            styles.cardViewAnimated
          ]}
        >
          <View style={styles.cardView}>
            <View
              pointerEvents="box-none"
              style={{
                position: "absolute",
                left: 16,
                right: 16,
                top: 16,
                bottom: 16,
                alignItems: "flex-start"
              }}
            >
              <Text style={styles.us200381Text}>US$ </Text>
              <Text style={styles.textText}>+40%</Text>
              <View
                pointerEvents="box-none"
                style={{
                  alignSelf: "stretch",
                  height: 73,
                  marginTop: 13
                }}
              >
                <View
                  pointerEvents="box-none"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 12,
                    height: 61
                  }}
                >
                  <View style={styles.pathCopy2View} />
                  <View style={styles.pathCopyView} />
                  <View style={styles.pathView} />
                </View>
                <View
                  pointerEvents="box-none"
                  style={{
                    position: "absolute",
                    left: 10,
                    right: 17,
                    top: 0,
                    height: 73,
                    flexDirection: "row",
                    alignItems: "flex-start"
                  }}
                >
                  <View style={styles.rectangleCopy4View} />
                  <View style={styles.rectangleCopy5View} />
                  <View style={styles.rectangleCopy2View} />
                  <View
                    style={{
                      flex: 1
                    }}
                  />
                  <View style={styles.rectangleCopy3View} />
                  <View style={styles.rectangleCopyView} />
                  <View style={styles.rectangleView} />
                </View>
              </View>
              <View
                style={{
                  flex: 1
                }}
              />
              <View
                pointerEvents="box-none"
                style={{
                  alignSelf: "stretch",
                  height: 15,
                  marginLeft: 20,
                  marginRight: 30,
                  flexDirection: "row",
                  alignItems: "flex-end"
                }}
              >
                <Text style={styles.sunText}>Sun</Text>
                <View
                  style={{
                    flex: 1
                  }}
                />
                <Text style={styles.friText}>Fri</Text>
              </View>
            </View>
            <Text style={styles.thuText}>Thu</Text>
          </View>
        </Animated.View>
      </View>
      <View style={styles.mainMenusView}>
        <View
          pointerEvents="box-none"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 145,
            alignItems: "flex-start"
          }}
        >
          <Animated.View
            style={[
              {
                opacity: mainMenusTextOpacity.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [1, 0, 1]
                }),
                transform: [
                  {
                    translateY: mainMenusTextTranslateY.interpolate({
                      inputRange: [-1, 0, 1],
                      outputRange: [0.01, -200, 0]
                    })
                  }
                ]
              },
              styles.mainMenusTextAnimated
            ]}
          >
            <Text style={styles.mainMenusText}>Main Menus</Text>
          </Animated.View>
          <View
            pointerEvents="box-none"
            style={{
              alignSelf: "stretch",
              height: 110,
              marginTop: 17,
              flexDirection: "row",
              alignItems: "flex-start"
            }}
          >
            <Animated.View
              style={[
                {
                  transform: [
                    {
                      translateX: itemMenuViewTranslateX.interpolate({
                        inputRange: [-1, 0, 1],
                        outputRange: [0.01, -115, 0]
                      })
                    }
                  ]
                },
                styles.itemMenuViewAnimated
              ]}
            >
              <View style={styles.itemMenuView}>
                <View style={styles.iconView}>
                  <Text style={styles.creditCardSimpleLineIconsText}></Text>
                </View>
                <View
                  style={{
                    flex: 1
                  }}
                />
                <TouchableOpacity
                  onPress={onaddContactPressed}
                  style={styles.addContactButton}
                >
                  <Text style={styles.addContactButtonText}>
                    Add {"\n"}Contact
                  </Text>
                </TouchableOpacity>
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
                  transform: [
                    {
                      translateX: itemMenuTwoViewTranslateX.interpolate({
                        inputRange: [-1, 0, 1],
                        outputRange: [0.01, -336, 0]
                      })
                    }
                  ]
                },
                styles.itemMenuTwoViewAnimated
              ]}
            >
              <View style={styles.itemMenuTwoView}>
                <View style={styles.iconTwoView}>
                  <Text style={styles.briefcaseSimpleLineIconsText}></Text>
                </View>
                <View
                  style={{
                    flex: 1
                  }}
                />
                <Text style={styles.otherServicesText}>
                  Other{"\n"}Services
                </Text>
              </View>
            </Animated.View>
          </View>
        </View>
        <Animated.View
          style={[
            {
              transform: [
                {
                  translateX: itemMenuThreeViewTranslateX.interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [0.01, -225, 0]
                  })
                }
              ]
            },
            styles.itemMenuThreeViewAnimated
          ]}
        >
          <View style={styles.itemMenuThreeView}>
            <View style={styles.iconThreeView}>
              <Text style={styles.layersSimpleLineIconsText}></Text>
            </View>
            <View
              style={{
                flex: 1
              }}
            />
            <Text style={styles.makeReportsText}>Make{"\n"}Reports</Text>
          </View>
        </Animated.View>
      </View>
      <View
        style={{
          flex: 1
        }}
      />
      <Animated.View
        style={[
          {
            opacity: recentTransactionViewOpacity.interpolate({
              inputRange: [-1, 0, 1],
              outputRange: [1, 0, 1]
            }),
            transform: [
              {
                translateY: recentTransactionViewTranslateY.interpolate({
                  inputRange: [-1, 0, 1],
                  outputRange: [0.01, 200, 0]
                })
              }
            ]
          },
          styles.recentTransactionViewAnimated
        ]}
      >
        <View style={styles.recentTransactionView}>
          <Text style={styles.recentTransactionsText}>Recent Transactions</Text>
          <View style={styles.itemView}>
            <Image
              source={require("./../../assets/images/user-pic-2.png")}
              style={styles.userPicImage}
            />
            <View
              pointerEvents="box-none"
              style={{
                alignSelf: "flex-start",
                width: 87,
                height: 35,
                marginLeft: 8,
                alignItems: "flex-start"
              }}
            >
              <Text style={styles.juliaAmbaritaText}>Julia Ambarita</Text>
              <Text style={styles.idr209309Text}>+ IDR 209.309</Text>
            </View>
            <View
              style={{
                flex: 1
              }}
            />
            <Text style={styles.jan202019Text}>Jan 20, 2019</Text>
          </View>
          <View
            style={{
              flex: 1
            }}
          />
          <View style={styles.itemTwoView}>
            <Image
              source={require("./../../assets/images/user-pic-5.png")}
              style={styles.userPicTwoImage}
            />
            <View
              pointerEvents="box-none"
              style={{
                alignSelf: "flex-start",
                width: 73,
                height: 35,
                marginLeft: 8,
                alignItems: "flex-start"
              }}
            >
              <Text style={styles.aliFajarText}>Ali Fajar</Text>
              <Text style={styles.idr100000Text}>- IDR 100.000</Text>
            </View>
            <View
              style={{
                flex: 1
              }}
            />
            <Text style={styles.aug222018Text}>Aug 22, 2018</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

MyDashboard.navigationOptions = {
  header: null
};

export default MyDashboard;

const styles = StyleSheet.create({
  myDashboardView: {
    backgroundColor: "rgb(27, 19, 62)",
    flex: 1,
    alignItems: "center"
  },
  headerView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%"
  },
  headerViewAnimated: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 120
  },
  dashboardText: {
    color: "rgb(35, 27, 70)",
    fontFamily: ".AppleSystemUIFont",
    fontSize: 150,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    lineHeight: 120,
    paddingTop: 57,
    backgroundColor: "transparent",
    marginRight: 171,
    width: "200%"
  },
  dashboardCopyText: {
    color: "white",
    fontSize: 26,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: "transparent"
  },
  allReportsUpdatedText: {
    color: "rgb(116, 110, 145)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    marginTop: 8
  },
  cardView: {
    backgroundColor: "white",
    borderRadius: 14,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 15,
    shadowOpacity: 1,
    width: "100%",
    height: "100%"
  },
  cardViewAnimated: {
    position: "absolute",
    alignSelf: "center",
    width: 312,
    top: 83,
    height: 188
  },
  us200381Text: {
    color: "rgb(38, 34, 105)",
    fontFamily: ".AppleSystemUIFont",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent"
  },
  textText: {
    color: "rgb(26, 188, 156)",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    marginTop: 3
  },
  pathCopy2View: {
    backgroundColor: "rgb(245, 245, 245)",
    height: 1
  },
  pathCopyView: {
    backgroundColor: "rgb(245, 245, 245)",
    height: 1,
    marginTop: 29
  },
  pathView: {
    backgroundColor: "rgb(245, 245, 245)",
    height: 1,
    marginTop: 29
  },
  rectangleCopy4View: {
    backgroundColor: "rgb(252, 146, 157)",
    width: 20,
    height: 53,
    marginTop: 20
  },
  rectangleCopy5View: {
    backgroundColor: "rgb(148, 143, 254)",
    width: 20,
    height: 22,
    marginLeft: 2,
    marginTop: 51
  },
  rectangleCopy2View: {
    backgroundColor: "rgb(148, 143, 254)",
    width: 20,
    height: 47,
    marginLeft: 68,
    marginTop: 26
  },
  rectangleCopy3View: {
    backgroundColor: "rgb(253, 178, 156)",
    width: 20,
    height: 31,
    marginRight: 59,
    marginTop: 42
  },
  rectangleCopyView: {
    backgroundColor: "rgb(252, 146, 157)",
    width: 20,
    height: 47,
    marginRight: 2,
    marginTop: 26
  },
  rectangleView: {
    backgroundColor: "rgb(46, 203, 167)",
    width: 20,
    height: 73
  },
  sunText: {
    color: "rgb(169, 169, 169)",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent"
  },
  friText: {
    color: "rgb(169, 169, 169)",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    backgroundColor: "transparent"
  },
  thuText: {
    color: "rgb(169, 169, 169)",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "transparent",
    position: "absolute",
    alignSelf: "center",
    bottom: 16
  },
  mainMenusView: {
    backgroundColor: "transparent",
    width: 312,
    height: 145,
    marginTop: 24
  },
  mainMenusText: {
    color: "rgb(116, 110, 145)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent"
  },
  mainMenusTextAnimated: {},
  itemMenuView: {
    backgroundColor: "white",
    borderRadius: 14,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 15,
    shadowOpacity: 1,
    width: "100%",
    height: "100%"
  },
  itemMenuViewAnimated: {
    width: 90,
    height: 110
  },
  iconView: {
    backgroundColor: "rgb(204, 255, 243)",
    borderRadius: 20,
    alignSelf: "flex-start",
    width: 40,
    height: 40,
    marginLeft: 11,
    marginTop: 11,
    justifyContent: "center"
  },
  creditCardSimpleLineIconsText: {
    backgroundColor: "transparent",
    color: "rgb(26, 188, 156)",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginLeft: 11,
    marginRight: 8
  },
  addContactButtonImage: {
    resizeMode: "contain",
    marginRight: 10
  },
  addContactButton: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    height: 32,
    marginRight: 26,
    marginBottom: 10
  },
  addContactButtonText: {
    color: "rgb(38, 34, 105)",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left"
  },
  itemMenuTwoViewAnimated: {
    width: 90,
    height: 110
  },
  itemMenuTwoView: {
    backgroundColor: "white",
    borderRadius: 14,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 15,
    shadowOpacity: 1,
    width: "100%",
    height: "100%",
    alignItems: "flex-start"
  },
  iconTwoView: {
    backgroundColor: "rgb(196, 205, 255)",
    borderRadius: 20,
    width: 40,
    height: 40,
    marginLeft: 11,
    marginTop: 11,
    justifyContent: "center"
  },
  briefcaseSimpleLineIconsText: {
    backgroundColor: "transparent",
    color: "rgb(148, 143, 254)",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginLeft: 11,
    marginRight: 8
  },
  otherServicesText: {
    color: "rgb(38, 34, 105)",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    marginLeft: 11,
    marginBottom: 11
  },
  itemMenuThreeView: {
    backgroundColor: "white",
    borderRadius: 14,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowRadius: 15,
    shadowOpacity: 1,
    width: "100%",
    height: "100%",
    alignItems: "flex-start"
  },
  itemMenuThreeViewAnimated: {
    position: "absolute",
    alignSelf: "center",
    width: 90,
    top: 35,
    height: 110
  },
  iconThreeView: {
    backgroundColor: "rgb(255, 234, 228)",
    borderRadius: 20,
    width: 40,
    height: 40,
    marginLeft: 11,
    marginTop: 11,
    justifyContent: "center"
  },
  layersSimpleLineIconsText: {
    backgroundColor: "transparent",
    color: "rgb(253, 178, 156)",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginLeft: 11,
    marginRight: 8
  },
  makeReportsText: {
    color: "rgb(38, 34, 105)",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    marginLeft: 11,
    marginBottom: 11
  },
  recentTransactionView: {
    backgroundColor: "transparent",
    width: "100%",
    height: "100%"
  },
  recentTransactionViewAnimated: {
    width: 312,
    height: 131,
    marginBottom: 24
  },
  recentTransactionsText: {
    backgroundColor: "transparent",
    color: "rgb(116, 110, 145)",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    alignSelf: "flex-start"
  },
  itemView: {
    backgroundColor: "transparent",
    height: 40,
    marginTop: 17,
    flexDirection: "row",
    alignItems: "center"
  },
  userPicImage: {
    backgroundColor: "transparent",
    resizeMode: "center",
    width: 42,
    height: 42
  },
  juliaAmbaritaText: {
    backgroundColor: "transparent",
    color: "white",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left"
  },
  idr209309Text: {
    backgroundColor: "transparent",
    color: "rgb(26, 188, 156)",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    marginTop: 6
  },
  jan202019Text: {
    backgroundColor: "transparent",
    color: "rgb(116, 110, 145)",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right"
  },
  itemTwoView: {
    backgroundColor: "transparent",
    height: 40,
    flexDirection: "row",
    alignItems: "center"
  },
  userPicTwoImage: {
    resizeMode: "center",
    backgroundColor: "transparent",
    width: 42,
    height: 42
  },
  aliFajarText: {
    color: "white",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent"
  },
  idr100000Text: {
    color: "rgb(252, 146, 157)",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: "transparent",
    marginTop: 6
  },
  aug222018Text: {
    color: "rgb(116, 110, 145)",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "right",
    backgroundColor: "transparent"
  }
});
