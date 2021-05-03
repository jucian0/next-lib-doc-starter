import styled from 'styled-components'

export const Aside = styled.aside`
  position: fixed;
  display: flex;
  height: calc(100vh - 60px);
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  flex-direction: column;
  padding: 20px;
  position: sticky;
  overflow:auto;
  top:60px;
  transition: margin-left 0.5s ease-in-out;
  margin-left: ${({ open }) => (open ? 0 : '-260px')};
  width: 260px;
  color: ${({ theme }) => theme.colors.textColor};

  ul{
    padding-left:0px;
  }
  li{
    margin:15px;
  }
`

export const Items = styled.ul`

`

export const Item = styled.li`
  list-style:none;
  cursor:pointer;
  & span{
    font-weight:600;
    font-size:1.2em;
  }
`

export const SubItems = styled.ul`
 /* padding-top:20px;
 padding-left:10px;
 padding-bottom:0; */
  /* position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  padding-top: 20px;
  overflow:auto;
  transition: margin-left 0.5s ease-in-out;
  color: ${({ theme }) => theme.colors.textColor}; */
`

export const Indicator = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.textColor};
  margin: 3px;
`

export const SubItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;

  &:hover{
     cursor:pointer;
  }

  & a {
    display: flex;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
  }
   
  &.active {
    background-color: ${({ theme }) => theme.colors.border};
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
    ${Indicator} {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
   
  &:hover {
    ${Indicator} {
      background-color: ${({ theme }) => theme.colors.primary};
    }
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

`

// export const SubList = styled.div`
//   position: fixed;
//   display: flex;
//   flex-shrink: 0;
//   flex-direction: column;
//   padding-top: 20px;
//   position: sticky;
//   overflow:auto;
//   top:60px;
//   transition: margin-left 0.5s ease-in-out;
//   color: ${({ theme }) => theme.colors.textColor};
// `


// export const Item2 = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   padding: 15px 30px;
//   font-weight:600;
//   &:hover{
//     cursor:pointer;
//   }
// `

// export const Item = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   padding: 15px 30px;

//   & a {
//     display: flex;
//     cursor: pointer;
//     font-size: 16px;
//     font-weight: 400;
//     text-decoration: none;
//     color: ${({ theme }) => theme.colors.textColor};
//   }

//   &.active {
//     background-color: ${({ theme }) => theme.colors.border};
//     a {
//       color: ${({ theme }) => theme.colors.primary};
//       font-weight:600;
//     }
//     ${Indicator} {
//       background-color: ${({ theme }) => theme.colors.primary};
//     }
//   }

//   &:hover {
//     ${Indicator} {
//       background-color: ${({ theme }) => theme.colors.primary};
//     }
//     a {
//       font-weight:600;
//       color: ${({ theme }) => theme.colors.primary};
//     }
//   }
// `
