import './index.css';

const defaultValue = "/~~~ Released! podcast ~~~/\n" +
  "\n" +
  "This is a podcast about technologies that have changed our lives and the people who invented them.<br />\n" +
  "We're surrounded by tech, so much so that we don't even realize how much it shapes our lives. But every gadget, every app, started as a wild idea in someone's head. In this podcast, I'll be diving deep into the stories behind some of the most groundbreaking innovations. We'll meet the inventors, learn about the hurdles they jumped, and discover how their creations changed the world.\n" +
  "\n" +
  "And hey, you might just get inspired to create something amazing yourself!"

const Notebook = ({ isOpened, setIsOpened }) => {

  return (
    <div className={`notebook ${!isOpened ? 'notebook_closed' : ''}`}>
      <button className="notebook__close-button" onClick={() => setIsOpened(false)}><span className="visually-hidden">Close</span></button>
      <label htmlFor="released" className="visually-hidden">"Released!" podcast description</label>
      <textarea name="release" id="released" cols="30" rows="10" className="notebook__textarea"
      defaultValue={defaultValue}/>
    </div>
  )
};

export default Notebook;
