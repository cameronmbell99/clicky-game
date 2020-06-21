import React, { Component } from 'react';

class Imgs extends Component {
    state = {
        imgs: []
    }

    setUp() {

    }

    getChars() {
        const chars = []
        this.state.imgs.map(char => (chars.push(char)))
        return chars;
    }


}

export default Imgs;