import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import './AutocompleteCountry.css';
import { connect } from 'react-redux';
import { HANDLE_LIST_SELECT, HANDLE_COUNTRY_SUGGEST } from '../../actions/constants'


class AutocompleteCountry extends Component {

    handleChange = event => {

        const value = event.target.value;
        this.props.suggestionSelected(value);

    }

    renderSuggestions() {
        const suggestions = this.props.suggestions;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul className="suggestion-list">
                {suggestions.map(item => <li onClick={() => this.props.handleListSelect(item)}>{item}</li>)}
            </ul>
        )
    }

    render() {
        const country = this.props.country;

        return (
            <div className="autoCompleteText">
                <Input
                    placeholder="country"
                    icon="globe"
                    iconPosition="left"
                    value={country}
                    type="text"
                    onChange={this.handleChange}
                    required />
                {this.renderSuggestions()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        country: state.country,
        suggestions: state.suggestions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        suggestionSelected: (value) => dispatch({ type: HANDLE_COUNTRY_SUGGEST, value: value }),
        handleListSelect: (value) => dispatch({ type: HANDLE_LIST_SELECT, value: value })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AutocompleteCountry);
