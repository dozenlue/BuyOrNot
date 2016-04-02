import React, {
  Navigator,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import ItemList from './itemList'
import LoginPage from './login'

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Prev
        </Text>
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity
        onPress={() => navigator.push(ItemList)}
        style={styles.navBarRightButton}>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          Next
        </Text>
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <View style={styles.navBarTitle}>
        <Text style={[styles.navBarText, styles.navBarTitleText]}>
          {route.name}
        </Text>
      </View>
    );
  },

};

// Top level navigator.
// Navigator route should have:
// - id: unique scene id
// - name: scene's display name, to be displayed on navigation bar
// - sceneConfig: configureation of how to put the scene on top
// - content: the content to be render in this scene
// - params: customized params you would like to pass to the scene

class App extends Component {

  renderScene(route, nav) {
    if (route.content) {
      let ContentPage = route.content
      return <ContentPage {...route.params} navigator={nav} />
    }
    else {
      // render a placeholder as default
      return (
        <View>
          <Text style={styles.welcome}>
            A placeholder page
          </Text>
          <Text style={styles.instructions}>
            The scene {route.id} has no content
          </Text>
        </View>
      )
    }
  }

  render(){
    return(
      <Navigator
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
        initialRoute={LoginPage}
        renderScene={this.renderScene.bind(this)}
        configureScene={ (route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        sceneStyle={styles.container}
      />
    );
  }
}

var {screenHeight, screenWidth} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBar: {
    backgroundColor: 'white',
    height: 48,
  },
  navBarTitle: {
    //flex: 1,
    height: 48,
    left: 80,
    right: 80 + (screenWidth - 80 * 2),
    // alignSelf: 'center',
    paddingVertical: 9,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    textAlign: 'center'
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#5890FF',
  }
});

module.exports = App
