import {
  Box, Grid, GridItem, Heading, Text, Button, Link,
  Flex, VStack, HStack, Icon, Accordion, AccordionItem,
  AccordionButton, AccordionPanel, AccordionIcon,
} from '@chakra-ui/react'
import heroImg from '../../public/home-hero.jpg'
import {
  MdComputer, MdChair, MdCheck, MdLock, MdPhone,
} from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { BsChatSquareDots } from 'react-icons/bs'
import { LuCalendar, LuUser, LuLeaf, LuHeart } from 'react-icons/lu'

const ONLINE_BENEFITS = [
  'Conforto do seu ambiente',
  'Flexibilidade de horários',
  'Atendimento para pacientes em qualquer lugar do Brasil',
  'Mesma ética e sigilo do atendimento presencial',
]

const PRESENCIAL_BENEFITS = [
  'Ambiente acolhedor e reservado',
  'Escuta atenta e sigilosa',
  'Localização de fácil acesso',
  'Horários flexíveis',
]

const STEPS = [
  { num: '1', icon: BsChatSquareDots, label: 'Primeiro contato',   desc: 'Você entra em contato e agendamos uma conversa inicial.' },
  { num: '2', icon: LuCalendar,       label: 'Agendamento',        desc: 'Definimos juntos o melhor dia e horário para o início das sessões.' },
  { num: '3', icon: LuUser,           label: 'Sessões',            desc: 'Encontros semanais de 50 minutos, onde você terá um espaço de escuta e elaboração.' },
  { num: '4', icon: LuLeaf,           label: 'Processo contínuo',  desc: 'A análise é um caminho de autoconhecimento e transformação que acontece no seu tempo.' },
  { num: '5', icon: LuHeart,          label: 'Transformação',      desc: 'Mais compreensão sobre si, novas escolhas e uma relação mais autêntica com a vida.' },
]

const FAQS = [
  { q: 'Quanto tempo dura cada sessão?',                         a: 'As sessões têm duração de 50 minutos.' },
  { q: 'Com que frequência devo fazer as sessões?',              a: 'A frequência recomendada é semanal, mas isso pode ser ajustado conforme a sua necessidade.' },
  { q: 'Como funciona o pagamento?',                             a: 'O pagamento é realizado antes de cada sessão, por transferência bancária ou PIX.' },
  { q: 'Preciso ter um problema específico para fazer terapia?', a: 'Não. A psicanálise pode ser um espaço de autoconhecimento para qualquer pessoa, independentemente de ter uma queixa específica.' },
  { q: 'O atendimento é apenas para adultos?',                   a: 'O atendimento é voltado para adultos e adolescentes a partir de 16 anos.' },
]

