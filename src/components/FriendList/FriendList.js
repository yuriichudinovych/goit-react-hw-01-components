import PropTypes from "prop-types";

import FriendListItem from "../FriendListItem/FriendListItem";

import { ListOfFriends } from "./FriebdList.styled";

const FriendList = ({ friends }) => {
  return (
    <ListOfFriends className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ListOfFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
