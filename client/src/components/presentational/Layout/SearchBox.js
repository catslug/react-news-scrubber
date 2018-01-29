import React from 'react';
import {BoxTitle} from './BoxTitle'
import {Input} from './Input'
import {SubmitButton} from './SubmitButton'
import API from "../../../utils/API";

class SearchBox extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        query: '',
        startYear: '',
        endYear: '',
        articles: []
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        console.log('input changing')

        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        console.log('submitted', this.state.query)

        if (this.state.query) {
            API.getArticleByQuery({
                query: this.state.query
            })
                .then(res => this.parseArticleData(res))
                .catch(err => console.log(err));
        }
    }

    parseArticleData = (res) => {
        console.log(['res', res])
    }

    render() {
        return (
            <div style={Style.container}>
                <BoxTitle title='Search' />
                <form>
                    <Input
                        type='text'
                        placeholder='Search for your query here...'
                        label='Query'
                        title='Query'
                        className='input-field'
                        name='query'
                        value={this.state.query}
                        handleInputChange={this.handleInputChange}
                    />
                    <Input
                        type='number'
                        placeholder='start year'
                        label='Start Year'
                        title='Start Year'
                        className='input-field'
                        name='startYear'
                        value={this.state.startYear}
                        handleInputChange={this.handleInputChange}
                    />
                    <Input
                        type='number'
                        placeholder='end year'
                        label='End Year'
                        title='End Year'
                        className='input-field'
                        name='endYear'
                        value={this.state.endYear}
                        handleInputChange={this.handleInputChange}
                    />
                    <SubmitButton
                        title='Submit'
                        disabled={!this.state.query}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                </form>
            </div>
        )
    }
}

const Style = {
    container: {
        width: '100%',
        minHeight: '60vh',
        padding: '20px',
        marginTop: '3%',
        marginBottom: '3%',
        border: '2px solid #ccc',
        borderRadius: '8px',
        boxShadow: '1px 1px 2px 2px #eee'
    }
}

export default SearchBox;