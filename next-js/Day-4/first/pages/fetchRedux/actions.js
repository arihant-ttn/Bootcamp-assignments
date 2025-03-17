export const fetchQuotesRequest = () => ({ type: 'FETCH_QUOTES_REQUEST' });
export const fetchQuotesSuccess = (quotes) => ({
  type: 'FETCH_QUOTES_SUCCESS',
  payload: quotes,
});
export const fetchQuotesFailure = (error) => ({
    type: 'FETCH_QUOTES_FAILURE',
    payload: error,
});
