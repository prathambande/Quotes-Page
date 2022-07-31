import { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";


// const dummy_quotes = [
//     {id:'q1', author:'Pratham', text: 'SELF'},
//     {id:'q2', author:'Pratham', text: 'SELF SELF SELF'}
// ]

const AllQuotes = () => {

    const { sendRequest, status, data, error } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if(status === 'pending'){
        return <LoadingSpinner/>
    }

    if(error){
        return <p className="centered">{error}</p>
    }

    if(!data || data.length === 0){
        return (
            <NoQuotesFound />
        )
    }

    return (
        <QuoteList quotes={data}></QuoteList>
    )
}

export default AllQuotes;