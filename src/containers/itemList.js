import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as itemActions from '../actions/items';

const mapReduxStoreToProps = (reduxStore) => {
  console.log('mapReduxStoreToProps called');
  console.debug(reduxStore);
  return {
    // Why cannot use store.get here?
    items: reduxStore.items.itemList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: bindActionCreators(itemActions.fetchItems, dispatch)
  }
};

class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchItems()
  }

  render() {
    return (
      <View>
        <Text style={styles.instructions}>
          Here are {this.props.items.length} items
        </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = {
  id: 'itemList',
  content: connect(mapReduxStoreToProps, mapDispatchToProps)(ItemList)
}
