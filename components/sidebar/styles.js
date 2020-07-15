/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Container = styled.div`
   display:flex;
   width:200px;
   height:calc(100vh - 70px);
   background-color:${({theme})=> theme.colors.primary};
`