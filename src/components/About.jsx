import { useState } from 'react';
import { Box, Grid, GridItem, Heading, Text, Button, Image, Collapse } from '@chakra-ui/react';
import aboutMe from '../../public/SOBREMIM.jpg';
import folhagem from '../../public/folhagem.png';

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <Box id="about" bg="brand.bg" py={{ base: 16, md: 24 }}>
      <Grid
        maxW="1600px"
        mx="auto"
        px={{ base: 5, md: 10 }}
        templateColumns={{ base: '1fr', md: '480px 1fr 320px' }}
        gap={{ base: 3, md: 6 }}
        alignItems="center"
      >
        {/* Photo */}
        <GridItem>
          <Box w="full" position="relative" overflow="hidden">
            <Image src={aboutMe} alt="Geisa Costa psi" w="full" h="full" objectFit="cover" />
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

          {/* Hidden/Expanded Content with Accessibility Properties */}
          <Collapse in={isExpanded} animateOpacity id="about-more-text">
            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="lg"
              color="brand.muted"
              lineHeight={1.85}
              mb={8}
              maxW="46ch"
            >
              Sou mestre e doutora em Psicanálise pela PUC-PR. Trabalho em consultório com escuta psicanalítica há mais de dez anos. <br></br>
              Minha atuação clínica é orientada pela escuta das singularidades de cada sujeito, considerando sua história, seus conflitos e os sentidos que atravessam sua experiência emocional.
              <br />
              Acredito na construção de um espaço ético, acolhedor e livre de julgamentos, onde seja possível elaborar questões, ampliar a compreensão de si e construir novas formas de existir.
            </Text>


            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="lg"
              color="brand.muted"
              lineHeight={1.85}
              maxW="46ch"
              fontWeight={'bold'}

            >
              DIFERENCIAIS:
            </Text>
            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="lg"
              color="brand.muted"
              lineHeight={1.85}
              mb={8}
              maxW="46ch"

            >
              <ul>
                <li> Atendimento individualizado</li>
                <li> Escuta ética e acolhedora</li>
                <li> Formação sólida em psicanálise</li>
                <li> Atendimento online e presencial</li>
              </ul>
            </Text>

          </Collapse>

          {/* Toggle Button */}
          <Button
            onClick={toggleExpand}
            variant="primary"
            aria-expanded={isExpanded}
            aria-controls="about-more-text"
            mt={!isExpanded ? 4 : 0}
          >
            {isExpanded ? 'Mostrar Menos' : 'Conhecer Mais Sobre Mim'}
          </Button>
        </GridItem>

        {/* Folhagem */}
        <GridItem display={{ base: 'none', md: 'flex' }} justifyContent="center" alignItems="center">
          <Image src={folhagem} alt="" w="full" h="full" objectFit="cover" />
        </GridItem>
      </Grid>
    </Box>
  );
}