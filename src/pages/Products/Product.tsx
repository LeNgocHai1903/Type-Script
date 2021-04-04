import React, {useState} from 'react';
import {Link} from 'react-router-dom'
interface ProductModel {
    data : {
        id : string | number,
        name: string,
        sale? : number
    }[]
}
const ProductList: React.FC= props => {
    const [product,setProduct] = useState(()=> {
        const initialProducts:ProductModel = {
            data : [{
                id : 1,
                name: 'Tv Sony'
            },
            {
                id : 2,
                name: 'Tv Samsung',
                sale: 50
            },
            {
                id : 3,
                name: 'Tv LG'
            }],
        };
        return initialProducts;
    });
    return (
        <div style={{display:"flex", justifyContent: "center", textAlign: 'center', listStyle: 'none'}}>
            {product.data.length > 0 && product.data.map((p,index) => {return (
                <>
                    <li key={p.id} style={{marginLeft: "30px"}} >
                        <Link to={{ pathname : `/productDetail/${p.id}`, state: p , search : `${p.sale ? `?deal=${p.sale}` : ""}` }}>
                            {p.name}
                        </Link>
                    </li>
                </>
            )})}
        </div>
    )
}

export default ProductList;