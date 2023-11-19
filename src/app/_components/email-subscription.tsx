import { EmailSubscription } from '@prisma/client';
import { redirect } from 'next/navigation';
import React from 'react';
import { db } from '~/server/db';

enum EmailSubscriptionStatus {
  SUCCESS = 'success',
  EXISTS = 'exists',
  ERROR = 'error',
};

export function getEmailSubscriptionMessage(status: EmailSubscriptionStatus) {
  switch (status) {
    case EmailSubscriptionStatus.SUCCESS:
      return 'Successfully Subscribed!';
    case EmailSubscriptionStatus.ERROR:
      return 'Error Occurred While Subscribing';
    case EmailSubscriptionStatus.EXISTS:
      return 'Email is already subscribed';
  }
}

function EmailSubscription() {
  async function addEmailSubscription(data: FormData) {
    'use server';
    const email = data.get('email');
    let subscriptionStatus = '';

    if (typeof email === 'string') {
      try {
        const emails: EmailSubscription[] = await db.$queryRaw`SELECT id FROM EmailSubscription WHERE email = ${email};`;
        if (emails?.length > 0) {
          subscriptionStatus = 'exists';
          return;
        }
        await db.$executeRaw`INSERT INTO EmailSubscription (email) VALUES (${email});`;

        subscriptionStatus = 'success';
      } catch (e) {
        subscriptionStatus = 'error';
      } finally {
        redirect(`?esub=${subscriptionStatus}`);
      }
    };
  }

  return (
    <section className="bg-white">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Take Charge of Your Tomorrow
          </h2>

          <p className="hidden text-gray-500 sm:mt-4 sm:block">
            Join us now and take the first step towards a smarter, more efficient future. Your potential is unlimited; let's unlock it together.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action={addEmailSubscription} className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">Email</label>

              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-cyan-700"
              />
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-cyan-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-cyan-700 sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium"> Sign Up </span>

              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default EmailSubscription;
