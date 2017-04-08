import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Доп. компоненты
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';

import * as AppActions from 'actions';
import './style.css';

class App extends Component {

    render() {
        return (
            <div className='viewport'>
                <Main className={'main'}/>
                <Sidebar className={'sidebar'}/>
            </div>
        );
    }

}


export default App;
