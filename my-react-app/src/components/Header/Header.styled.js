import styled from 'styled-components';
import Icon from '@ant-design/icons';

export const StyledHeader = styled.div`
  background-color: #e1e1e1;
  padding: 16px 0 4px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  table-layout: fixed;
  border-spacing: 10px;

  > div {
    display: flex;
  }

  p {
    font-size: 20px;
    margin: auto;
  }

  span {
    font-size: 24px;
  }

  .logo {
    display: flex;
    align-items: center;
    margin-top: -5px;

    p {
      font-size: 1.5rem;
      margin-left: -5px;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    margin-top: -5px;
    a {
      text-decoration: none;
      margin-right: 10px;
      font-size: 1.25rem;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    margin-top: -5px;
  }
`;

export const IconsWrapper = styled.div`
    display: flex;
    padding: 7px;
    > span {
        margin: 0 12px;
    }
`;

export const IconBase = styled(Icon)`
    font-size: 24px;
    color: ${({color}) => color};
    margin-left: 15px;
    display: flex;
    justify-content: space-around;
`;

