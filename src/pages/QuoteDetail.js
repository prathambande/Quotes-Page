import { Fragment, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { useParams, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import Comments from '../components/comments/Comments'
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

// const dummy_quotes = [
//     {id:'q1', author:'Pratham', text: 'SELF'},
//     {id:'q2', author:'Pratham', text: 'SELF SELF SELF'}
// ]

const QuoteDetail = () => {
    const params = useParams();
    const quoteId = params.quoteId;
    //const {quoteId} = params;
    const match = useRouteMatch();
    //const quote = dummy_quotes.find(quote => quote.id === params.quoteId)

    const { sendRequest, status, data, error} = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    //console.log(match);

    if(status === 'pending'){
        return <div className="centered"><LoadingSpinner/></div>
    }

    if(error){
        return <p className="centered" >{error}</p>
    }

    if(!data.text){
        return(
            <HighlightedQuote text="404 Not Quotes like these" author="DEVS" />
        )
    }

    return (
    <Fragment>
        <h1>Quote Detail</h1>
        <HighlightedQuote text={data.text} author={data.author} />
        <Route path={`${match.path}`} exact>
            <div className="centered">
                <Link className='btn--flat' to={`${match.url}/comments`}>
                    Load Comments
                </Link>
            </div>
        </Route>
        <Route path={`${match.path}/comments`}>
            <Comments quoteId={quoteId}/>
        </Route>
    </Fragment>
    )
}

export default QuoteDetail;