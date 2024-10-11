export const itemsToDelete = (itemsFromDB: any, valuesFromForm: any) => {
  return itemsFromDB.filter((elt: any) => {
    return !valuesFromForm.some((elt2: any) => elt2.id === elt.id);
  });
};
