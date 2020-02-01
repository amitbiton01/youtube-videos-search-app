import React from 'react';

class SearchBar extends React.Component {
    state = {term: ""};

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    };

    onFormSubmit = (event) => {

        const {onFormSubmit} = this.props;

        event.preventDefault();
        onFormSubmit(this.state.term);
    };

    render() {

        const {term} = this.state;

        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
