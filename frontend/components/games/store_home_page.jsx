import React from 'react';
import GameCarousel from './game_carousel';
import GameCarouselContainer from './game_carousel_container';



class StoreHomePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            test: 'yo'
        }

        this.selectGames = this.selectGames.bind(this)
    }

    componentDidMount() {
        this.props.fetchAllGames()
        this.setState({test: 'testing bro'})
    }

    selectGames(str) {
        let answer = [];
        str = str.split('*')

        for (let id in this.props.games) {
            if (str.includes(this.props.games[id].title)) {
                answer.push(this.props.games[id]);
            }
        }

        if (answer.length === 0) {
            return undefined;
        } else {
            return answer
        }
    }

    render() {
        
        // console.log(this.selectGames('War Thunder'));
        
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
                        {/* {
                            (this.state.test === '*') ?  : null
                        } */}
                        
                        <GameCarouselContainer str={this.state.test}/>
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