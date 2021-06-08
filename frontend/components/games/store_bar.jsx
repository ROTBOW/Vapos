import React from 'react';

class StoreBar extends React.Component {

    render() {
        return (
            <div id="store-bar">
                <ul>

                    <li>Your Store</li>
                    <li>New & Noteworthy</li>
                    <li>Categories</li>
                    <li>Points Shop</li>
                    <li>News</li>
                    <li>Labs</li>

                </ul>

                <input placeholder="seach - not real" type="text" />

            </div>
        )
    }
}

export default StoreBar;