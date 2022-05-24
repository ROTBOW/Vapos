import React from 'react';



class GameImageCarousel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentImg: 0,
            amount: this.props.images.length
        }
    }


    handleButton(direction) {
        return e => {
            if (direction === 'right') {
                if (this.state.currentImg+1 <= this.state.amount-1) {
                    this.setState({currentImg: this.state.currentImg + 1 })
                } else {
                    this.setState({currentImg: 0})
                }
            } else {
                if (this.state.currentImg-1 >= 0) {
                    this.setState({currentImg: this.state.currentImg - 1 })
                } else {
                    this.setState({currentImg: this.state.amount-1})
                }

            }
        }
    }

    addFive(arr) {
        for (let i = 0; i < 5; i++ ) {
            let numForKey = arr.length;
            arr.push(<img src="https://plchldr.co/i/162x69?text=Image Not Found" alt="game_placeholder_bro" key={numForKey+1}/>)
            numForKey++
        }

        return arr;
    }
 
    render() {
        let images = this.props.images;
        let currentImg = this.state.currentImg;
        
        let imagesMapped = images.map((image, idx) => {
            let selectedCheck = (currentImg === idx)  ? 'selected' : '';
            return (<img
                src={image}
                width="115"
                height="65"
                key={idx}
                onClick={e => this.setState({currentImg: idx})}
                className={selectedCheck}
            />)
        })


        return (
            <div id="game-show-left-wing" >
                <img src={images[currentImg]} width="600" height="337" />

                <div id="game-show-undercarriage">
                    {imagesMapped}
                </div>
                <input type="image" src={window.leftButton} onClick={this.handleButton('left')}/>
                <input type="image" src={window.rightButton} onClick={this.handleButton('right')} id="image-carousel-right-button"/>
            </div>
        )
    }
    
}

export default GameImageCarousel;