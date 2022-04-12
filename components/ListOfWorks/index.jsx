import { Grid, NewContainer, VideoContainer } from "./styles";
import styled from "styled-components";

const Spacing = styled.div`
  margin-left: 5%;
  width: min(1200px, 13.5555%) !important;
  @media (max-width: 1888px) {
    width: min(1200px, 5%) !important;
  }
  @media (max-width: 1579px) {
    width: min(250px, 1%) !important;
  }
  @media (max-width: 1070px) {
    display: none;
  }
`;

const ListOfWorks = ({ workSection, setIsOpen, setModalWork }) => {
  const handleWorkClick = (work) => {
    setIsOpen(true)
    setModalWork(work)
  }

  return (
    <NewContainer>
      <Spacing className="works-spacing" />
      <Grid>
        {workSection?.length > 0 ? (
          workSection?.map((work) => (
            <VideoContainer key={work?.sys?.id} onClick={() => handleWorkClick(work)}>
              <img src={work?.workImage?.url} alt={work?.title} />
              <div>
                <h3>{work?.title}</h3>
                <span>{work?.client}</span>
              </div>
            </VideoContainer>
          ))
        ) : (
          <span>{`Were sorry, there is no content in "${workSection}" section`}</span>
        )}
      </Grid>
      <div className="_3" />
    </NewContainer>
  );
};

export default ListOfWorks;
