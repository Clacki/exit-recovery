"use client";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  // TODO: Add app-wide client providers here as they are restored.
  // Examples: RecoilRoot, ApolloProvider, Emotion CacheProvider.
  return <>{children}</>;
}
