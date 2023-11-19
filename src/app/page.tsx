import React from 'react';
import TopBar from './_components/topbar';
import Footer from './_components/footer';
import MainContent from './_components/main-page-content';
import EmailSubscription, { getEmailSubscriptionMessage } from './_components/email-subscription';
import { ToastProvider } from './_components/toast-provider';

export default async function Home({ searchParams }) {
  const initialToastMessage = getEmailSubscriptionMessage(searchParams.esub);
  return (
    <ToastProvider initialToastProps={{ message: initialToastMessage }}>
      <TopBar />
      <MainContent />
      <EmailSubscription />
      <Footer />
    </ToastProvider>
  );
}

