import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Alert
} from 'react-native';
import { Icon } from "react-native-elements";

import RadioButtonRN from "radio-buttons-react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

var questions = [
  {
    question: "This is the question",
    options: [
      { label: "option1", value: 10 },
      { label: "option2", value: 20 },
      { label: "option3", value: 30 },
      { label: "option4", value: 40 },
    ]
  },
  {
    question: "This is the question2",
    options: [
      { label: "option5", value: 10 },
      { label: "option6", value: 20 },
      { label: "option7", value: 30 },
      { label: "option8", value: 40 },
    ]
  },
  {
    question: "This is the question3",
    options: [
      { label: "option9", value: 10 },
      { label: "option10", value: 20 },
      { label: "option11", value: 30 },
      { label: "option12", value: 40 },
    ]
  },
  {
    question: "This is the question4",
    options: [
      { label: "option13", value: 10 },
      { label: "option14", value: 20, },
      { label: "option15", value: 30 },
      { label: "option16", value: 40 },
    ]
  },
  {
    question: "This is the question5",
    options: [
      { label: "option13", value: 10 },
      { label: "option14", value: 20, },
      { label: "option15", value: 30 },
      { label: "option16", value: 40 },
    ]
  },
  {
    question: "This is the question6",
    options: [
      { label: "option13", value: 10 },
      { label: "option14", value: 20, },
      { label: "option15", value: 30 },
      { label: "option16", value: 40 },
    ]
  },
  {
    question: "This is the question7",
    options: [
      { label: "option13", value: 10 },
      { label: "option14", value: 20 },
      { label: "option15", value: 30 },
      { label: "option16", value: 40 },
    ]
  },
  {
    question: "This is the question8",
    options: [
      { label: "option13", value: 10 },
      { label: "option14", value: 20, },
      { label: "option15", value: 30 },
      { label: "option16", value: 40 },
    ]
  },
  {
    question: "This is the question9",
    options: [
      { label: "option13", value: 10 },
      { label: "option14", value: 20, },
      { label: "option15", value: 30 },
      { label: "option16", value: 40 },
    ]
  },
  {
    question: "This is the question10",
    options: [
      { label: "option18", value: 10 },
      { label: "option19", value: 20, },
      { label: "option20", value: 30 },
      { label: "option21", value: 40 },
    ]
  },

]

const Question = ({ navigation, route }) => {

  const { questionNumber, scores } = route.params
  const [value, setvalue] = useState(-1);

  console.log(questionNumber)

  const renderFooter = (questionNumber) => {
    if (questionNumber === 9) {
      return (
        <View style={styler.footView}>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Question", {
              questionNumber: questionNumber - 1,
              scores: scores
            })
          }}>
            <Text style={styler.continue} >SUBMIT</Text>
          </TouchableOpacity>
        </View>
      )
    }
    else {
      return (
        <View style={styler.footView}>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Question", {
              questionNumber: questionNumber - 1,
              scores: scores
            })
          }}>
            <Text style={styler.continue} >CONTINUE</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
  return (
    <View style={styler.screen}>
      <View style={styler.headView}>
        <View style={styler.head}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack(null);
            }}
          >
            <Icon
              name="arrow-back"
              type="ionicon"
              color="#000000"
              size={0.04 * screenHeight}
              style={{ marginLeft: 0.039 * screenHeight }}
            />
          </TouchableOpacity>
        </View>
      </View >

      <View style={styler.headView}>
        <View style={{ justifyContent: "space-between", flex: 1, flexDirection: "row" }} >
          <TouchableOpacity onPress={() => {
            navigation.navigate("Question", {
              questionNumber: 0,
              scores: scores
            })
          }} >
            <Text style={styler.que_navigation} >
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Question", {
              questionNumber: 1,
              scores: scores
            })
          }}>
            <Text style={styler.que_navigation} >
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Question", {
              questionNumber: 2,
              scores: scores
            })
          }}>
            <Text style={styler.que_navigation} >
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Question", {
              questionNumber: 3,
              scores: scores
            })
          }} >
            <Text style={styler.que_navigation}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Question", {
              questionNumber: 4,
              scores: scores
            })
          }}>
            <Text style={styler.que_navigation}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Question", {
              questionNumber: 5,
              scores: scores
            })
          }}>
            <Text style={styler.que_navigation}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Question", {
              questionNumber: 6,
              scores: scores
            })
          }}>
            <Text style={styler.que_navigation}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Question", {
              questionNumber: 7,
              scores: scores
            })
          }}>
            <Text style={styler.que_navigation}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Question", {
              questionNumber: 8,
              scores: scores
            })
          }}>
            <Text style={styler.que_navigation}>
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate("Question", {
              questionNumber: 9,
              scores: scores
            })
          }}>
            <Text style={styler.que_navigation}>
              10
            </Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styler.textView}>
        <Text style={styler.age}>{questions[questionNumber].question}</Text>
      </View>
      <View style={styler.formView}>
        <RadioButtonRN
          data={questions[questionNumber].options}
          style={{
            marginRight: 0.02 * screenWidth,
          }}
          textStyle={{
            fontSize: 0.02 * screenHeight,
          }}
          selectedBtn={(e) => {
            var v = e["value"];
            console.log(v)
            scores[questionNumber] = v
            console.log(scores)
          }}
          box={false}
          activeColor="#7AC141"
          deactiveColor="#7AC141"
        />
      </View>

      {renderFooter(questionNumber)}

    </View>
  );
}

const styler = StyleSheet.create({
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 0.06 * screenHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  age: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
    marginTop: 0.05 * screenHeight,
    marginLeft: 0.028 * screenHeight,
  },
  set: {
    fontSize: 15,
    textAlign: "left",
    marginLeft: 0.028 * screenHeight,
  },
  continue: {
    justifyContent: "flex-end",
    borderRadius: 0.022 * screenHeight,
    width: 0.85 * screenWidth,
    height: 0.08 * screenHeight,
    backgroundColor: "#7AC141",
    color: "white",
    margin: 0.04 * screenHeight,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    overflow: "hidden",
    paddingVertical: 0.02 * screenHeight,
  },
  screen: {
    flex: 1,
    flexDirection: "column",
  },
  headView: {
    flex: 0.15,
    alignContent: "flex-start"
  },
  textView: {
    flex: 0.1,
    marginLeft: 0.015 * screenHeight,
  },
  formView: {
    flex: 0.3,
    marginTop: 0.01 * screenHeight,
    marginLeft: 0.028 * screenHeight,
  },
  footView: {
    flex: 0.4,
    justifyContent: "flex-end",
    marginBottom: 0.07 * screenHeight,
  },
  que_navigation: {
    backgroundColor: "white",
    borderColor: "#7AC141",
    borderRadius: 2,
    fontSize: 24,
  }
});

export default Question;








{/* {(() => {
              if (questionNumber==9){
                console.log("hello");
                <TouchableOpacity onPress={() => {
                  navigation.navigate("Question", {
                  })
                }}>
                  <Text style={styler.continue} >SUBMIT</Text>
                </TouchableOpacity>
              }
              
              return null;
            })()} */}