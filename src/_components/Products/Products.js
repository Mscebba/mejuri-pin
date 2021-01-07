import React from 'react';
import { trackWindowScroll } from 'react-lazy-load-image-component';

import Product from '_components/Products/Product/Product';

function Products({ allProducts }) {
  return (
    <>
      {allProducts.map((item, i) => (
        <Product key={`${i}${item.id}`} item={item} />
      ))}
    </>
  );
}
// Export with hoc trackWindowScroll form 'react-lazy-load-image-component' for better performance
export default trackWindowScroll(Products);
