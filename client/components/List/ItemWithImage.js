import React, { Component } from 'react';
import './style.css';

export default class ItemWithImage extends Component {
    render() {
        const { children, className } = this.props;
        const buttonClassname = children.isFavorite ? 'item__button button_disabled' : 'item__button';
        return (
            <div className={className}>
                <image className='item__image' src={children.image} />
                <h3 className="item__title">{children.title}</h3>
                <p className="item__description">{children.description}</p>
                <button className={buttonClassname} onClick = {this.handleClick.bind(this, children)}>
                    add
                </button>
            </div>
        )
    }

     handleClick(beer, e) {
         beer.isFavorite = true;

         const title = e.target.parentElement.getElementsByClassName('item__title')[0].innerHTML;
         const desc = e.target.parentElement.getElementsByClassName('item__description')[0].innerHTML;

         this.props.addFavorite({
             title: title,
             description: desc
         });
     }
}