import React, { Component } from 'react';


export default class ItemWithImage extends Component {
    render() {
        const { children, className } = this.props;
        buttonClassname = children.isFavorite ? 'item__button button_disabled' : 'item__button';
        return (
            <div className=className>
                <image className='item__image' src=children.image />
                <h4 className="item__title">{children.title}</h2>
                <h3 className="item__description">{children.description}</h3>
                <button className=buttonClassname onClick = {this.handleClick.bind(this)}>
                    add
                </button>
            </div>
        )
    }

     handleClick(e) {
         const title = e.target.parentElement.getElementsByClassName('item__title')[0].innerHTML;
         const desc = e.target.parentElement.getElementsByClassName('item__description')[0].innerHTML;

         this.props.addFavorite({
             title: name,
             description: desc
         });
     }
}