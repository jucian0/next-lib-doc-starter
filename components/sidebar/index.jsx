/* eslint-disable react/prop-types */
import React from 'react';

 import { Container, Item, Indicator } from './styles';

function Sidebar({open}) {
  return (
    <Container open={open}>
      <Item>
        <Indicator />
        <span>
          First Link
        </span>
      </Item>
      <Item>
        <Indicator />
        <span>
          Second Link
        </span>
      </Item>
      <Item>
        <Indicator />
        <span>
          Third Link
        </span>
      </Item>
    </Container>
  );
}

export default Sidebar;