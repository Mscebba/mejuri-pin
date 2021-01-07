import { createSelector } from 'reselect';

const selectProducts = (state) => state.products;

export const selectProductsSelector = createSelector(
  [selectProducts],
  (products) => products
);

export const selectProductsItems = createSelector(
  [selectProducts],
  (products) => products.productItems
);

export const selectProductsItemsAll = createSelector(
  [selectProducts],
  (products) => {
    let { productItems } = products;
    const { subcategory } = products;

    if (subcategory) {
      productItems = productItems.filter((item) => item.id === subcategory);
    }

    return productItems.reduce(
      (result, category) => [...result, ...category.products],
      []
    );
  }
);

export const selectProductsItemsNav = createSelector(
  [selectProductsItems],
  (productItems) => productItems.map(({ name, id }) => ({ name, id }))
);
