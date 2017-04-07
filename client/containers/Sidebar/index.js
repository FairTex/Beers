import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from 'actions';

// Дополнительные компоненты
import List from 'containers/List';

// Стили
import './style.css';

class Sidebar extends Component {
    render() {
        const { store: {reducers: {beers, favoriteBeers}}, dispatch, className } = this.props;
        const actions = bindActionCreators(Actions, dispatch);
        return (
            <div className=className>
            {
                favoriteBeers.map((beer, idx) => {
                    return (
                        <List.Item
                        key={idx}
                        className={'sidebar__item item'}>
                            {beer}
                        </List.Item>
                    );
                })
            }
            </div>
        );
    }
}

export default connect(state => ({store: state}))(Sidebar);