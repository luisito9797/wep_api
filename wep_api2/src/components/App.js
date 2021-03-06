import React, {Component} from 'react';
import './Global/css/Header.css';
import './Global/css/Content.css';
import './Global/css/Footer.css';
import PropTypes from 'prop-types';

//Components
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'

class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        const { children } = this.props;
        return (
            <div className="App">
                <Header/>
                <Content  body={children} />
                <Footer/>
            </div>
        );
    }
}

export default App;
