const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="WelcomeMessage">
      <h1>There are not posts</h1>;
      <button type="button" class="btn btn-primary" onClick={onGetPostsClick}>
        Get Posts from Server
      </button>
    </center>
  );
};

export default WelcomeMessage;
