import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    countriesList: []
  };

  addListCountries = async () => {
    let state = [...this.state.countriesList];
    const countries = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code');
    state = countries.data;
    this.setState({countriesList: state})
  };

  async componentDidMount() {
    await this.addListCountries();
  }

  render() {
    return (
        <div>

        </div>
    );
  }
}

export default App;
