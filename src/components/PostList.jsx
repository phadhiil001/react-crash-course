import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import Modal from './Modal'
import classes from './PostList.module.css';

function PostList () {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function hideModalHnadler() {
        setModalIsVisible(false);
    }

    return (
        <>
        {modalIsVisible && 
            (<Modal onClose={hideModalHnadler}>
                <NewPost 
                    onBodyChange={changeBodyHandler}  
                    onAuthorChange={changeAuthorHandler} 
                />
            </Modal>
        )}
            
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Jamiu" body="Welcome back"/>
                <Post author="Imam" body="Nice one" />
                <Post author="Umar" body="Bin Khattab"/>
            </ul> 
            
        </>
    );
}

export default PostList;