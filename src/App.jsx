import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
  // background-color: rgba(255,255,200,1);  
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 3px 3px 3px rgba(0,0,0,.1);
  width: 300px;
  margin: 30px auto;
  padding: 8px;
`;

function App() {
  return (
    <Main>
      <Card>
      {`Hello People`}
      </Card>
    </Main>
  );
}

export default App;