export type ApiRequest = {
    url : string,
    params ?: Map<string, string | number | boolean | readonly (string | number | boolean)[]>;
  }