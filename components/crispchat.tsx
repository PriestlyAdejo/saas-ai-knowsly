'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('3ce420af-3495-400c-9dc7-3f27d4a2a870');
  }, []);

  return null;
};
