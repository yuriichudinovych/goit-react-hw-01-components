import PropTypes from "prop-types";

import {
  ListOfFriends,
  FriendItem,
  FriendName,
  FriendStatus,
} from "./FriebdList.styled";

const FriendList = ({ friends }) => {
  return (
    <ListOfFriends className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id} className="item">
          <FriendStatus status={isOnline} className="status"></FriendStatus>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <FriendName className="name">{name}</FriendName>
        </FriendItem>
      ))}
    </ListOfFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendList;
