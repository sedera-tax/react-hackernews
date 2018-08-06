import React from 'react';
import Button from './Button';

const TableApi = ({ list, pattern, onDismissObj, functionIsSearched }) => {

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
            {list.map( (item, key) =>
                <tr key={item.objectID}>
                    <td data-label="N">{key + 1}</td>
                    <td data-label="Title"><a href={item.url}>{item.title}</a></td>
                    <td data-label="Artist">{item.author}</td>
                    <td data-label="Comment">{item.num_comments}</td>
                    <td data-label="Points">{item.points}</td>
                    <td data-label="Action">
                        <Button
                            onClick={() => onDismissObj(item.objectID)}
                            className="btn-delete"
                        >
                            Dismiss
                        </Button>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default TableApi;
