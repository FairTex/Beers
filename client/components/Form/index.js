import React, { Component } from 'react';
import './style.css';

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            value: 'sort1'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const { className } = this.props;

        return (
            <form className={className}>
                <div className='search-block'>
                    <input type='text' className='search-block__input' />
                    <input value='search' type='submit' className='search-block__button' />
                </div>
                <div className={'select-block'}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="sort1">sort1</option>
                        <option value="sort2">sort2</option>
                    </select>
                </div>

            </form>
        )
    }
}