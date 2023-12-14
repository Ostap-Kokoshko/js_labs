import styled from "styled-components";

export const StyledInput = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;
  label {
    font-size: 2rem;
    color: #333333;
  }
  input {
    height: 2.5rem;
    font-size: 1.2rem;
    border: 0.1rem darkgray solid;
    border-radius: 0.5rem;
    padding-left: 0.5rem;
  }
  .input-error {
    border: 0.1rem red solid;
    border-radius: 0.6rem;
  }
  .error {
    font-size: 1rem;
    color: red;
  }
`