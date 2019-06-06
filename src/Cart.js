import React, { Component } from 'react'

export class Cart extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                <span className="span-style"><i class="fa fa-shopping-cart fa-3x"></i></span>
            </div>
        )
    }
}

export default Cart
