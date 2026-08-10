import {
  Box, Grid, GridItem, Heading, Text, Button, Link,
  Flex, VStack, HStack, Icon,
} from '@chakra-ui/react'
import heroImg from '../../dist/psicanalise.jpg'
import { LuBrain, LuFlower, LuUser, LuHeart, LuSun } from 'react-icons/lu'
import { FaQuoteLeft } from 'react-icons/fa'

const BENEFITS = [
  { icon: LuBrain,  label: 'Compreender sentimentos e comportamentos que parecem se repetir' },
  { icon: LuFlower, label: 'Elaborar experiências difíceis e encontrar novos sentidos' },
  { icon: LuUser,   label: 'Fortalecer sua autoestima e sua relação consigo mesma' },
  { icon: LuHeart,  label: 'Melhorar seus relacionamentos e sua maneira de se comunicar' },
  { icon: LuSun,    label: 'Construir uma vida mais autêntica, com mais escolhas e liberdade' },
]

export default function Psicanalise() {
  return (
    <Box bg="brand.bg">

      {/* ── HERO ── */}
      <Box overflow="hidden" id="hero">
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
              fontSize={{ base: '3rem', md: '4rem', lg: '5.5rem' }}
              lineHeight={1.05}
              fontWeight={400}
              color="brand.text"
              fontFamily="'Cormorant Garamond', serif"
              fontStyle="italic"
              mb={4}
            >
              Psicanálise
            </Heading>

            <Box w="40px" h="1px" bg="brand.gold" mb={6} />

            <Heading
              as="h2"
              fontSize={{ base: '1.25rem', md: '1.5rem' }}
              fontWeight={400}
              color="brand.text"
              fontFamily="'Cormorant Garamond', serif"
              lineHeight={1.4}
              mb={5}
              maxW="36ch"
            >
              Um caminho de escuta para compreender e transformar.
            </Heading>

            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="sm" color="brand.muted"
              lineHeight={1.8} maxW="48ch" mb={8}
            >
              A psicanálise é um espaço de escuta profunda, onde cada história é acolhida
              em sua singularidade. Mais do que aliviar sintomas, ela permite compreender
              os sentidos do que nos acontece e abrir caminhos para uma vida mais autêntica
              e consciente.
            </Text>

            <Button as={Link} href="https://wa.me/5541987820288" isExternal variant="primary">
              Agendar Consulta
            </Button>
          </GridItem>

          {/* Photo with blend */}
          <GridItem
            display={{ base: 'flex', md: 'flex' }}
            alignSelf="stretch"
            alignItems="center"
            justifyContent="center"
            position="relative"
            minH="calc(100vh - 68px)"
          >
            <Box position="absolute" inset={0} overflow="hidden">
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
                position="absolute" top={0} left={0}
                w="40%" h="100%"
                bg="linear-gradient(to right, #F6F1EE 15%, transparent 100%)"
                pointerEvents="none"
              />
              {/* Fade BOTTOM */}
              <Box
                position="absolute" bottom={0} left={0}
                w="100%" h="20%"
                bg="linear-gradient(to top, #F6F1EE 0%, transparent 100%)"
                pointerEvents="none"
              />
              {/* Fade RIGHT */}
              <Box
                position="absolute" top={0} right={0}
                w="20%" h="100%"
                bg="linear-gradient(to left, #F6F1EE 0%, transparent 100%)"
                pointerEvents="none"
              />
              {/* Fade TOP */}
              <Box
                position="absolute" top={0} left={0}
                w="100%" h="10%"
                bg="linear-gradient(to bottom, #F6F1EE 0%, transparent 100%)"
                pointerEvents="none"
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* ── O QUE É A PSICANÁLISE ── */}
      <Box bg="white" py={{ base: 14, md: 20 }} id="about">
        <Box maxW="860px" mx="auto" px={{ base: 5, md: 10 }} textAlign="center">

          <Heading
            fontFamily="'Cormorant Garamond', serif"
            fontSize={{ base: '2rem', md: '2.75rem' }}
            fontWeight={400} color="brand.text" mb={6}
          >
            O que é a psicanálise?
          </Heading>

          <Box w="32px" h="1px" bg="brand.gold" mx="auto" mb={8} />

          <Text
            fontFamily="'Inter', sans-serif"
            fontSize={{ base: 'sm', md: 'md' }}
            color="brand.muted"
            lineHeight={1.9}
          >
            A psicanálise é uma abordagem terapêutica que investiga o inconsciente e os
            processos psíquicos que influenciam nossos pensamentos, emoções, comportamentos
            e relações. Por meio da escuta ética e do diálogo, é possível acessar conteúdos
            que muitas vezes estão fora da consciência e que impactam a forma como vivemos.
            É um convite ao autoconhecimento e à elaboração do que nos limita, para que
            possamos fazer escolhas mais livres e alinhadas ao que desejamos.
          </Text>
        </Box>
      </Box>

      {/* ── A PSICANÁLISE PODE TE AJUDAR ── */}
      <Box bg="brand.fig" py={{ base: 14, md: 20 }}>
        <Box maxW="1160px" mx="auto" px={{ base: 5, md: 10 }}>

          <Heading
            fontFamily="'Cormorant Garamond', serif"
            fontSize={{ base: '2rem', md: '2.5rem' }}
            fontWeight={400} color="white"
            textAlign="center" mb={14}
          >
            A psicanálise pode te ajudar a:
          </Heading>

          <Grid
            templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
            gap={8}
          >
            {BENEFITS.map(({ icon, label }) => (
              <VStack key={label} align="center" textAlign="center" spacing={4}>
                <Flex
                  w="72px" h="72px"
                  border="1px solid"
                  borderColor="rgba(201,164,106,0.4)"
                  borderRadius="full"
                  align="center" justify="center"
                >
                  <Icon as={icon} boxSize={7} color="brand.gold" />
                </Flex>
                <Text
                  fontFamily="'Inter', sans-serif"
                  fontSize="xs" color="rgba(255,255,255,0.8)"
                  lineHeight={1.7}
                >
                  {label}
                </Text>
              </VStack>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ── PROCESSO ÚNICO ── */}
      <Box bg="brand.bg" py={{ base: 14, md: 20 }}>
        <Grid
          maxW="1200px" mx="auto"
          px={{ base: 5, md: 10 }}
          templateColumns={{ base: '1fr', md: '420px 1fr' }}
          gap={14}
          alignItems="center"
        >
          {/* Photo */}
          <GridItem>
            <Box
              borderRadius="16px"
              overflow="hidden"
              boxShadow="0px 8px 40px rgba(94,75,86,0.1)"
              position="relative"
            >
              <img
                src={heroImg}
                alt="Geisa Costa"
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                }}
              />
              {/* Decorative circle */}
              <Box
                position="absolute"
                bottom={-6} right={-6}
                w="120px" h="120px"
                border="1px solid"
                borderColor="rgba(201,164,106,0.3)"
                borderRadius="full"
                pointerEvents="none"
              />
            </Box>
          </GridItem>

          {/* Copy */}
          <GridItem>
            <Box w="32px" h="1px" bg="brand.gold" mb={5} />

            <Heading
              fontFamily="'Cormorant Garamond', serif"
              fontSize={{ base: '2rem', md: '3rem' }}
              fontWeight={400}
              fontStyle="italic"
              color="brand.text"
              lineHeight={1.15}
              mb={6}
            >
              Um processo único<br />e personalizado
            </Heading>

            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="sm" color="brand.muted"
              lineHeight={1.9} mb={4}
            >
              A análise não segue fórmulas. Cada pessoa tem sua própria história,
              seu tempo e suas necessidades. O processo analítico é construído
              em conjunto, com respeito à sua singularidade e ao seu ritmo.
            </Text>

            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="sm" color="brand.muted"
              lineHeight={1.9} mb={8}
            >
              O objetivo não é mudar quem você é, mas ampliar sua compreensão
              sobre si mesma e sobre o mundo, para que possa viver de forma
              mais consciente e alinhada aos seus desejos.
            </Text>

            {/* Quote */}
            <Box
              borderLeft="2px solid" borderColor="brand.gold"
              pl={5} mb={8}
            >
              <Icon as={FaQuoteLeft} boxSize={4} color="brand.gold" opacity={0.6} mb={2} />
              <Text
                fontFamily="'Cormorant Garamond', serif"
                fontSize="1.2rem"
                fontStyle="italic"
                color="brand.text"
                lineHeight={1.7}
              >
                Conhecer a si mesmo é inaugurar novas possibilidades de ser e estar no mundo.
              </Text>
            </Box>

            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="sm" color="brand.muted"
              lineHeight={1.8} mb={8}
            >
              Se você se identificou com essa abordagem e deseja iniciar seu processo analítico,
              estou aqui para te acompanhar.
            </Text>

            <HStack spacing={4} flexWrap="wrap">
              <Button as={Link} href="https://wa.me/5541987820288" isExternal variant="primary">
                Agendar Consulta
              </Button>
              <Button as={Link} href="/contato" variant="outline_fig">
                Fale Comigo
              </Button>
            </HStack>
          </GridItem>
        </Grid>
      </Box>

    </Box>
  )
}