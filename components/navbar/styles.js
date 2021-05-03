import styled from 'styled-components';


export const Wrapper = styled.nav`
   display:flex;
   width:100%;
   height:auto;
   overflow:hidden;
   justify-content:center;
   align-items:center;
   flex-direction: row;
   align-items: center;
   border-bottom: 1px solid ${({theme})=> theme.colors.border};
   position:fixed;
   background-color: ${({theme})=>theme.colors.background};
   z-index:1;
   flex-direction:column;
`;

export const Container = styled.div`
   display:flex;
   width:100%;
   height:60px;
   overflow:hidden;
   justify-content:space-between;
   align-items:center;
   padding:5px 0px 5px 20px;
   max-width:1440px;
`;

export const ActionButtons = styled.div`
   display:flex;
   justify-content:space-around;
   align-items:center;
   margin:0 10px;
`;

export const Button = styled.button`
   border-radius:50%;
   border:none;
   cursor: pointer;
   width:40px;
   height:40px;
   outline:none;
   background-color:transparent;
   display:flex;
   align-items:center;
   justify-content:center;

   & svg{
      fill:${({theme})=> theme.colors.primary};
      width:21px;
      height:21px;
   }

   &:hover{
      background-color:${({theme})=>theme.colors.border};
   }

   & + button{
      margin:5px;
   }
`;

export const MenuButton = styled(Button)`
   border:1px solid ${({theme})=> theme.colors.border};

   @media (min-width:989px){
      display:none;
   }
`

export const Links = styled.div`
   display:flex;
   justify-content:start;
   align-items:center;
   width:100%;
   padding-left:40px;

   a{
      padding:0 20px;
      text-decoration:none;
      font-weight:600;

      &:hover{
         color:${({theme})=> theme.colors.primary};
      }
   }

   @media (max-width:600px){
      display:none;
   }
`

export const MobileLink = styled.div`
   display:flex;
   flex-direction:column;
   width:100%;
   justify-content:flex-end;
   align-items:center;
   background-color:#ffffff;
   height:${({isOpen})=> isOpen? 60:10}px;

   @media (min-width:600px){
      display:none;
   }

   div{
      display:${({isOpen})=> isOpen? 'flex':'none'};
      width:100%;
      justify-content:start;
      padding: 0 20px 0 22px;

      a{
         text-decoration:none;
         padding-right:20px;
         font-weight:600;
         
         &:hover{
            color:${({theme})=> theme.colors.primary};
         }
      }
   }

   button{
      bottom:0;
      cursor:pointer;
      background-color:transparent;
      border:none;
   }
`