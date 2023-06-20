import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  
  > header {
    width: 100%;
    height: 144px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0px;

  > div:nth-child(3) {
    margin-bottom: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  width: 186px;
  height: 186px;

  margin: -124px auto 32px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    width: 50px;
    height: 50px;

    background-color: ${({theme})=> theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`