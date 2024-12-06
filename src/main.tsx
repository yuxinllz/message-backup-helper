import { createRoot } from 'react-dom/client'
import React from 'react';
import { Auth0Provider, AppState } from '@auth0/auth0-react';

import App from './App.tsx'
import './index.css'
import '@/styles/main.scss'
import ErrorBoundary from './errorhandler/ErrorBoundary'

declare const AUTH0_DOMAIN: string;
declare const AUTH0_CLIENT_ID: string;

const onRedirectCallback = (appState?: AppState): void => {
    window.history.replaceState(
      {},
      document.title,
      appState?.returnTo || window.location.pathname
    );
  };
  
const providerConfig = {
    domain: AUTH0_DOMAIN,
    clientId: AUTH0_CLIENT_ID,
    authorizationParams: {
        redirect_uri: window.location.origin,
    },
    onRedirectCallback,
};

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <Auth0Provider {...providerConfig} >
                <App />
            </Auth0Provider>
        </ErrorBoundary>
    </React.StrictMode>
);
