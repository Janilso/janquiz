import styled from 'styled-components';

const Widget = styled.div`
  margin: 2rem 0;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
  }
  .image-question {
    height: 150px;
    width: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 2rem;
  .title {
    font-size: 16px;
    line-height: 19px;
  }
  .subtitle {
    font-size: 12px;
    line-height: 14px;
  }

  & > *:first-child {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  & > *:nth-child(2) {
    margin-bottom: 1.5rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
