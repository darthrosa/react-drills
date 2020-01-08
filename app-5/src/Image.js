import React, { Component } from 'react';

class Image extends Component {
    render(){
        return(
            <div>
                <img src={this.props.src} />
                <div>Error 504</div>
            </div>
        )
    }
}

export default Image;