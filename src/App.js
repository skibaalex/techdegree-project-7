import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import MainDisplay from './components/MainDisplay';
import NotFound from './components/NotFound';
import axios from 'axios'
import apiKey from './config'

class App extends Component{
  state = {
    images: [],
    searching: false,
    searchTerm: ''
  }


  handleSearch = (value) => {
    this.setState({searching: true, images: [], searchTerm: value})
    axios
			.get(
				`https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&tags=${value}&api_key=${apiKey}&per_page=24&nojsoncallback=1`
			)
			.then(res => {
        const {data : { photos : {photo}}} = res
				const images = photo.map(photoDetails => {
          const { server, id, secret } = photoDetails;
          return {
            url: `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`,
            id
          }
        })
        this.setState({images, searching: false})
			})
			.catch(error => {
        this.setState({images: [], searching: false})
        console.error(error)});
  }

  render(){
    return (
      <div className="container">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/search/cats" />} />
          <Route exact path="/search" render={() => <Redirect to="/search/dogs" />} />
          <Route path="/search/:query" render={() => <MainDisplay searchTerm={this.state.searchTerm} searching={this.state.searching} images={this.state.images} handleSearch={this.handleSearch} />} />
          <Route path="/" render={() => <NotFound handleSearch={this.handleSearch} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
