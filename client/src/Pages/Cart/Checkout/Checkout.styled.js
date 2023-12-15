import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    margin: 2rem auto;
    width: 90%;
    min-height: 87vh;
    Form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }
    .inputs {
        display: flex;
        flex-direction: column;
        width: 60%;
        align-items: center;
        gap: 1rem;
    }
    .small-inputs {
        display: flex;
        gap: 2rem;
        width: 100%;
    }
`

export const CheckoutTitle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #333333;
`

export const ButtonsStyled = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 100px;
`