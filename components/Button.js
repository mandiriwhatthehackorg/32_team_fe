import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constants/Colors";


class Button extends React.Component {
  render() {
    
    return (
      <TouchableOpacity {...this.props} style={{...styles.container, backgroundColor: this.props.color?this.props.color: colors.DODGER_BLUE}} onPress={()=>{
          this.props.onPress()
      }}>
        <Text style={styles.text}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.DODGER_BLUE,
    marginBottom: 12,
    paddingVertical: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  text: {
    color: colors.WHITE,
    textAlign: "center",
    height: 20
  }
});

export default Button;