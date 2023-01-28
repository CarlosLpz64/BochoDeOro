export const SPACE = /\s+/;
export const NONALPHANUMERIC = /[^\w]/;
export const ALPHANUMERICACCENT = /[^\w]/u;
export const NONALPHANUMERICNORSPACE = /[^\w\s]/gi;
export const NONALPHANUMERICLIST = /[,¡!.?\s\n'"'*]/g;
export const NUMBER = /(^\d+$)/;
export const CURRENCY = /(^\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\.[0-9][0-9])?$)/;
export const TELEPHONE = /(^\d{10}$)/;