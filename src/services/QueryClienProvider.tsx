'use client';

import {
  QueryClient,
  QueryClientProvider as SinabroQueryClientProvider,
} from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { useState } from 'react';
import React from 'react';

interface Props {
  children: ReactNode;
}

const QueryClientProvider = ({ children }: Props) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <SinabroQueryClientProvider client={queryClient}>
      {children}
    </SinabroQueryClientProvider>
  );
};

export default QueryClientProvider;
