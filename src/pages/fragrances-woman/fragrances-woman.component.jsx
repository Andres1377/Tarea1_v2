import React from 'react';
import SHOP_DATA from '../utils/shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview';

class FragancesWoman extends React.Component {
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
                    .filter((item, idx) => idx === 1)  //Filtro para mostrar solo la dada de perfumes de mujer.
                    .map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
};

export default FragancesWoman;