export default function Atendimento() {
  return (
    <Box bg="brand.bg">

      {/* ── HERO ── */}
      <Box id="atendimentos" overflow="hidden">
        <Grid
          maxW="1600px" mx="auto"
          px={{ base: 5, md: 10 }}
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          minH={{ base: 'auto', md: 'calc(100vh - 68px)' }}
          alignItems="center"
          gap={8}
        >
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
              Atendimento
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
              Um espaço ético, seguro e acolhedor para você cuidar da sua saúde emocional.
            </Heading>

            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="sm" color="brand.muted"
              lineHeight={1.8} maxW="48ch" mb={8}
            >
              Ofereço atendimentos on-line e presenciais, com a mesma dedicação e sigilo,
              para que você possa escolher a forma que melhor se adapta à sua rotina e necessidades.
            </Text>

            <Button as={Link} href="https://wa.me/5541987820288" isExternal variant="primary">
              Agendar Consulta
            </Button>

            <Text
              fontFamily="'Manrope', sans-serif"
              fontSize="0.68rem" letterSpacing="0.1em"
              color="brand.muted" mt={4} textTransform="uppercase"
            >
              Atendimento on-line (Brasil e exterior) e presencial em Joinville/SC
            </Text>
          </GridItem>

          <GridItem
            display={{ base: 'flex', md: 'flex' }}
            alignSelf="stretch" alignItems="center" justifyContent="center"
            position="relative" minH="calc(100vh - 68px)"
          >
            <Box position="absolute" inset={0} overflow="hidden">
              <img
                src={heroImg} alt="Geisa Costa psicologa"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
              />
              <Box position="absolute" top={0} left={0} w="35%" h="100%"
                bg="linear-gradient(to right, #F6F1EE 10%, transparent 100%)" pointerEvents="none" />
              <Box position="absolute" bottom={0} left={0} w="100%" h="15%"
                bg="linear-gradient(to top, #F6F1EE 0%, transparent 100%)" pointerEvents="none" />
              <Box position="absolute" top={0} right={0} w="25%" h="100%"
                bg="linear-gradient(to left, #F6F1EE 0%, transparent 100%)" pointerEvents="none" />
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* ── FORMAS DE ATENDIMENTO ── */}
      <Box bg="brand.card" py={{ base: 14, md: 20 }}>
        <Box maxW="1300px" mx="auto" px={{ base: 5, md: 10 }}>

          <Heading
            fontFamily="'Cormorant Garamond', serif"
            fontSize={{ base: '2rem', md: '2.5rem' }}
            fontWeight={400} color="brand.text"
            textAlign="center" mb={12}
          >
            Formas de atendimento
          </Heading>

          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={8}>

            {/* Online card */}
            <Box
              bg="white"
              borderRadius="24px"
              p={10}
              boxShadow="0px 4px 24px rgba(94,75,86,0.07)"
            >
              {/* Icon behind style */}
              <Box position="relative" mb={6}>
                <Box
                  w="80px" h="80px"
                  bg="brand.card"
                  borderRadius="20px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={MdComputer} boxSize={10} color="brand.fig" />
                </Box>
              </Box>

              <Heading
                fontFamily="'Cormorant Garamond', serif"
                fontSize="1.6rem" fontWeight={400}
                color="brand.text" mb={4}
              >
                Atendimento on-line
              </Heading>

              <Text
                fontFamily="'Inter', sans-serif"
                fontSize="sm" color="brand.muted"
                lineHeight={1.8} mb={7}
              >
                As sessões on-line oferecem praticidade e comodidade, mantendo o sigilo,
                a qualidade da escuta e a profundidade do trabalho analítico.
              </Text>

              <VStack align="start" spacing={3}>
                {ONLINE_BENEFITS.map(b => (
                  <HStack key={b} spacing={3}>
                    <Flex
                      w="20px" h="20px" borderRadius="full"
                      bg="brand.fig" align="center" justify="center" flexShrink={0}
                    >
                      <Icon as={MdCheck} boxSize={3} color="white" />
                    </Flex>
                    <Text fontFamily="'Inter', sans-serif" fontSize="sm" color="brand.muted">{b}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>

            {/* Presencial card */}
            <Box
              bg="white"
              borderRadius="24px"
              p={10}
              boxShadow="0px 4px 24px rgba(94,75,86,0.07)"
            >
              <Box position="relative" mb={6}>
                <Box
                  w="80px" h="80px"
                  bg="brand.card"
                  borderRadius="20px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={MdChair} boxSize={10} color="brand.fig" />
                </Box>
              </Box>

              <Heading
                fontFamily="'Cormorant Garamond', serif"
                fontSize="1.6rem" fontWeight={400}
                color="brand.text" mb={4}
              >
                Atendimento presencial
              </Heading>

              <Text
                fontFamily="'Inter', sans-serif"
                fontSize="sm" color="brand.muted"
                lineHeight={1.8} mb={7}
              >
                O atendimento presencial proporciona um espaço reservado e acolhedor,
                pensado para favorecer a escuta e o mergulho no seu mundo interno.
              </Text>

              <VStack align="start" spacing={3}>
                {PRESENCIAL_BENEFITS.map(b => (
                  <HStack key={b} spacing={3}>
                    <Flex
                      w="20px" h="20px" borderRadius="full"
                      bg="brand.fig" align="center" justify="center" flexShrink={0}
                    >
                      <Icon as={MdCheck} boxSize={3} color="white" />
                    </Flex>
                    <Text fontFamily="'Inter', sans-serif" fontSize="sm" color="brand.muted">{b}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>

          </Grid>

          {/* Sigilo note */}
          <Flex mt={8} p={6} bg="white" borderRadius="16px"
            align="center" gap={4}
            boxShadow="0px 4px 24px rgba(94,75,86,0.05)"
          >
            <Icon as={MdLock} boxSize={6} color="brand.fig" flexShrink={0} />
            <Text fontFamily="'Inter', sans-serif" fontSize="sm" color="brand.muted" lineHeight={1.7}>
              Todos os atendimentos são realizados com sigilo absoluto, respeito à sua história e ao seu tempo.
            </Text>
          </Flex>

        </Box>
      </Box>

      {/* ── COMO FUNCIONA ── */}
      <Box bg="white" py={{ base: 14, md: 20 }}>
        <Box maxW="1160px" mx="auto" px={{ base: 5, md: 10 }}>

          <Heading
            fontFamily="'Cormorant Garamond', serif"
            fontSize={{ base: '2rem', md: '2.5rem' }}
            fontWeight={400} color="brand.text"
            textAlign="center" mb={14}
          >
            Como funciona o processo terapêutico
          </Heading>

          <Grid
            templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
            gap={6}
          >
            {STEPS.map(({ num, icon, label, desc }, i) => (
              <VStack key={num} align="center" textAlign="center" spacing={4} position="relative">

                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <Box
                    display={{ base: 'none', md: 'block' }}
                    position="absolute"
                    top="24px"
                    left="calc(50% + 28px)"
                    w="calc(100% - 56px)"
                    h="1px"
                    bg="rgba(94,75,86,0.15)"
                    zIndex={0}
                  />
                )}

                {/* Step number */}
                <Flex
                  w="48px" h="48px"
                  border="1px solid" borderColor="rgba(94,75,86,0.2)"
                  borderRadius="full"
                  align="center" justify="center"
                  fontFamily="'Manrope', sans-serif"
                  fontSize="0.75rem" fontWeight="600"
                  color="brand.muted"
                  bg="brand.card"
                  position="relative" zIndex={1}
                >
                  {num}
                </Flex>

                {/* Larger icon */}
                <Flex
                  w="64px" h="64px"
                  bg="brand.card"
                  borderRadius="16px"
                  align="center" justify="center"
                >
                  <Icon as={icon} boxSize={8} color="brand.fig" />
                </Flex>

                <Text
                  fontFamily="'Manrope', sans-serif"
                  fontSize="0.82rem" fontWeight="600"
                  color="brand.text" letterSpacing="0.02em"
                >
                  {label}
                </Text>

                <Text
                  fontFamily="'Inter', sans-serif"
                  fontSize="xs" color="brand.muted" lineHeight={1.7}
                >
                  {desc}
                </Text>
              </VStack>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* ── FAQ ── */}
      <Box bg="brand.card" py={{ base: 14, md: 20 }} id="faq">
        <Grid
          maxW="1160px" mx="auto"
          px={{ base: 5, md: 10 }}
          templateColumns={{ base: '1fr', lg: '1fr 340px' }}
          gap={12} alignItems="start"
        >
          <Box>
            <Heading
              fontFamily="'Cormorant Garamond', serif"
              fontSize={{ base: '2rem', md: '2.5rem' }}
              fontWeight={400} color="brand.text" mb={2}
            >
              Dúvidas frequentes
            </Heading>
            <Box w="32px" h="1px" bg="brand.gold" mb={8} />

            <Accordion allowToggle>
              {FAQS.map(({ q, a }) => (
                <AccordionItem key={q} border="none"
                  borderBottom="1px solid" borderColor="rgba(94,75,86,0.12)"
                >
                  <AccordionButton px={0} py={5} gap={4}
                    _hover={{ bg: 'transparent', color: 'brand.fig' }}
                    _expanded={{ color: 'brand.fig' }}
                  >
                    <Box flex="1" textAlign="left"
                      fontFamily="'Inter', sans-serif"
                      fontSize="sm" fontWeight="400" lineHeight={1.6}
                    >
                      {q}
                    </Box>
                    <AccordionIcon
                      border="1px solid" borderColor="rgba(94,75,86,0.2)"
                      borderRadius="full" p="3px"
                      boxSize={6} color="brand.fig" flexShrink={0}
                    />
                  </AccordionButton>
                  <AccordionPanel px={0} pb={5}
                    fontFamily="'Inter', sans-serif"
                    fontSize="sm" color="brand.muted" lineHeight={1.8}
                  >
                    {a}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>

          <Box>
            <Box
              bg="white" borderRadius="16px" p={7}
              border="1px solid" borderColor="rgba(94,75,86,0.1)"
              boxShadow="0px 4px 24px rgba(94,75,86,0.06)"
            >
              <HStack spacing={3} mb={4}>
                <Icon as={MdLock} boxSize={5} color="brand.fig" />
                <Text fontFamily="'Manrope', sans-serif"
                  fontSize="sm" fontWeight="600" color="brand.text"
                >
                  Duração & Frequência
                </Text>
              </HStack>
              <Text fontFamily="'Inter', sans-serif" fontSize="sm" color="brand.muted" lineHeight={1.8}>
                As sessões têm duração de <strong>50 minutos</strong>.
              </Text>
              <Text fontFamily="'Inter', sans-serif" fontSize="sm" color="brand.muted" lineHeight={1.8} mt={3}>
                A frequência recomendada é <strong>semanal</strong>, mas isso pode ser
                ajustado conforme a sua necessidade.
              </Text>
            </Box>
          </Box>
        </Grid>
      </Box>

      {/* ── CTA BOTTOM ── */}
    

    </Box>
  )
}