import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuotes = () => {
    const history = useHistory();
    const { sendRequest, status} = useHttp(addQuote);

    useEffect(() => {
        if(status === 'completed'){
            history.push('/quotes');
        }
    }, [status, history])

    const onAddQuote = (quoteData) => {
        sendRequest(quoteData);
    }

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={onAddQuote}/>
    )
}

export default NewQuotes;