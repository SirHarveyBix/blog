import Layout from '/src/components/layout/Layout';
import GlobalStyle from '/src/components/GlobalStyle/index';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '/src/lib/apolloClient';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <Layout>
          <Head>
            <meta name="viewport" content={'width=device-width, initial-scale=1'} />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
