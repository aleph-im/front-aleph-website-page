// eslint-disable-next-line import/no-anonymous-default-export
export default {
  RequestTimeout: new Error('Request timed out'),
  RequestFailed: (cause: any) => new Error('Request failed', { cause }),
}
