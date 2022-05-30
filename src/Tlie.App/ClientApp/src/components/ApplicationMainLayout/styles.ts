import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 72px auto 127px;
  justify-items: stretch;
  align-items: stretch;
`

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 48px;
  background: #fff;
  box-shadow: 0px 1px 2px rgba(53, 53, 53, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    font-size: 12px;
    line-height: 18px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
  }

  & > div div {
    font-size: 14px;
    line-height: 21px;
    font-weight: 700;
    display: flex;
    align-items: center;
    color: #3D6666;
    gap: 5px;
  }
`

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #E5E5E5;
`

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 630px;
    height: 100%;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const FooterColumn = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7B7C82;
    font-size: 10px;
    line-height: 16px;
    font-weight: 700;
  }
  
  & strong {
    font-size: 14px;
    font-weight: 900;
    line-height: 21px;    
    color: #353744;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  & hr {
    border: 1px solid #C8C8C8;
    height: 1px;
    width: 90%;
    background-color: #C8C8C8;
  }

  & a {
    text-decoration: none;
    color: #7B7C82;
    border-bottom: 1px solid #7B7C82;
  }

  & a + a {
    margin-left: 24px;
  }
`