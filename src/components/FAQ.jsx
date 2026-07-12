import {
  Box, Grid, GridItem, Text, Heading, Button, Link, VStack, HStack, Icon,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
} from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'
import { MdPhone } from 'react-icons/md'

const FAQS = [
  { q: 'Como saber se preciso de análise?',
    a: 'Muitas vezes, a busca pela análise não surge apenas diante de um sofrimento intenso, mas de uma sensação persistente de repetição, angústia, vazio, ansiedade ou dificuldade em sustentar relações, escolhas e desejos.A análise é um espaço de escuta e elaboração para quem deseja compreender com mais profundidade aquilo que insiste em se repetir na própria história — mesmo quando, à primeira vista, tudo parece “estar bem”.Nem sempre é necessário chegar ao limite para iniciar esse processo. Em muitos casos, o desejo de se compreender melhor já é um ponto importante de partida.' },
  { q: 'Preciso ter um problema específico?',
    a: 'Não necessariamente.A análise não se limita à resolução de sintomas ou situações pontuais. Ela também pode ser um caminho de autoconhecimento, elaboração emocional e transformação subjetiva.Algumas pessoas procuram atendimento diante de crises específicas; outras chegam movidas por inquietações mais sutis, como dificuldades nos relacionamentos, sensação de desconexão consigo mesmas, excesso de autocobrança ou necessidade de compreender seus próprios modos de funcionamento.Cada processo é único e construído a partir da singularidade de cada história.' },
  { q: 'As sessões são sigilosas?',
    a: 'Sim.O sigilo é um princípio ético fundamental do atendimento psicológico e psicanalítico. Tudo o que é compartilhado em sessão é conduzido com responsabilidade, discrição e respeito à singularidade de cada paciente.O espaço analítico deve oferecer segurança para que a fala possa acontecer sem julgamentos, permitindo que conteúdos sensíveis sejam elaborados de forma ética e acolhedora.' },
  { q: 'O atendimento é online?',
    a: 'Sim. O atendimento pode ser realizado de forma online, proporcionando flexibilidade, conforto e continuidade do processo terapêutico, independentemente da localização.As sessões online acontecem em um ambiente reservado, preservando a qualidade da escuta, o vínculo terapêutico e o sigilo do processo analítico.' },
  { q: 'Quanto tempo dura o processo?',
    a: 'Não existe um tempo previamente determinado.Na psicanálise, cada processo possui um ritmo próprio, relacionado à história, às questões e ao momento subjetivo de cada pessoa.Algumas demandas podem ser trabalhadas em períodos mais breves; outras exigem um percurso mais aprofundado de elaboração. O tempo da análise não é definido apenas pela urgência do sintoma, mas pelo movimento singular de cada sujeito diante de sua própria história.' },
  { q: 'Como funciona a primeira sessão?',
    a: 'A primeira sessão é um espaço inicial de escuta, acolhimento e compreensão daquilo que motivou a busca pelo atendimento.Nesse encontro, o paciente pode falar livremente sobre suas questões, expectativas, angústias ou dúvidas em relação ao processo terapêutico. Também são alinhados aspectos práticos do atendimento, como frequência das sessões e funcionamento do processo.Mais do que uma entrevista formal, trata-se do início de uma construção transferencial e de um espaço onde a fala pode começar a encontrar lugar.' },
  { q: 'O que falar na primeira sessão?',
    a: 'Não existe uma forma “certa” de começar.A primeira sessão não exige preparo prévio nem uma organização perfeita do que será dito. Muitas vezes, o próprio processo analítico começa justamente a partir daquilo que parece confuso, difícil de nomear ou ainda sem sentido claro.Você pode falar sobre o que tem lhe atravessado no momento, sobre acontecimentos importantes, relações, angústias, sintomas ou simplesmente sobre aquilo que motivou sua busca por análise.Na psicanálise, a fala não precisa surgir pronta — ela pode (e é melhor que seja) ser construída ao longo do caminho.' },
]

function CtaCard() {
  return (
    <Box id="contato" className='contact-box'  color="brand.muted" p={{ base: 8, md: 10 }} textAlign="center">
      {/* Gold line top */}
      <Box
      
      />

      <Text
        fontFamily="'Manrope', sans-serif"
        fontSize="1.2rem" fontWeight="600"
        letterSpacing="0.16em" textTransform="uppercase"
         mb={3}
      >
        Vamos Conversar?
      </Text>

      <Text
        fontFamily="'Cormorant Garamond', serif"
        fontSize="2.5rem"
        fontWeight={300}
        fontStyle="italic"
        opacity={0.9}
        mb={8}
        lineHeight={1.4}
      >
        Será um prazer te acompanhar nesse processo.
      </Text>

      <Button
        as={Link}
        href="https://wa.me/5541987820288" isExternal
        variant="primary"
        leftIcon={<Icon as={FaWhatsapp} boxSize={4} />}
        w="full" mb={6}
      >
        Falar pelo WhatsApp
      </Button>

      <HStack
        as={Link} href="tel:+5541987820288"
        justify="center" spacing={2}
         color="brand.muted"
        _hover={{ textDecoration: 'underline' }}
      >
        <Icon as={MdPhone} boxSize={4} />
        <Text fontFamily="'Manrope', sans-serif" fontSize="sm">
          (41) 98782-0288
        </Text>
      </HStack>

      {/* Gold line bottom */}
      <Box
      />
    </Box>
  )
}

export default function FAQ() {
  return (
    <Box id="faq"  py={{ base: 16, md: 24 }}>
      <Grid
       maxW="1600px" mx="auto"
        px={{ base: 5, md: 10 }}
        templateColumns={{ base: '1fr', lg: '1fr 420px' }}
        gap={{ base: 14, lg: 20 }}
        alignItems="center"
      >
        {/* FAQ */}
        <GridItem>
          <Box w="32px" h="1px" bg="brand.gold" mb={5} />
          <Text
            fontFamily="'Manrope', sans-serif"
            fontSize="1.3rem" fontWeight="600"
            letterSpacing="0.16em" textTransform="uppercase"
            color="brand.muted" mb={10}
          >
            Dúvidas Frequentes
          </Text>

          <Accordion allowToggle>
            {FAQS.map(({ q, a }) => (
              <AccordionItem
                key={q}
                border="none"
                borderBottom="1px solid"
                borderColor="rgba(94,75,86,0.12)"
              >
                <AccordionButton
                  px={0} py={5}
                  _hover={{ bg: 'transparent', color: 'brand.fig' }}
                  _expanded={{ color: 'brand.fig' }}
                  gap={4}
                >
                  <Box
                    flex="1" textAlign="left"
                    fontFamily="'Inter', sans-serif"
                    fontSize="m" fontWeight="400"
                    lineHeight={1.6}
                  >
                    {q}
                  </Box>
                  <AccordionIcon
                    border="1px solid"
                    borderColor="rgba(94,75,86,0.2)"
                    borderRadius="full"
                    p="3px"
                    boxSize={6}
                    color="brand.fig"
                    flexShrink={0}
                  />
                </AccordionButton>
                <AccordionPanel
                  px={0} pb={5}
                  fontFamily="'Inter', sans-serif"
                  fontSize="sm"
                  color="brand.muted"
                  lineHeight={1.8}
                >
                  {a}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </GridItem>

        {/* CTA */}
        <GridItem>
          <CtaCard />
        </GridItem>
      </Grid>
    </Box>
  )
}
