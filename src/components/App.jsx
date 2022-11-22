import React from 'react';
import { AppBar } from './AppBar/AppBar';


export const App = () => {

  // componentDidMount() {
  //   const contacs = localStorage.getItem('contacs');
  //   const parsedContacs = JSON.parse(contacs);
  //   if (parsedContacs) {
  //     this.setState({ contacts: parsedContacs })
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacs) {
  //     localStorage.setItem('contacs', JSON.stringify(this.state.contacts))
  //   }
  // }


  return (
    <AppBar />
  )
}



