import React from 'react';
import SHOP_DATA from '../utils/shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class FragancesUnisex extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        };
    }

    render(){
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {collections
                    .filter((item, idx) => idx === 2)  //Filtro para mostrar solo la dada de perfumes unisex.
                    .map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
};

export default FragancesUnisex;