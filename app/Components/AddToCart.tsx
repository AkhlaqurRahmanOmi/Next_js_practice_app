'use client'

import React from 'react'

function AddToCart() {
    return (
        <div>
            <button className='btn btn-primary' onClick={() => {
                console.log('Add to cart')
            }}>
                Add to cart
            </button>
        </div>
    )
}

export default AddToCart