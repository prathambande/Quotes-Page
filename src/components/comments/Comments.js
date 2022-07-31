import { useCallback, useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from './CommentsList';
import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const {sendRequest, data, status, error} = useHttp(getAllComments, true);


  useEffect(() => { 
    sendRequest(props.quoteId);
  }, [props.quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  
  const onAddedComment = useCallback(() => {
    sendRequest(props.quoteId);
  }, [sendRequest, props.quoteId]);

  var comments;

  if(status === 'pending'){
    comments = <div className='centered'><LoadingSpinner/></div>
  }

  if(error){
    comments = <p>Error</p>
  }

  if(status === 'completed' && data){
    console.log(data);
    comments = <CommentsList comments={data} />
    if(data.length === 0){
      comments = <p>No Comments</p>
    }
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm id={props.quoteId} onAddedComment={onAddedComment}/>}
      {comments}
    </section>
  );
};

export default Comments;
