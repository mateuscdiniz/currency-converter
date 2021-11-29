import styled from 'styled-components';

export const App = styled.div({
  height: '87vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: '120px',
  backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
});

export const Heading = styled.div({
  fontFamily: 'Pacifico, cursive',
  fontSize: '35px',
});

export const Container = styled.div({
  height: '100px',
  width: '800px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

export const Input = styled.input({
  paddingLeft: '5px',
  fontSize: '20px',
  height: '36px',
});

export const From = styled.div({
  width: '120px',
});

export const To = styled.div({
  width: '120px',
});

export const Switch = styled.div({
  padding: '5px',
  marginTop: '60px',
  backgroundColor: 'rgb(226, 252, 184)',
  borderRadius: '50%',
  cursor: 'pointer',
});

export const Result = styled.div({
  marginLeft: '70px',
  boxSizing: 'border-box',
  width: '800px',
  marginTop: '50px',
});

export const Button = styled.div({
  paddingLeft: '25px',
  width: '100px',
  height: '30px',
  fontWeight: 'bold',
  fontSize: '20px',
  border: '2px solid green',
  cursor: 'pointer',
  color: 'green',
});

export const TextStyled = styled.p({
  fontSize: '30px',
  color: 'green',
});
