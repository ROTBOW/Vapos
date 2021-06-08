import React from 'react';
import GameCarouselContainer from './game_carousel_container';
import GameListContainer from './game_list_container';
import StoreBar from './store_bar';



class StoreHomePage extends React.Component {

    constructor(props) {
        super(props)
    }
    
    componentDidMount() { //gonna leave this for now but might not need it
        this.props.fetchAllGames()
    }

    render() {
        let str = 'War Thunder*From The Depths*Black Desert Online*X3 Farnham\'s Legacy'
        
        return (
            <main id="store-main">

                <div className="store-left-wing">
                    <h1>welcome to the store page! this is the left wing</h1>
                    <p>this will be the large list of links</p>
                </div>



                <div className="store-right-wing">
                    <StoreBar/>
                    
                    <h1>this is the right wing</h1>

                    
                    <GameCarouselContainer str={str}/>
                    

                    <div>
                        <GameListContainer/>
                    </div>
                </div>


            </main>
        )
    }

}

export default StoreHomePage;