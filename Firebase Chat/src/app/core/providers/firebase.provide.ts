import { EnvironmentProviders, Provider } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const provideFirebase = (): Array<Provider | EnvironmentProviders> => {
  const providers: Array<Provider | EnvironmentProviders> = [
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'xxxxx',
        appId: 'xxxxx',
        storageBucket: 'xxxxx',
        apiKey: 'xxxxx',
        authDomain: 'xxxxx',
        messagingSenderId: 'xxxxx',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
  ];

  return providers;
};
