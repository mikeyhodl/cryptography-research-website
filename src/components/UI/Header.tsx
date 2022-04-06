import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import EFlogo from '../../../public/images/ef-logo.png';

import { HOME_URL } from '../../constants';
import { Nav } from '../Nav';

export const Header: FC = () => {
  const router = useRouter();

  return (
    <header>
      <Flex justifyContent='space-between' px={{ base: 6, md: 8 }} pt={6}>
        <Box mr={{ base: 8, md: 0 }} onClick={() => router.push(HOME_URL)} cursor='pointer'>
          <Image src={EFlogo} alt='Ethereum Foundation logo' height={50} width={146.66} />
        </Box>

        <Nav />
      </Flex>
    </header>
  );
};