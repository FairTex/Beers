import React, { Component } from 'react';


export default class Item extends Component {
    render() {
        const { children, className } = this.props;
        return (
            <div className=className>
                <h4 className="item__title">{children.title}</h2>
                <h3 className="item__description">{children.description}</h3>
            </div>
        )
    }
}