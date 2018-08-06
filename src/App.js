import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import Table from './Components/Table';
import SearchApi from "./Components/SearchApi";
import TableApi from "./Components/TableApi";

const DEFAULT_QUERY = '';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
// const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;

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
            result: null,
            searchTerm: DEFAULT_QUERY,
        };

        this.onDismiss = this.onDismiss.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);

        this.onDismissObj = this.onDismissObj.bind(this);
        this.setSearchTopStories = this.setSearchTopStories.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this) ;
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

    onDismissObj(id) {
        const isNotId = item => item.objectID !== id;
        const updatedHits = this.state.result.hits.filter(isNotId);
        this.setState({
            result: Object.assign({}, this.state.result, { hits: updatedHits })
        });
    }

    setSearchTopStories(result) {
        this.setState({ result });
    }

    onSearchSubmit(event) {
        const { searchTerm } = this.state;
        this.fetchSearchTopStories(searchTerm);
        event.preventDefault();
    }

    fetchSearchTopStories(searchTerm) {
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
            .then(response => response.json())
            .then(result => this.setSearchTopStories(result))
            .catch(error => error);
    }

    componentDidMount() {
        const { searchTerm } = this.state;
        this.fetchSearchTopStories(searchTerm);
    }

    render() {
        const user = {
            name: 'Yannick',
            firstName: 'Razafindrakoto'
        };
        user.name = 'Sedera';

        //Decomposition
        const { list, result, searchTerm } = this.state;

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
                    >
                        Title :
                    </Search>
                    <br/>
                    <Table
                        list={list}
                        pattern={searchTerm}
                        onDismiss={this.onDismiss}
                        functionIsSearched={isSearched}
                    />
                </div>

                <div className="page">
                    <h2>WITH API</h2>
                    <div id="table_container">
                        <SearchApi
                            value={searchTerm}
                            onChange={this.onSearchChange}
                            onSubmit={this.onSearchSubmit}
                        >
                            Search
                        </SearchApi>
                        <br/>
                        {
                            result &&
                            <TableApi
                                list={result.hits}
                                pattern={searchTerm}
                                onDismissObj={this.onDismissObj}
                            />
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
