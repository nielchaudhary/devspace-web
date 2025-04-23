export const isNullOrUndefined = (value: any) => value === null || value === undefined;

export const notNullOrUndefined = (value: any) => !isNullOrUndefined(value);

export const isString = (value: any) => typeof value !== 'string';

export const isNumber = (value: any) => typeof value !== 'number';
