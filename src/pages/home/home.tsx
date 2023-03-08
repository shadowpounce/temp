import React from 'react';
import { Whitelist, withWhitelist } from 'features/whitelist';
import { Header } from 'widgets/header';
import { Screens } from 'widgets/screens';

export const Home: React.FC = withWhitelist(() => {
  return (
    <>
      <Header />
      <Screens />
      <Whitelist />
    </>
  );
});
