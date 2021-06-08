import React from 'react';



class GameList extends React.Component {

    componentDidMount(){
        this.props.fetchAllGames();
    }

    render() {
        return (
            <div>
                bro this is gonna be a list
            </div>
        )
    }
}

export default GameList;