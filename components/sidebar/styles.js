/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const SubList = styled.div`
  position: fixed;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  padding-top: 20px;
  position: sticky;
  overflow:auto;
  top:60px;
  transition: margin-left 0.5s ease-in-out;
  width: 240px;
  color: ${({ theme }) => theme.colors.textColor};
`

export const Container = styled.aside`
  position: fixed;
  display: flex;
  height: calc(100vh - 60px);
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  flex-direction: column;
  padding-top: 20px;
  position: sticky;
  overflow:auto;
  top:60px;
  transition: margin-left 0.5s ease-in-out;
  margin-left: ${({ open }) => (open ? 0 : '-240px')};
  width: 240px;
  color: ${({ theme }) => theme.colors.textColor};
`

export const Indicator = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.textColor};
  margin: 3px;
`

export const Item2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 30px;
  font-weight:600;
  &:hover{
    cursor:pointer;
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 30px;

  & a {
    display: flex;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.border};
    a {
      color: ${({ theme }) => theme.colors.primary};
      font-weight:600;
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
      font-weight:600;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
