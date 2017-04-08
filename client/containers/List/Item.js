import React, { Component } from 'react';


export default class Item extends Component {
    render() {
        const { children, className } = this.props;
        return (
            <div className={className}>
                <h3 className="item__title">{children.title}</h3>
                <p className="item__description">{children.description}</p>
            </div>
        )
    }
}