import React, { Component } from 'react';

class Table extends Component {
    render() {
        const { list, pattern, onDismiss, functionIsSearched } = this.props;

        return (
            <table className="responsive-table">
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
                {list.filter(functionIsSearched(pattern)).map( (item, key) =>
                    <tr key={item.objectID}>
                        <td data-label="N">{key + 1}</td>
                        <td data-label="Title"><a href={item.url}>{item.title}</a></td>
                        <td data-label="Artist">{item.author}</td>
                        <td data-label="Comment">{item.num_comments}</td>
                        <td data-label="Points">{item.points}</td>
                        <td data-label="Action">
                            <button
                                type="button"
                                onClick={() => onDismiss(item.objectID)}
                            >
                                Dismiss
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    };
}

export default Table;
