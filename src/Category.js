import React from 'react'
import './Category.css'
import {Link} from 'react-router-dom'
import SingleCategory from './SingleCategory'

const Category = (props) => {
   const {categories}=props
        return (
        <div>
            <h1 className="header-style">Categories</h1>
            {categories.map(category => (
                <div class="card-category">
                    <img class="card-img-top" src={category.image} style={{width:'10rem',height:'10rem'}} />
                    <div class="card-body">
                    <h5 class="card-title">{category.name}</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <Link to={`/category/${category.name}`}><a href="" class="btn btn-primary">See Items</a></Link>
                    </div>
                </div>
            ))}
        </div>
        )
}

export default Category


















//style={{width: "20px",height:"30px"}}
// style={{width: "18rem"}}
/* {categories.map(category => (
                <div key={category.id}>{category.name}</div>
            ))}
            {console.log(categories)} */