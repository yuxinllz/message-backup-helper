import { ReactElement } from 'react';
import NoMatch from '@/pages/404/NoMatch';

interface Route {
  path: string;
  element: ReactElement;
  private?: boolean;
}

export const routes: Route[] = [
  {
    path: '*',
    element: <NoMatch />,
    private: false
  }
];