"use client";

import React,{ useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signUrlParams?: Record<string, string> | null;
};

type Providers = Record<string, Provider>;

function AuthProviders() {
  const [providers, setProviders] = useState<Providers | null>(null);
  
  useEffect(() => {
    const fetchProviders = async () => {
        const res = await getProviders();
        console.log(res);
        setProviders(res);
    };

    fetchProviders();

  }, []);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider,i) => {
          return <button key={i} onClick={() => signIn(provider?.id)}>{provider.name}</button>;
        })}
      </div>
    );
  }
}

export default AuthProviders;
