import styled from 'styled-components'

export const Wrapper = styled.div`
   display:flex;
   justify-content:space-between;
   padding : 50px 0 0 0;

   a{
      color:${({ theme }) => theme.colors.textColor};
      text-decoration:none;
      font-weight:600;
      display:flex;
      align-items: center;
      &:hover{
         color:${({ theme }) => theme.colors.primary};
      }
   }
`