import styled from 'styled-components'

export const Logo = styled.div`
   display:flex;
   align-items:center;
   cursor: pointer;
   & img{
      width:50px;
      height:50px;
   }

   & span{
      font-size:23px;
      color:${({theme})=> theme.colors.primary};
   }
`;