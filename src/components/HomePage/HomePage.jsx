import {
  HomeContainer,
  HomeSection,
  HomeTitle,
  TitleSpan,
} from './HomePage.styled';

export default function HomePage() {
  return (
    <HomeSection>
      <HomeContainer>
        <HomeTitle>
          Welcome to <br />
          <TitleSpan>P</TitleSpan>honebook
        </HomeTitle>
      </HomeContainer>
    </HomeSection>
  );
}
