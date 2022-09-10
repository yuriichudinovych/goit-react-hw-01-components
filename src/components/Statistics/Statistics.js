import PropTypes from "prop-types";

import {
  StatsSection,
  StatsTitle,
  StatsList,
  StatsItem,
} from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <StatsSection className="statistics">
      {title && <StatsTitle className="title">{title}</StatsTitle>}

      <StatsList className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatsItem label={label} key={id} className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </StatsItem>
        ))}
      </StatsList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  id: PropTypes.number,
  label: PropTypes.array,
  percentage: PropTypes.number,
};

export default Statistics;
