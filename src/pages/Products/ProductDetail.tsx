import React from 'react';
import {Link} from 'react-router-dom';

const ProductDetail : React.FC<any> = props => {
    return (
        <ul style={{textAlign: 'center', listStyle: 'none'}}>
            {console.log(props)}
            <li>{props.location.state ? props.location.state.id : 'No id'}</li>
            <li>{props.location.state ? props.location.state.name : 'No data'}</li>
            <li>Sale:  {props.location.search ? `${props.location.state.sale}` : 'No sale'}</li>
            <Link to={{pathname: `/productList`}}>Back to list</Link>
        </ul>

        
    )
}

export default ProductDetail;