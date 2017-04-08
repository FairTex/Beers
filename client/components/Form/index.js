import React, { Component } from 'react';


export default class Form extends Component {
    render() {
        const { className } = this.props;

        return (
            <form className={className}>
                <div className='search-block'>
                    <input type='text' className='search-block__input' />
                    <input type='submit' className='search-block__button' />
                </div>
            </form>
        )
    }
}