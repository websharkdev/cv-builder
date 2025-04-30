export const removeSpacing = (value: string) =>
  value.replace(/\s/g, '_').trim().toLocaleLowerCase();

export const replaceDashes = (value: string) => value.split('-').join('_');
