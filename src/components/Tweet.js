import ProfileImage from "../components/ProfileImage";
import User from "../components/User";
import Timestamp from "../components/Timestamp";
import Message from "../components/Message";
import Actions from "../components/Actions";

function Tweet(props) {

  const {tweet} = props;

  return (
    <div className="tweet">
      <ProfileImage image={tweet.user.image} />

      <div className="body">

        <div className="top">

          <User userInfo={tweet.user}/>
          <Timestamp timestamp={tweet.timestamp}/>

        </div>

        <Message message={tweet.message}/>

        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
