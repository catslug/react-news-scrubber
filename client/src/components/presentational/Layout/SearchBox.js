import React from 'react';
import {BoxTitle} from './BoxTitle'
import {Input} from './Input'
import {SubmitButton} from './SubmitButton'

class SearchBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={Style.container}>
                <BoxTitle title='Search' />
                <Input
                    type='text'
                    placeholder='Search for your query here...'
                    label='Query'
                    title='Query'
                    inputName='query-string'
                    className='input-field'
                />
                <Input
                    type='number'
                    placeholder='start year'
                    label='Start Year'
                    title='Start Year'
                    inputName='start-year'
                    className='input-field'
                />
                <Input
                    type='number'
                    placeholder='end year'
                    label='End Year'
                    title='End Year'
                    inputName='end-year'
                    className='input-field'
                />
                <SubmitButton
                    title='Submit'
                />
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