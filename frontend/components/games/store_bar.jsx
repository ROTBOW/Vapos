import React from 'react';
import Search from './../search/search_container';

class StoreBar extends React.Component {

    render() {
        return (
            <div className={`store-bar ${this.props.classToAdd}`}>
                <ul>

                    <li className="store-bar-items">Your Store</li>
                    <li className="store-bar-items">New & Noteworthy</li>
                    <li className="store-bar-items">Categories</li>
                    <li className="store-bar-items">Points Shop</li>
                    <li className="store-bar-items">News</li>
                    <li className="store-bar-items">Labs</li>

                </ul>

                {/* <input placeholder="seach - not real" type="text" /> */}
                <Search/>

            </div>
        )
    }
}

export default StoreBar;