import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Favorites from './Favorites'
import NavBar from './NavBar'
import Home from './Home'
import SingleCategory from './SingleCategory'
import Category from './Category.js'
import {API_URL} from './config'
import {handleResponse} from './Helpers'

class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state={
  //     categories:[]
  //   }
  // }
  // componentDidMount() {
  //   this.fetchFood();
  // }

  // fetchFood(){
  //   fetch(`${API_URL}`)
  //   .then(handleResponse)
  //   .then((data) => {
  //   //  console.log(data)
  //     const {categories} = data
  //     this.setState({
  //       categories
  //     })
  //   })
  // }

  render(){
    // const {categories} = this.state
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/category/:category" exact component={SingleCategory} />
          {/* <Category categories={categories}/> */}
        </Router>
      </div>
    );
  }
}



export default App;
