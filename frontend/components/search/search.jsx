import React from 'react';
import { isEmpty } from './../profile/profile';

const checkSize = arr => {

}

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            search: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e){
        this.setState({search: e.target.value});
        this.props.fetchSearch(this.state.search);



        // if (isEmpty(this.props.result)) {
        //     //does stuff
        // }
    }



    render(){
        console.log(this.props.results);

        let dropdown = '';
        if (this.state.show) dropdown = this.props.results;

        return (
            <div>
                <input placeholder="search" type="text" onChange={this.handleChange}/>
                <ul>
                    {dropdown}
                </ul>
            </div>
        )
    }
}

export default Search;