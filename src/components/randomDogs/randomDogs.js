import React, {Component} from 'react';
import axios from 'axios';
import './randomDogs.css'

class RandomDogs extends Component {
    state = {
      urlImg: null
    };

    addNewDog = async () => {
      const dog = await axios.get('https://random.dog/woof.json');
      this.setState({urlImg: dog.data.url})
    };
    render() {
        return (
            <div className="random-dogs">
                <button onClick={this.addNewDog}>Add new dog</button>
                <img alt="Dog" src={this.state.urlImg} />
            </div>
        );
    }
}

export default RandomDogs;