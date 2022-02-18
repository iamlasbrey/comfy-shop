import React from 'react'
import { useGlobalContext } from '../context'
import ProductComponent from './ProductComponent'
import { css } from "@emotion/react";
import BounceLoader from "react-spinners/BounceLoader";


const ProductComponentlist = () => {
    const {filteredResults , loading } = useGlobalContext()
    let color= "#ab7a5f"

        const override = css`
        display: block;
        margin: 0 auto;
        margin-bottom: 3em;
        /* margin-top: 3em;
        margin-bottom: 3em; */
        `;


    if(loading){
        return (
            <BounceLoader color={color} loading={loading} css={override} size={300} />
        )
    }


    if(filteredResults.length < 1){
        return(
            <h1 className='nofurnitrematches'> No Furniture  Matches Search </h1>
        )
    }
    return (
        <>
        {
            filteredResults.map((items)=>(
                <ProductComponent items={items} key={items._id} />
            )) 
        }
        </>
    )
}

export default ProductComponentlist