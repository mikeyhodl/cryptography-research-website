import { Heading, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';

import { Event, PageMetadata } from '../components/UI';

const Events: NextPage = () => {
  return (
    <>
      <PageMetadata
        title='Events'
        description='View upcoming and past cryptography events in the Ethereum ecosystem.'
      />

      <main>
        <Heading as='h1' mb={10}>
          Events
        </Heading>

        <Stack mb={6} spacing={8}>
        <Event
            conference='Cryptographic Resilience 2023, Istanbul'
            workshop='Cryptographic resilience within Ethereum at Devconnect 2023'
            url='https://sites.google.com/view/cryptographicresilience/home'
          >
            Ethereum is increasingly reliant on cryptography.  To date we are actively using hash functions, EC-DSA signatures, BLS signatures, and we will be using polynomial commitments after the Cancun-Deneb upgrade.

            This workshop highlights the current and future suggestions for cryptographic uses and questions how best to ensure Ethereum remains resilient to cryptographic attacks.  We will cover a large spectrum of topics, such as quantum resilience, long term privacy assurance, threshold cryptography and fuzzing mindsets.  We will hear from top researchers and practitioners both inside and outside of the Ethereum ecosystem.
          </Event>

          <Event
            conference='MinRoot VDF event 2023, Lyon'
            workshop='Analysis of candidate sequential function MinRoot'
            url='/events/minrootanalysis2023.pdf'
          >
            Between April 28th and 30th, 2023, the Ethereum Foundation invited a group of
            researchers to conduct an initial analysis of the candidate sequential function MinRoot.
            The purpose of this gathering was to collectively delve into the intricacies of MinRoot
            and assess its potential implications for the Ethereum ecosystem. Preliminary analysis
            was conducted by Gaetan Leurent, Maria Naya Plasencia, and Stefano Tessaro. At the
            event, the researchers were divided into three groups, each tasked with different
            aspects of MinRoot's evaluation. The resulting report serves as a comprehensive joint
            summary, presenting the culmination of the researchers' intensive efforts during the
            event.{' '}
            <strong>
              <a href='/events/minrootanalysis2023.pdf'>Report (PDF, 18 September 2023)</a>
            </strong>
            .
          </Event>
          <Event
            conference='Cryptographic Frontier 2022, Trondheim'
            workshop='Open problems in decentralized computation at Eurocrypt 2022'
            url='https://sites.google.com/view/cryptographic-frontier-2022/'
          >
            this workshop brings the most interesting and challenging open cryptographic questions
            that Ethereum, Filecoin and other blockchain systems face, to the attention of academia.
            We will cover a large spectrum of research topics, such as vector commitments, SNARKs,
            shuffles, authenticated data structures and more. We will start the day with an update
            on to the problems discussed at last year&apos;s workshop.
          </Event>

          <Event
            conference='Cryptographic Frontier 2021, Zagreb'
            workshop='Open problems in Ethereum Research at Eurocrypt 2021'
            url='https://sites.google.com/view/cryptofrontier21'
          >
            this workshop brought the most interesting and challenging open cryptographic questions
            that Ethereum faces to the attention of academia. We covered a large spectrum of
            research topics, such as multisignatures, commitments, verifiable delay functions,
            secure computation, zk-friendly hash functions and more.
          </Event>
        </Stack>
      </main>
    </>
  );
};

export default Events;
