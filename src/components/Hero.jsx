import { Box, Heading, Text, Button, Link, Grid, GridItem } from '@chakra-ui/react';
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
            mb={6} mt={4}
          />

          <Text
            fontFamily="'Inter', sans-serif"
            fontSize={{ base: 'sm', md: 'md' }}
            color="brand.muted"
            mt={6} mb={4}
            maxW="55ch"
            lineHeight={1.8}
          >
            Nem tudo o que nos atravessa pode ser explicado de imediato. A psicanálise é um encontro com aquilo que, muitas vezes, permaneceu em silêncio por tempo demais, é um convite para olhar com mais delicadeza para a própria história.
          </Text>


          <Text
            fontFamily="'Inter', sans-serif"
            fontSize={{ base: 'sm', md: 'md' }}
            fontWeight={'bold'}
            color="brand.muted"
            mt={6} mb={9}
            maxW="55ch"
          >

            Há histórias que se transformam quando encontram escuta. Me conte a sua…   </Text>

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
            Atendimento on-line (Brasil e exterior) e presencial em Joinville/SC

          </Text>


          <Text
            fontFamily="'Manrope', sans-serif"
            fontSize="0.88rem"
            letterSpacing="0.1em"
            color="brand.muted"
            mt={4}
          >
            <strong>Abordagem: </strong>
            Psicanálise


          </Text>




          <Text
            fontFamily="'Manrope', sans-serif"
            fontSize="0.88rem"
            letterSpacing="0.1em"
            color="brand.muted"
            mt={4}
          >
            <strong>    Propósito:  </strong>
            Acolher sua história e caminhar ao seu lado na construção de uma vida mais alinhada ao seu desejo.


          </Text>

        </GridItem>

        {/* Photo */}
        <GridItem
          display={{ base: 'flex', md: 'flex' }}
          alignSelf="stretch"
          alignItems="center"
          justifyContent="center"
          className="hero-test"
          position="relative"
          minH="calc(100vh - 68px)"
        >
          <Box
            position="absolute"
            inset={0}
            overflow="hidden"
          >
            <img
              src={heroImg}
              alt="Geisa Costa"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center',
                display: 'block',
              }}
            />

            {/* Fade LEFT */}
            <Box
              position="absolute"
              top={0} left={0}
              w="35%" h="100%"
              bg="linear-gradient(to right, #F6F1EE 10%, transparent 100%)"
              pointerEvents="none"
            />

                {/* Fade TOP (Mobile Only) */}
            <Box
              position="absolute"
              top={0} left={0}
              w="100%" h={{ base: '25%', md: '0%' }}
              display={{ base: 'block', md: 'none' }}
              bg="linear-gradient(to bottom, #F6F1EE 0%, transparent 100%)"
              pointerEvents="none"
            />

            {/* Fade BOTTOM */}
            <Box
              position="absolute"
              bottom={0} left={0}
              w="100%" h="1%"
              bg="linear-gradient(to top, #F6F1EE 0%, transparent 100%)"
              pointerEvents="none"
            />

            {/* Fade RIGHT */}

            <Box
              position="absolute"
              top={0} right={0}
              w="45%" h="100%"
              w={{ base: '12%', md: '45%' }}
              bg="linear-gradient(to left, #F6F1EE 0%, transparent 100%)"
              pointerEvents="none"
            />
          </Box>
        </GridItem>

      </Grid>
    </Box>
  )
}