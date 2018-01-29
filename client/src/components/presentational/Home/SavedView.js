import React from 'react';
import {Container} from '../Layout/Container'
import {Row} from '../Layout/Row'
import {Col} from '../Layout/Col'
import Navbar from '../Layout/Navbar'
import SavedArticlesBox from '../Layout/SavedArticlesBox'

class SavedView extends React.Component {
    render() {

        return (
            <div>
                <Navbar />
                <Container>
                    <SavedArticlesBox />
                </Container>
            </div>
        )
    }
}

const Style = {

}

export default SavedView;