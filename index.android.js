const React = require('react-native')
const { Provider } = require('react-redux')
const App = require('./src/containers/App')
const configureStore = require('./src/store/configureStore')

const {
  Component,
  AppRegistry
} = React

const store = configureStore()

class BuyOrNot extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('BuyOrNot', () => BuyOrNot);
