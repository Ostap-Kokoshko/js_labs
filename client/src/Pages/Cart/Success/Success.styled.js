import styled from "styled-components";


export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 2rem auto;
  width: 50%;
  min-height: 87vh;

  Button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 200px;
    font-size: 20px;
    height: 60px;
  }
`

export const StyledDescription = styled.div `
  white-space: pre-line;
  text-align: center;
  font-size: 2rem;
  color: #333333;
`

export const StyledTitle = styled.div `
  font-size: 3rem;
  font-weight: 600;
  color: #333333;
`