import { Box, Flex, Heading, Text, Button, Link, Grid, GridItem } from '@chakra-ui/react';
import heroImg from '../../public/home-hero.jpg';

export default function Hero() {
  return (
    <Box id="hero" bg="brand.bg" overflow="hidden">
      <Grid
        maxW="1600px" mx="auto"
        px={{ base: 5, md: 10 }}
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        minH={{ base: 'auto', md: 'calc(100vh - 68px)' }}
        alignItems="center"
        gap={8}
      >
        {/* Copy */}
        <GridItem py={{ base: 16, md: 0 }}>
          {/* Gold accent line */}


          <Heading
            as="h1"
            fontSize={{ base: '2.5rem', md: '3.25rem', lg: '4.75rem' }}
            lineHeight={1.12}
            fontWeight={300}
            color="brand.text"
            fontStyle="italic"
          >
            Um espaço seguro<br />
            para compreender,<br />
            elaborar e transformar.
          </Heading>
            <Box
            w="40px" h="1px"
            bg="brand.gold"
            mb={6}
          />
          <Text
            fontFamily="'Inter', sans-serif"
            fontSize={{ base: 'sm', md: 'md' }}
            color="brand.muted"
            mt={6} mb={9}
            maxW="40ch"
            lineHeight={1.8}
          >
            A psicanálise é um caminho de autoconhecimento que promove saúde
            emocional, clareza e escolhas mais alinhadas com quem você é.
          </Text>

          <Button
            as={Link} href="https://wa.me/5541987820288" isExternal
            variant="primary"
          >
            Agendar Consulta
          </Button>

          <Text
            fontFamily="'Manrope', sans-serif"
            fontSize="0.68rem"
            letterSpacing="0.1em"
            color="brand.muted"
            mt={4}
            textTransform="uppercase"
          >
            Atendimento online e presencial
          </Text>
        </GridItem>

        {/* Photo */}
        <GridItem
          display={{  md: 'flex' }}
          alignSelf="stretch"
          alignItems="center"
          justifyContent="center"
          className='hero-test'
        >
          <Box
         
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={2}
            color="brand.muted"
            fontSize="sm"
            position="relative"
            overflow="hidden"
          >
            <img src={heroImg} alt="Geisa Costa"
                 w="full" h="full" objectFit="cover" objectPosition="top"
                 borderRadius="0 0 0 140px" /> 
        
            

            {/* Gold corner accent */}
          
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}
