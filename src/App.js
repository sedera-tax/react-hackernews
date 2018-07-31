import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
                    <form>
                        <fieldset>
                            <legend>SEARCH</legend>
                            <label>Title :</label>
                            &nbsp;
                            <input
                                type="text"
                                onChange={this.onSearchChange}
                            />
                        </fieldset>
                    </form>
                    <table border="1" className="responsive-table">
                        <thead>
                            <tr>
                                <th>N</th>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Comment</th>
                                <th>Points</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.list.filter(isSearched(this.state.searchTerm)).map( (item, key) =>
                            <tr key={item.objectID}>
                                <td data-label="N">{key + 1}</td>
                                <td data-label="Title"><a href={item.url}>{item.title}</a></td>
                                <td data-label="Artist">{item.author}</td>
                                <td data-label="Comment">{item.num_comments}</td>
                                <td data-label="Points">{item.points}</td>
                                <td data-label="Action">
                                    <button
                                        type="button"
                                        onClick={() => this.onDismiss(item.objectID)}
                                    >
                                        Dismiss
                                    </button>
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
