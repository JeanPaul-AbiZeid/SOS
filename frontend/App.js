import React from 'react';
import UserProvider from './hooks/UserProvider';
import Switcher from './components/Switcher';

export default function App() {
  return (
    <UserProvider>
      <Switcher/>
    </UserProvider>
  );
}

