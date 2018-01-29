import React from 'react'

export const NoMatchBox = () => (
    <div style={Style.container}>
        <h3 style={Style.text}>Sorry, this page does not exist</h3>
        <img style={Style.img}src="https://thumbs.gfycat.com/OptimalYellowCarp-size_restricted.gif" />
    </div>
)

const Style = {
    container: {
        width: '60%',
        marginLeft: '20%',
        marginRight: '20%',
        textAlign: 'center'
    },
    text: {
        marginTop: '10%',
        marginBottom: '10%'
    },
    img: {
        borderRadius: '8px'
    }
}