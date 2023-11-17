import { redirect } from 'next/navigation';
import { getServerAuthSession } from '~/server/auth';

type RedirectOptions = {
  to: string;
};

export async function redirectWhenAuthenticated({ to }: RedirectOptions) {
  const session = await getServerAuthSession();

  if (session?.user) {
    redirect(to);
  }
}
