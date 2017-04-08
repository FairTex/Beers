import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

// Доп. компоненты
import List from 'components/List/List';
//import ItemWithImage from 'components/List/ItemWithImage';
import Form from 'components/Form';

class Main extends Component {

    render() {
        const { store: {reducers: {beers, favoriteBeers}}, dispatch, className } = this.props;
        const actions = bindActionCreators(Actions, dispatch);

        return (
            <div className={className}>
                <Form className={'search-form'}/>
                <List className={'list'}>
                {
                    beers.map((beer, idx) => {
                        return (
                            <List.ItemWithImage
                            key={idx}
                            className={'item item_with_image'}
                            addFavorite={actions.addFavorite}>
                                {beer}
                            </List.ItemWithImage>
                        );
                    })
                }
                </List>
            </div>
        );
    }

}

export default connect(state => ({store: state}))(Main);
