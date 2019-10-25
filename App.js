/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';


class App extends React.Component {
  constructor (props) {
    super(props)

		this.state = {
			c: 60,
    }

    let n = 1;

		setInterval(() => {
			let { c } = this.state;

			c += n;

			if (c > 150) {
				n = -1;
			} else if (c < 60) {
        n = 1;
      }

			this.setState({c})
		}, 16)
  }

  render () {
    const { c } = this.state;

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            <View style={styles.body}>
                <View style={[styles.container, { backgroundColor: '#F00'}]}>
                  <View style={[styles.inner, {transform: [{translateX: c}]}]}>
                    <Text style={styles.welcome}>X: {c}</Text>
                  </View>
                </View>
                <View style={[styles.container, { backgroundColor: '#0F0'}]}>
                  <View style={[styles.inner, {transform: [{translateX: c}, {translateY: 0}]}]}>
                    <Text style={styles.welcome}>X: {c}, Y: 0</Text>
                  </View>
                </View>
                <View style={[styles.container, { backgroundColor: '#00F'}]}>
                  <View style={[styles.inner, {left: c}]}>
                    <Text style={styles.welcome}>Left: {c}</Text>
                  </View>
                </View>
              </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: 'white',
  },
  container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 30,
	},
	inner: {
		height: 40,
		width: 150,
		backgroundColor: '#000',
	},
	welcome: {
		fontSize: 30,
		lineHeight: 40,
		color: '#FFF',
	},
});


export default App;
