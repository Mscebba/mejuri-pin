import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { categories } from 'utils/categories';
import CategorySubNav from '_components/Category/CategoryNav/CategorySubNav/CategorySubNav';

import classes from './category-nav.module.scss';

function CategoryNav({ match }) {
  const id = match.params.id;
  return (
    <nav className={classes['category-nav']}>
      <Link to='/'>Shop all</Link>
      {/* Creating main categories from categories.js */}
      {categories.map(({ name, slug }) => (
        <React.Fragment key={name}>
          <Link
            to={`/category/${slug}`}
            className={slug === id ? classes['active'] : undefined}
          >
            {name}
          </Link>
          {/* append subcategories below main category when selected */}
          {slug === id && <CategorySubNav />}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default withRouter(CategoryNav);
