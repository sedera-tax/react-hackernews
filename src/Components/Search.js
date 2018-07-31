import React, { Component } from 'react';

class Search extends Component {
    render() {
        const { value, onChange } = this.props;

        return (
            <form>
                <fieldset>
                    <legend>SEARCH</legend>
                    <label>
                        Title :
                        &nbsp;
                        <input
                            type="text"
                            value={value}
                            onChange={onChange}
                        />
                    </label>
                </fieldset>
            </form>
        );
    };
}

export default Search;
