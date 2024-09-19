import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({onCancel, onAddPost}) {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function submitHandler (e) {
        e.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        onAddPost(postData);
        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={ changeBodyHandler }/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <textarea type='text' id="name" required onChange={ changeAuthorHandler }/>
            </p>
            <p className={classes.actions}>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;