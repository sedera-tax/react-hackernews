import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import Table from './Components/Table';

const list = [
    {
        title : 'React',
        url : 'https ://facebook.github.io/react/',
        author : 'Jordan Walke',
        num_comments : 3,
        points : 4,
        objectID : 0,
    },
    {
        title : 'Redux',
        url : 'https ://github.com/reactjs/redux',
        author : 'Dan Abramov, Andrew Clark',
        num_comments : 2,
        points : 5,
        objectID : 1,
    },
    {
        title : 'Yannick',
        url : 'https ://github.com/sedera-tax',
        author : 'Yannick Sedera',
        num_comments : 5,
        points : 7,
        objectID : 2,
    },
];

function isSearched(searchTerm) {
    return function (item) {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
}

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: list,
            searchTerm: '',
        };

        this.onDismiss = this.onDismiss.bind(this);

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onDismiss(id) {
        const isNotId = item => item.objectID !== id;
        const updatedList = this.state.list.filter(isNotId);
        this.setState({
            list: updatedList
        });
    }

    onSearchChange(event) {
        this.setState({
           searchTerm: event.target.value
        });
    }

    render() {
        const user = {
            name: 'Yannick',
            firstName: 'Razafindrakoto'
        };
        user.name = 'Sedera';

        //Decomposition
        const { list, searchTerm } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React {user.name} {user.firstName}</h1>
                </header>
                <div>
                    It is {new Date().toLocaleTimeString()}
                </div>

                <div id="table_container">
                    <Search
                        value={searchTerm}
                        onChange={this.onSearchChange}
                    />
                    <br/>
                    <Table
                        list={list}
                        pattern={searchTerm}
                        onDismiss={this.onDismiss}
                        functionIsSearched={isSearched}
                    />
                </div>
            </div>
        );
    }
}

export default App;
