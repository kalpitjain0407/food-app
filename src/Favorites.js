import React from 'react'
import {API_URL} from './config'
import {handleResponse} from './Helpers'
import './Category.css'

class Favorites extends React.Component{

    constructor(){
        super()
        this.state={
            recipes:[],
        }
    }

    componentDidMount() {
        this.fetchFavouriteFood();
    }

    fetchFavouriteFood(){
        fetch(`${API_URL}`)
        .then(handleResponse)
        .then((data) => {
          console.log(data)
          const filteredRecipes = data.recipes
          const filteredData = filteredRecipes.filter(item => {
              return item.isFavourite === true
          })
          this.setState({recipes:filteredData},()=>{console.log(this.state.recipes)})
          
        })
     }

    render(){
        const {recipes}=this.state
        console.log(recipes)
        return (
            <div>
                {recipes.map(recipy=>(
                    <div class="card-favorite">
                        <img class="card-img-top" src={recipy.image} style={{height:'10rem',width:'10rem'}}/>
                        <div class="card-body">
                            <h4 class="card-title">{recipy.name}</h4>
                            <p class="card-text">Price:${recipy.price}</p>
                            <p class="card-text">Category:{recipy.category}</p>
                            <p class="card-text">Rating:{recipy.rating}</p>
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Favorites
