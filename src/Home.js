import React from 'react'
import Category from './Category.js'
import NavBar from './NavBar'
import Favorites from './Favorites'
import {API_URL} from './config'
import {handleResponse} from './Helpers'

class Home extends React.Component{
    constructor(){
        super()
        this.state={
            categories:[],
            recipes:[]
          }
    }
    componentDidMount() {
        this.fetchFood();
      }
    
      fetchFood(){
        fetch(`${API_URL}`)
        .then(handleResponse)
        .then((data) => {
        //  console.log(data)
          const {categories,recipes} = data
          this.setState({
            categories,
            recipes
          })
        })
      }

      render(){
        const {categories,recipes} = this.state
          return(
            <div>
              <NavBar />
            <Category categories={categories} />
            </div>
          )
      }
}

export default Home