import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


class Banana extends React.Component {
  render() {
    return (
      <Image source={this.props.pic} style={{width: 193, height: 110}}/>
    );
  }
}

class DisplayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
    render() {
      return (
      <Text> Hello World </Text> 
      );
  }
}

export default class App extends React.Component {
  render() {
let cadena = "";
for(let i = 0; i < 10; i++) {
 cadena += "Hello \n";
}
 let pic = {
      uri: 'https://images.clarin.com/2013/01/17/BkH65X14g_930x525.jpg'
    };
    return (
      <View style={styles.container}>
	<Banana pic={pic} />
	<DisplayList />
        <Text>{cadena}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
