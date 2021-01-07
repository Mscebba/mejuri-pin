export const toggleToFavorites = (items, itemToAdd) => {
  const existingItem = items.find((item) => item.id === itemToAdd.id);
  if (existingItem) {
    return items.filter((item) => item.id !== existingItem.id);
  }
  return [...items, { ...itemToAdd }];
};
