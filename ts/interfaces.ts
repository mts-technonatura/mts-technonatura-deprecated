//
interface User {
  name: string;
  email?: string;
  joined: Date;
}

interface pageProps {
  page: string;
}

export type { User, pageProps };
