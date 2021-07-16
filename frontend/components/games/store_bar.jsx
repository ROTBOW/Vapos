import React from 'react';
import Search from './../search/search_container';

class StoreBar extends React.Component {

    render() {
        return (
            <div className={`store-bar ${this.props.classToAdd}`}>
                <ul>

                    <li>Your Store</li>
                    <li>New & Noteworthy</li>
                    <li>Categories</li>
                    <li>Points Shop</li>
                    <li>News</li>
                    <li>Labs</li>

                </ul>

                {/* <input placeholder="seach - not real" type="text" /> */}
                <Search/>

            </div>
        )
    }
}

export default StoreBar;