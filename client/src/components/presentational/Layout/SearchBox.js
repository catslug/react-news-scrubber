import React from 'react';
import {BoxTitle} from './BoxTitle'
import {Input} from './Input'
import {SubmitButton} from './SubmitButton'
import API from "../../../utils/API";

class SearchBox extends React.Component {
    state = {
        query: '',
        startYear: '',
        endYear: '',
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        if (this.state.query !== '' && this.state.startYear === '' && this.state.endYear === '') {
            API.getArticleByQuery(this.state.query, this.state.startYear, this.state.endYear)
                .then(res => {
                    this.resetArticlesAndForm(res)
                })
                .catch(err => console.log(err));
        } else if (this.state.query !== '' && this.state.startYear !== '' && this.state.endYear === '') {
            API.getArticleByQueryAndStartYear(this.state.query, this.state.startYear)
                .then(res => {
                    this.resetArticlesAndForm(res)
                })
                .catch(err => console.log(err));
        } else if (this.state.query !== '' && this.state.startYear === '' && this.state.endYear !== '') {
            API.getArticleByQueryAndEndYear(this.state.query, this.state.endYear)
                .then(res => {
                    this.resetArticlesAndForm(res)
                })
                .catch(err => console.log(err))
        } else if (this.state.query !== '' && this.state.startYear !== '' && this.state.endYear !== '') {
            API.getArticleByQueryAndYearRange(this.state.query, this.state.startYear, this.state.endYear)
                .then(res => {
                    this.resetArticlesAndForm(res)
                })
                .catch(err => console.log(err))
        }
    }

    resetArticlesAndForm = (res) => {
        this.props.setArticlesArray(res)
        this.setState({
            query: '',
            startYear: '',
            endYear: ''
        })
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
                        maxLength='50'
                        handleInputChange={this.handleInputChange}
                    />
                    <Input
                        type='number'
                        placeholder='start year'
                        label='Start Year'
                        title='Start Year'
                        className='input-field'
                        name='startYear'
                        maxLength='4'
                        min='1850'
                        max='2018'
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
                        maxLength='4'
                        min='1850'
                        max='2018'
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
        paddingBottom: '65px',
        marginTop: '8%',
        marginBottom: '8%',
        borderRadius: '8px',
        boxShadow: '0px 1px 20px 0px #2f2f2f',
        backgroundColor: '#fff',
    }
}

export default SearchBox;