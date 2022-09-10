import PropTypes from "prop-types";

import {
  PrifileContainer,
  DescriptionContainer,
  UserAvatar,
  Description,
  StatisticList,
  StatisticItem,
} from "./Profile.styled";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <PrifileContainer>
      <DescriptionContainer className="description">
        <UserAvatar src={avatar} alt="User avatar" className="avatar" />
        <Description className="name">{username}</Description>
        <Description className="tag">{tag}</Description>
        <Description className="location">{location}</Description>
      </DescriptionContainer>

      <StatisticList className="stats">
        <StatisticItem>
          <span className="label">followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatisticItem>
        <StatisticItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatisticItem>
        <StatisticItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatisticItem>
      </StatisticList>
    </PrifileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
