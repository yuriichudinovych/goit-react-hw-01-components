import styled from "@emotion/styled";

export const StatsSection = styled.section`
  margin: 0 auto;
  margin-top: 50px;
  max-width: 500px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const StatsTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  padding: 20px;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 4);
  padding: 15px;
  background-color: ${({ label }) => {
    switch (label) {
      case ".docx":
        return "rgb(0, 0, 255, 0.5)";
      case ".pdf":
        return "rgb(138, 43, 226, 0.5)";
      case ".mp3":
        return "rgba(255, 0, 0, 0.5);";
      case ".psd":
        return "rgb(255, 255, 0, 0.5)";
    }
  }};
`;
