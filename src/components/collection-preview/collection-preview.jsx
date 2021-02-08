import React from 'react';

//Importamos al componentes que se pasaran datos
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

//Queremos mostrar el titulo y los items de shopdata
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                //.filter((item, idx) => idx < 4)
                .map(({ idx, ...otherItemProps }) => (
                    <CollectionItem key={idx} { ...otherItemProps }/>
            ))}
        </div>
    </div>
);

export default CollectionPreview;