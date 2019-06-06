import React, { Component } from 'react'
import {API_URL} from './config'
import {handleResponse} from './Helpers'
import './Category.css'
import Cart from './Cart.js'

class SingleCategory extends Component{
    constructor(props){
        super(props)
        this.state={
            filteredCategory:props.match.params.category,
            filtered:[],
            counter:0
        }
        console.log(props.match.params.category)
    }

    componentDidMount(){
        this.fetchACategory()
    }

    fetchACategory(){
        fetch(`${API_URL}`)
        .then(handleResponse)
        .then((data)=>{
            const {recipes} = data
            const filtered = recipes.filter(item => {
                return item.category===this.props.match.params.category
            })
            console.log(filtered)
            this.setState({filtered:filtered},()=>{console.log(this.state.filtered)})
        })
    }

    increment = () => {
        var previousCounter = this.state.counter
        previousCounter+=1
        this.setState({counter:previousCounter},()=>{console.log(this.state.counter)})
    }

    render(){
        const {filtered} = this.state
        return(
            <div>
                {filtered.map(recipy=>(
                    <div class="card-single-category">
                        <img class="card-img-top" src={recipy.image} style={{height:'10rem',width:'10rem'}}/>
                        <div class="card-body">
                            <h4 class="card-title">{recipy.name}</h4>
                            <p class="card-text">Price:${recipy.price}</p>
                            <p class="card-text">Category:{recipy.category}</p>
                            <p class="card-text">Rating:{recipy.rating}</p>
                            <button class="btn btn-primary" onClick={this.increment}>Buy Now</button>
                        </div>
                    </div>
                ))}
                {/* <Cart increment={this.state.increment} /> */}
            </div>
        )
    }
}


export default SingleCategory
