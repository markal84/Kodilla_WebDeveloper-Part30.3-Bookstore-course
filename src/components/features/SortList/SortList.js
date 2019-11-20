import React, { Component } from 'react';

class SortList extends Component {
    render() {
        return (
        <ul className="list-group">
            Sort:
            <li className="list-group-item">Name A-Z</li>
            <li className="list-group-item">Name Z-A</li>
            <li className="list-group-item">Price Ascending</li>
            <li className="list-group-item">Price Descending</li>
        </ul> 
        )
    }
};

export default SortList;