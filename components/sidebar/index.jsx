import React from 'react';

 import { Container, Item, Indicator } from './styles';

function Sidebar() {
  return (
    <Container>
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