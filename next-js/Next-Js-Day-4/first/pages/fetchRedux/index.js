import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  fetchQuotesRequest,  fetchQuotesSuccess,  fetchQuotesFailure,} from "./actions";

export default function Quotes() {
  const dispatch = useDispatch();
  const { quotes, loading, error } = useSelector((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchQuotesRequest());
      try {
        const response = await fetch(`https://dummyjson.com/quotes?limit=${10}`);
        const data = await response.json();
        dispatch(fetchQuotesSuccess(data.quotes));
      } catch (err) {
        dispatch(fetchQuotesFailure(err));
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Quotes</h1>
      <ul className="space-y-2">
        {quotes.map(({ id, quote, author }) => (
          <li key={id} className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="italic">"{quote}"</p>
            <p className="text-right text-sm text-gray-600">- {author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
