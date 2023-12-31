import styled from 'styled-components';
import Icon from '@ant-design/icons';

export const FooterWrapper = styled.div`
  background-color: #e1e1e1;
  display: flex;
  margin-top: 50px;
  text-align: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  position:fixed;
  bottom:0;

  h1 {
    margin-top: 10px;
  }

  span {
    margin: 0 10px;
  }
`;

export const IconsWrapper = styled.div`
  margin: 10px 0;
`;

export const IconBase = styled(Icon)`
  font-size: 30px;
  color: ${({color}) => color};
`;

export const VerticalLine = styled.hr`
  width: 100%;
  border-bottom: none;
  border-top: 1px solid #EFEFF4;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledText = styled.p`
  margin-top: 15px;
  font-size: 18px;
  font-weight: 500;
`