import PropTypes from "prop-types";
import { FriendItem, FriendName, FriendStatus } from "./FriendListItem.styled";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem className="item">
      <FriendStatus status={isOnline} className="status"></FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName className="name">{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
