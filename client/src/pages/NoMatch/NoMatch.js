import React from 'react'
import Navbar from '../../components/presentational/Layout/Navbar'
import {NoMatchBox} from '../../components/presentational/Layout/NoMatchBox'

class NoMatch extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <NoMatchBox />
            </div>
        )
    }
}

export default NoMatch;