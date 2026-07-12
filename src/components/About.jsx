import { Box, Grid, GridItem, Heading, Text, Button, Link, Image } from '@chakra-ui/react';
import aboutMe from '../../public/SOBREMIM.jpg';
import folhagem from '../../public/folhagem.png';

export default function About() {
  return (
    <Box id="about" bg="brand.bg" py={{ base: 16, md: 24 }}>
      <Grid
        maxW="1600px" mx="auto"
        px={{ base: 5, md: 10 }}
        templateColumns={{ base: '1fr', md: '480px 1fr 320px' }}
        gap={{ base: 3, md: 6 }}
        alignItems="center"
      >
        {/* Photo */}
        <GridItem>
          <Box w="full" position="relative" overflow="hidden">
            <Image src={aboutMe} alt="Geisa Costa" w="full" h="full" objectFit="cover" />
          </Box>
        </GridItem>

        {/* Copy */}
        <GridItem px={{ base: 0, md: 6 }}>
          <Box w="32px" h="1px" bg="brand.gold" mb={5} />

          <Text
            fontFamily="'Manrope', sans-serif"
            fontSize="0.90rem"
            fontWeight="600"
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="brand.muted"
            mb={3}
          >
            Sobre Mim
          </Text>

          <Heading
            as="h2"
            fontSize={{ base: '2.5rem', md: '3.75rem', lg: '4.75rem' }}
            fontWeight={300}
            lineHeight={1.15}
            mb={5}
            fontStyle="italic"
          >
            Prazer, sou<br />Geisa Costa
          </Heading>

          <Text
            fontFamily="'Inter', sans-serif"
            fontSize="lg"
            color="brand.muted"
            lineHeight={1.85}
            mb={8}
            maxW="46ch"
          >
            Sou psicóloga, psicanalista, mestre e doutora em Psicanálise pela PUC-PR.
            Acredito que cada história é única e merece ser ouvida com respeito,
            atenção e sensibilidade.
          </Text>

          <Button as={Link} href="#contato" variant="primary">
            Conhecer Mais Sobre Mim
          </Button>
        </GridItem>

        {/* Folhagem */}
        <GridItem display={{ base: 'none', md: 'flex' }} justifyContent="center" alignItems="center">
          <Image src={folhagem} alt="" w="full" h="full" objectFit="cover" />
        </GridItem>
      </Grid>
    </Box>
  )
}