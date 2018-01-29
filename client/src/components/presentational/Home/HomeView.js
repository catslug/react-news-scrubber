import React from 'react';
import {Container} from '../Layout/Container'
import {Row} from '../Layout/Row'
import {Col} from '../Layout/Col'
import Navbar from '../Layout/Navbar'
import SearchBox from '../Layout/SearchBox'
import ResultsBox from '../Layout/ResultsBox'
import SavedArticlesBox from '../Layout/SavedArticlesBox'

class HomeView extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <SearchBox />
                    <ResultsBox />
                    <SavedArticlesBox />
                </Container>
            </div>
        )
    }
}

const Style = {

}

export default HomeView;