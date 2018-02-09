import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: "",
        }
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)}/>
                {/*start search by clicking on button*/}
                {/*<button onClick={()=> {this.props.passTerm(this.state.term)}}> SUBMIT </button>*/}
            </div>
        )
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(this.state.term);
    }
}

export default SearchBar;
