import React, {Component} from 'react';
import axios from 'axios';
import CountryList from "./components/countryList/countryList";

class App extends Component {
  state = {
    countriesList: [],
    findCountrie: {}
  };

  addListCountries = async () => {
    let state = [...this.state.countriesList];
    const countries = await axios.get('https://restcountries.eu/rest/v2/all?fields=name;alpha3Code');
    state = countries.data;
    this.setState({countriesList: state})
  };

  findCountrie = async id => {
    const countrie = await axios.get('https://restcountries.eu/rest/v2/alpha/'+id);
    const arr = [];
    for(let border of countrie.data.borders){
      const request = axios.get('https://restcountries.eu/rest/v2/alpha/'+border);
      arr.push(request);
    }
    const borders = [];
    await Promise.all(arr).then(elem=> elem.forEach(elem => borders.push(elem.data.name)));
    console.log(borders)
  };

  async componentDidMount() {
    await this.addListCountries();
  }

  render() {
    return (
        <div>
          <CountryList countries={this.state.countriesList} onClick={this.findCountrie}/>
        </div>
    );
  }
}

export default App;
