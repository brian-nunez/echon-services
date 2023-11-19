import React from 'react';
import TopBar from '../_components/topbar';
import MainContent from './_components/main-page-content';
import Footer from '../_components/footer';
import { getServerAuthSession } from '~/server/auth';
import WelcomeBack from './_components/welcome-back-header';

async function Products() {
  const session = await getServerAuthSession();

  return (
    <React.Fragment>
      <TopBar />
      {session?.user?.name && (
        <WelcomeBack username={session.user.name} />
      )}
      <MainContent />
    </React.Fragment>
  );
}

export default Products;
