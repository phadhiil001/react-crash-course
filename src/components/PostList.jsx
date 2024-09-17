import Post from './Post';
import classes from './PostList.module.css';

function PostList () {
    return (
        <ul className={classes.posts}>
            <Post author="Fadlullah" body="React Js" />
            <Post author="Jamiu" body="Welcome back"/>
            <Post author="Imam" body="Nice one" />
            <Post author="Umar" body="Bin Khattab"/>
        </ul> 
    );
}

export default PostList;