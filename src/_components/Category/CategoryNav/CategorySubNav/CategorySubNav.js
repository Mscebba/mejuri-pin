import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { filterSubCategory } from 'redux/products/products-actions';
import { selectProductsItemsNav } from 'redux/products/products-selector';
import { createStructuredSelector } from 'reselect';

import classes from './category-subnav.module.scss';

function CategorySubNav({ filterSubCategory, NavItems }) {
  const [items, setItems] = useState([]);
  const [selectedItem, setselectedItem] = useState('');

  useEffect(() => {
    setItems(NavItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getSubCategory(id) {
    filterSubCategory(id);
    setselectedItem(id);
    window.scrollTo(0, 0);
  }

  let renderSubNav = items.map(({ name, id }) => (
    <div
      key={name}
      onClick={() => getSubCategory(id)}
      className={id === selectedItem ? classes['active'] : undefined}
    >
      {name}
    </div>
  ));

  return <nav className={classes['sub-categories-nav']}>{renderSubNav}</nav>;
}

const mapStateToProps = createStructuredSelector({
  NavItems: selectProductsItemsNav,
});
export default connect(mapStateToProps, { filterSubCategory })(CategorySubNav);
