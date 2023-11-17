import React from 'react';
import { getServerAuthSession } from "~/server/auth";
import TopBar from './_components/topbar';
import Footer from './_components/footer';
import Card from './_components/card';
import Link from 'next/link';
import MainContent from './_components/main-page-content';

export default async function Home() {
  const session = await getServerAuthSession();

  return (
    <React.Fragment>
      <TopBar />
      <MainContent />
      <Footer />
    </React.Fragment>
  );
}

