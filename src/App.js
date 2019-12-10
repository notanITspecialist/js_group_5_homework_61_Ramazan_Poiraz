import React, {Component} from 'react';
import axios from 'axios';
import './App.css'
import CountryList from "./components/countryList/countryList";
import FindCountrie from "./components/findCountrie/findCountrie";

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
    let state = {...this.state.findCountrie};
    const countrie = await axios.get('https://restcountries.eu/rest/v2/alpha/'+id);
    const arr = countrie.data.borders.reduce((borders,border)=>{
      borders.push(axios.get('https://restcountries.eu/rest/v2/alpha/'+border));
      return borders
    },[]);
    const borders = [];
    await Promise.all(arr).then(elem=> elem.forEach(elem => borders.push(elem.data.name)));
    countrie.data.borders = borders;
    state = countrie.data;
    this.setState({findCountrie: state})
  };

  async componentDidMount() {
    await this.addListCountries();
  }

  render() {
    return (
        <div className="country-block">
          <CountryList countries={this.state.countriesList} onClick={this.findCountrie}/>
          <FindCountrie countrie={this.state.findCountrie}/>
        </div>
    );
  }
}

export default App;
