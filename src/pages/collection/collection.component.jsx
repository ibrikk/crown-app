import React from 'react';
import { connect } from 'react-redux';

// import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

// import './category.styles.scss';


const CollectionPage = ({ collection  }) => {
    console.log(collection); //      /shop/:categoryId = match.params.categoryId = { collection }
    return (
    <div className='collection-page'>
    <h2>COLLECTION PAGE</h2>
    </div>
)
};

const mapStateTopProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateTopProps)(CollectionPage);