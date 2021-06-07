import React from 'react';
import GameCarousel from './game_carousel';
import GameCarouselContainer from './game_carousel_container';



class StoreHomePage extends React.Component {

    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchAllGames()
    }

    render() {
        let str = 'War Thunder*From The Depths*Black Desert Online'
        
        return (
            <main>

                <div className="store-left-wing">
                    <h1>welcome to the store page! this is the left wing</h1>
                    <p>this will be the large list of links</p>
                </div>



                <div className="store-right-wing">
                    <h1>this is the right wing</h1>
                    <p>this will be the store-Bar</p>

                    <div>

                        <GameCarouselContainer str={str}/>
                        
                    </div>

                    <div>
                        <h2>this will be a game grid</h2>
                    </div>
                </div>


            </main>
        )
    }

}

export default StoreHomePage;