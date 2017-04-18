import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as itemActions from '../actions/items';

const mapReduxStoreToProps = (reduxStore) => {
  console.log('mapReduxStoreToProps called');
  // console.debug(reduxStore);
  return {
    // Why cannot use store.get here?
    items: reduxStore.items.get('itemList')
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItems: bindActionCreators(itemActions.fetchItems, dispatch)
  }
};

class ItemsScreen extends Component {
  constructor(props) {
		super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			ds: ds.cloneWithRows(this.props.items.toJS())
		}
	}

  componentDidMount() {
    this.props.fetchItems();
  }

  // This will be called when property was changed.
  // As we mapped 'this.props.items' to store's 'itemList', property will be
  // changed when 'itemList' in store updated.
	componentWillReceiveProps(nextProps) {
		if (nextProps.items !== this.props.items) {
			this.setState({
				ds: this.state.ds.cloneWithRows(nextProps.items.toJS())
			})
		}
	}

  render() {
    return (
      <ListView
        dataSource={this.state.ds}
        renderRow={this.renderRow}
      />
    )
  }

  renderRow(item) {
    // console.debug('renderRow called with item: ' + item);
    return (
      <View>
        <Text style={styles.instructions}>{item.id}</Text>
        <Text style={styles.instructions}>{item.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = connect(mapReduxStoreToProps, mapDispatchToProps)(ItemsScreen);
