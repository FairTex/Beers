import React, { Component, PropTypes } from 'react';

// Доп. компоненты
import Grid from 'containers/List';
import Form from 'containers/Form'

class Main extends Component {

    render() {
        const { store: {reducers: {beers, favoriteBeers}}, dispatch, className } = this.props;
        return (
            <div className=className>
                <Form className={'search-form'}/>
                {
                    beers.map((beer, idx) => {
                        return (
                            <List.ItemWithImage
                            key={idx}
                            className={'item item-with-image'}>
                            {beer}
                            </List.item>
                        );
                    })
                }
            </div>
        );
    }

}

export default connect(state => ({store: state}))(Main);
