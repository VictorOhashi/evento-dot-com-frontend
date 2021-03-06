import Head from 'next/head';

import { FadeIn } from '../components';
import SearchEvento from '../containers/SearchEvento';
import PageContainer from '../containers/PageContainer';

const Eventos = () => {
  return (
    <>
      <Head>
        <title>Evento.com - Eventos</title>
      </Head>
      <FadeIn orientation="right-to-left">
        <PageContainer>
          <SearchEvento />
        </PageContainer>
      </FadeIn>
    </>
  );
};

export default Eventos;
