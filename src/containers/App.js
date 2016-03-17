import React, {
  Navigator,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ItemList from './itemList'

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
       initialRoute={ItemList}
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
});

module.exports = App
