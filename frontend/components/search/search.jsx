import React from 'react';

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: false,
            search: '<NULL>'
        }

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e){
        if (e.target.value === '') {
            this.setState({search: '<NULL>'});
            this.setState({show: false});
            return;
        }

        this.setState({search: e.target.value});
        this.props.fetchSearch(e.target.value);
        this.setState({show: true});
    }



    render(){
        
        let dropdown = [];
        
        for (let id in this.props.results) {
            let username = this.props.results[id][1]
            dropdown.push(<li key={id} className="search-items">{username}</li>)
        }
        

        if (!this.state.show) {
            return (
                <div className="search-container">
                    <input placeholder="search" type="text" onChange={this.handleChange}/>
                </div>
            )
        } else {
            return (
                <div className="search-container">
                    <input placeholder="search" type="text" onChange={this.handleChange}/>
                    <ul>
                        {dropdown}
                    </ul>
                </div>
            )
        }
    }
}

export default Search;