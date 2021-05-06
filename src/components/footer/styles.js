import styled from 'styled-components'

export const Container = styled.footer`
  border-top: 1px solid ${({theme})=> theme.colors.border};
  background: ${({theme})=> theme.colors.dark};
  position: sticky;
  width:100%;
  display:flex;
  justify-content:center;
`

export const FooterContent = styled.div`
display:grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(3,auto); 
  column-gap: 10px;
  row-gap:10px;
  width:100%;
  overflow:hidden;
  padding:20px 10px;
  max-width:1440px;
  a{
    color:${({theme})=> theme.colors.textColor};
    text-decoration:none;
    &:hover{
      color:${({theme})=> theme.colors.primaryHover};
    }
  }
`

export const FooterInformation = styled.div`
  color:${({theme})=> theme.colors.textColor};
  width:100%;
  margin-top:10px;
  padding:0 15px;
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  flex-direction:column;
`

export const FooterLogo = styled.div`
  width:100%;
  display:flex;
  justify-content:start;
  align-items:flex-start;
  flex-direction:column;
  padding:15px 10px;

  .footer-text{
    margin-top:10px;
      color:${({theme})=> theme.colors.textColor};
  }
`