import { useState } from 'react';
import PostList from './components/PostList';
import MainHeader from './components/MainHeader';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function hideModalHnadler() {
    setModalIsVisible(false);
  }

  function showModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHnadler}
          />
      </main>
    </>
  );
}


export default App;
