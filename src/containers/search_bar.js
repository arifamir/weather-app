import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }

    onInputChange(event) {
        //console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        // Go and get the fetch the weather data
        this.props.fetchWeather(this.state.term);

        //Empty the text string value
        this.setState({term: ''});
    }

    render() {
        return (
            <div className="row row2">
                <div className="col-sm-2">
                    <h1><span className="largenav"></span></h1>
                </div>

                <form className="" onSubmit={this.onFormSubmit}>
                    <div className="webshop-navbar-search smallsearch col-sm-8 col-xs-11">
                        <div className="row">
                            <input onChange={this.onInputChange} className="webshop-navbar-input col-xs-11" type=""
                                   placeholder="Search for Products, Brands and more" name="" value={this.state.term}/>
                            <button className="webshop-navbar-button col-xs-1">
                                <svg width="15px" height="15px">
                                    <path
                                        d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        );
    }
}


function mapDispatchToProps(dispatch) {

    return bindActionCreators({fetchWeather}, dispatch);
}

// Pass null because we don't need state here
export default connect(null, mapDispatchToProps)(SearchBar);