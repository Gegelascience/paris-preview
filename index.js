import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment,
  asset
} from 'react-360';

export default class ParisPreview extends React.Component {

  state = {
    counter: 0,
    place: 'Seine'
  }


  changeView = () => {
    this.setState({
      counter: (this.state.counter += 1)
    });
    if (this.state.counter % 3 == 0) {
      Environment.setBackgroundImage(asset('seine.jpg'))
      Environment.preloadBackgroundImage(asset('montmartre.jpg'))
      this.setState({
        place: 'Seine'
      });
    } else if (this.state.counter % 3 == 1) {
      Environment.setBackgroundImage(asset('montmartre.jpg'))
      Environment.preloadBackgroundImage(asset('louvre.jpg'))
      this.setState({
        place: 'Montmartre'
      });
    } else {
      Environment.setBackgroundImage(asset('louvre.jpg'))
      Environment.preloadBackgroundImage(asset('seine.jpg'))
      this.setState({
        place: 'Louvre'
      });

    }

  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <VrButton onClick={this.changeView}>
            <Text style={styles.greeting}>
              {this.state.place}
            </Text>
          </VrButton>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('ParisPreview', () => ParisPreview);
