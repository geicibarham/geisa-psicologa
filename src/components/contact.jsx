import { useState } from 'react'
import {
  Box, Grid, GridItem, Flex, Heading, Text,
  Button, Link, VStack, HStack, Icon, Checkbox,
} from '@chakra-ui/react'
import { FaWhatsapp, FaInstagram, FaEnvelope, FaQuoteLeft } from 'react-icons/fa'
import {
  MdPerson, MdEmail, MdCalendarToday,
  MdEdit, MdShield, MdLock, MdArrowForward,
} from 'react-icons/md'
import { BsChatSquareText } from 'react-icons/bs'
import { LuLeaf } from 'react-icons/lu'
// import leaves from '../../dist/contact-plant.png'

const FEATURES = [
  { icon: BsChatSquareText, label: 'Escuta atenta e sigilosa' },
  { icon: MdPerson,         label: 'Acolhimento sem julgamentos' },
  { icon: LuLeaf,           label: 'Atendimento ético e personalizado' },
]

function FloatingInput({ label, type = 'text', icon }) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const isFloating = focused || value.length > 0
  const id = label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

  return (
    <Box position="relative" w="full">
      <Box
        as="label"
        htmlFor={id}
        position="absolute"
        left={icon ? '40px' : '16px'}
        top={isFloating ? '8px' : '50%'}
        transform={isFloating ? 'translateY(0)' : 'translateY(-50%)'}
        fontSize={isFloating ? '0.65rem' : 'sm'}
        color={focused ? 'brand.fig' : 'brand.muted'}
        pointerEvents="none"
        transition="all 0.2s ease"
        zIndex={2}
        fontFamily="'Inter', sans-serif"
        letterSpacing={isFloating ? '0.08em' : '0'}
        textTransform={isFloating ? 'uppercase' : 'none'}
      >
        {label}
      </Box>

      {icon && (
        <Box
          position="absolute" left="12px" top="50%"
          transform="translateY(-50%)"
          zIndex={2} pointerEvents="none" color="brand.muted"
        >
          <Icon as={icon} boxSize={4} />
        </Box>
      )}

      <Box
        as="input"
        id={id}
        name={id}
        type={type}
        value={value}
        aria-label={label}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        w="full" h="60px"
        pt={isFloating ? '20px' : '0'}
        pb="4px"
        pl={icon ? '40px' : '16px'}
        pr="16px"
        border="1px solid"
        borderColor={focused ? 'brand.fig' : 'rgba(94,75,86,0.18)'}
        borderRadius="10px"
        bg="rgba(255,255,255,0.8)"
        fontFamily="'Inter', sans-serif"
        fontSize="sm"
        color="brand.text"
        outline="none"
        transition="border-color 0.2s"
        sx={{
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0px 1000px rgba(255,255,255,0.8) inset',
          }
        }}
      />
    </Box>
  )
}

function FloatingSelect({ label, icon, children }) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const isFloating = focused || value.length > 0
  const id = label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

  return (
    <Box position="relative" w="full">
      <Box
        as="label"
        htmlFor={id}
        position="absolute"
        left={icon ? '40px' : '16px'}
        top={isFloating ? '8px' : '50%'}
        transform={isFloating ? 'translateY(0)' : 'translateY(-50%)'}
        fontSize={isFloating ? '0.65rem' : 'sm'}
        color={focused ? 'brand.fig' : 'brand.muted'}
        pointerEvents="none"
        transition="all 0.2s ease"
        zIndex={2}
        fontFamily="'Inter', sans-serif"
        letterSpacing={isFloating ? '0.08em' : '0'}
        textTransform={isFloating ? 'uppercase' : 'none'}
      >
        {label}
      </Box>

      {icon && (
        <Box
          position="absolute" left="12px" top="50%"
          transform="translateY(-50%)"
          zIndex={2} pointerEvents="none" color="brand.muted"
        >
          <Icon as={icon} boxSize={4} />
        </Box>
      )}

      <Box
        as="select"
        id={id}
        name={id}
        aria-label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        w="full" h="60px"
        pt={isFloating ? '20px' : '0'}
        pb="4px"
        pl={icon ? '40px' : '16px'}
        pr="16px"
        border="1px solid"
        borderColor={focused ? 'brand.fig' : 'rgba(94,75,86,0.18)'}
        borderRadius="10px"
        bg="rgba(255,255,255,0.8)"
        fontFamily="'Inter', sans-serif"
        fontSize="sm"
        color={value ? 'brand.text' : 'transparent'}
        outline="none"
        transition="border-color 0.2s"
        appearance="auto"
      >
        <option value="" disabled />
        {children}
      </Box>
    </Box>
  )
}

function FloatingTextarea({ label }) {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const isFloating = focused || value.length > 0
  const id = label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

  return (
    <Box position="relative" w="full">
      <Box
        as="label"
        htmlFor={id}
        position="absolute"
        left="40px"
        top={isFloating ? '10px' : '18px'}
        fontSize={isFloating ? '0.65rem' : 'sm'}
        color={focused ? 'brand.fig' : 'brand.muted'}
        pointerEvents="none"
        transition="all 0.2s ease"
        zIndex={2}
        fontFamily="'Inter', sans-serif"
        letterSpacing={isFloating ? '0.08em' : '0'}
        textTransform={isFloating ? 'uppercase' : 'none'}
      >
        {label}
      </Box>

      <Box
        position="absolute" left="12px" top="18px"
        zIndex={2} pointerEvents="none" color="brand.muted"
      >
        <Icon as={MdEdit} boxSize={4} />
      </Box>

      <Box
        as="textarea"
        id={id}
        name={id}
        aria-label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        w="full"
        minH="140px"
        pt={isFloating ? '28px' : '18px'}
        pb="12px"
        pl="40px"
        pr="16px"
        border="1px solid"
        borderColor={focused ? 'brand.fig' : 'rgba(94,75,86,0.18)'}
        borderRadius="10px"
        bg="rgba(255,255,255,0.8)"
        fontFamily="'Inter', sans-serif"
        fontSize="sm"
        color="brand.text"
        outline="none"
        resize="none"
        transition="border-color 0.2s"
      />
    </Box>
  )
}

export default function Contact() {
  const [checked, setChecked] = useState(false)

  return (
    <Box bg="brand.bg" minH="100vh">

      <Box position="relative" overflow="hidden">

        {/* Vase */}
        <Box
          position="absolute"
          left={0} top="50%"
          transform="translateY(-50%)"
          w={{ base: '280px', md: '550px' }}
          h={{ base: '400px', md: '750px' }}
          pointerEvents="none" zIndex={0}
        >
          <img
            src="/leaves.png" alt=""
            style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center left', display: 'block' }}
          />
        </Box>

        {/* Organic circles */}
        <Box
          position="absolute" top="50%" right="5%"
          transform="translateY(-50%)"
          w="520px" h="520px"
          pointerEvents="none" zIndex={0}
          sx={{
            '&::before': { content: '""', position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(94,75,86,0.1)' },
            '&::after':  { content: '""', position: 'absolute', inset: '60px', borderRadius: '50%', border: '1px solid rgba(201,164,106,0.12)' },
          }}
        />
        <Box
          position="absolute" top="50%" right="8%"
          transform="translateY(-50%)"
          w="300px" h="300px"
          border="1px solid" borderColor="rgba(94,75,86,0.06)"
          borderRadius="full" pointerEvents="none" zIndex={0}
        />

        <Grid
          maxW="1400px" mx="auto"
          px={{ base: 5, md: 12 }}
          py={{ base: 16, md: 20 }}
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={12} alignItems="center"
          position="relative" zIndex={1}
        >

          {/* Left copy */}
          <GridItem>
            <Heading
              as="h1"
              fontFamily="'Cormorant Garamond', serif"
              fontSize={{ base: '3.5rem', md: '5rem' }}
              fontWeight={400} lineHeight={1.05}
              color="brand.text" mb={4}
            >
              Vamos<br />conversar?
            </Heading>

            <Box w="40px" h="1px" bg="brand.gold" mb={6} />

            <Text
              fontFamily="'Inter', sans-serif"
              fontSize="sm" color="brand.muted"
              lineHeight={1.8} maxW="44ch" mb={10}
            >
              Este é um espaço inicial de escuta e acolhimento.
              Preencha o formulário para que eu compreenda
              melhor sua demanda e entre em contato.
            </Text>

            <VStack align="start" spacing={5} mb={12}>
              {FEATURES.map(({ icon, label }) => (
                <HStack key={label} spacing={4}>
                  <Flex
                    w="42px" h="42px"
                    border="1px solid" borderColor="rgba(94,75,86,0.2)"
                    borderRadius="full" align="center" justify="center" flexShrink={0}
                  >
                    <Icon as={icon} boxSize={4} color="brand.fig" />
                  </Flex>
                  <Box w="1px" h="20px" bg="rgba(94,75,86,0.2)" />
                  <Text fontFamily="'Inter', sans-serif" fontSize="sm" color="brand.muted">
                    {label}
                  </Text>
                </HStack>
              ))}
            </VStack>

            <Box borderLeft="2px solid" borderColor="brand.gold" pl={5}>
              <Icon as={FaQuoteLeft} boxSize={5} color="brand.gold" opacity={0.6} mb={2} />
              <Text
                fontFamily="'Cormorant Garamond', serif"
                fontSize="1.3rem" fontStyle="italic"
                color="brand.text" lineHeight={1.6}
              >
                Cada história é única.<br />
                Estou aqui para escutar a sua,<br />
                com cuidado e presença.
              </Text>
              <Box w="32px" h="1px" bg="brand.gold" mt={4} opacity={0.6} />
            </Box>
          </GridItem>

          {/* Right form card */}
          <GridItem>
            <Box
              as="form"
              bg="rgba(255,255,255,0.75)"
              backdropFilter="blur(12px)"
              borderRadius="20px"
              p={{ base: 7, md: 10 }}
              boxShadow="0px 8px 48px rgba(94,75,86,0.08)"
              border="1px solid" borderColor="rgba(255,255,255,0.6)"
              noValidate
            >
              <Flex justify="space-between" align="flex-start" mb={6}>
                <Box>
                  <Heading
                    fontFamily="'Cormorant Garamond', serif"
                    fontSize="1.75rem" fontWeight={400} color="brand.text"
                  >
                    Preencha seus dados
                  </Heading>
                  <Box w="32px" h="1px" bg="brand.gold" mt={2} />
                </Box>
                <HStack spacing={2} align="flex-start">
                  <Icon as={MdShield} boxSize={4} color="brand.muted" mt={1} />
                  <Text
                    fontFamily="'Inter', sans-serif"
                    fontSize="0.65rem" color="brand.muted"
                    maxW="100px" lineHeight={1.4} textAlign="right"
                  >
                    Suas informações estão protegidas.
                  </Text>
                </HStack>
              </Flex>

              <VStack spacing={4}>

                {/* Row 1 */}
                <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={4} w="full">
                  <FloatingInput label="Seu nome"   icon={MdPerson} />
                  <FloatingInput label="Seu e-mail" icon={MdEmail}  type="email" />
                </Grid>

                {/* Row 2 */}
                <Grid templateColumns={{ base: '1fr', sm: '1fr 1fr' }} gap={4} w="full">
                  <FloatingInput label="Seu WhatsApp" icon={FaWhatsapp} />
                  <FloatingSelect label="Modalidade de atendimento" icon={MdCalendarToday}>
                    <option value="online">Online</option>
                    <option value="presencial">Presencial</option>
                    <option value="ambos">Ambos</option>
                  </FloatingSelect>
                </Grid>

                {/* Textarea */}
                <Box w="full">
                  <FloatingTextarea label="Como posso ajudar" />
                </Box>

                {/* Checkbox */}
                <HStack w="full" spacing={3}>
              <Checkbox
  id="consent"
  isChecked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  borderColor="rgba(94,75,86,0.3)"
  sx={{
    '& .chakra-checkbox__control[data-checked]': {
      bg: 'brand.fig', borderColor: 'brand.fig',
    }
  }}
>
  <Text
    fontFamily="'Inter', sans-serif"
    fontSize="sm"
    color="brand.muted"
  >
    Autorizo o contato para retorno da minha solicitação.
  </Text>
</Checkbox>
                  <Box
                    as="label"
                    htmlFor="consent"
                    fontFamily="'Inter', sans-serif"
                    fontSize="sm"
                    color="brand.muted"
                    cursor="pointer"
                  >
                    Autorizo o contato para retorno da minha solicitação.
                  </Box>
                </HStack>

                {/* Submit */}
                <Button
                  type="submit"
                  w="full" h="56px"
                  bg="brand.fig" color="white"
                  fontFamily="'Manrope', sans-serif"
                  fontSize="0.75rem" fontWeight="700"
                  letterSpacing="0.12em" textTransform="uppercase"
                  borderRadius="12px"
                  rightIcon={<Icon as={MdArrowForward} boxSize={5} />}
                  _hover={{ bg: 'brand.figHover' }}
                  isDisabled={!checked}
                  aria-disabled={!checked}
                >
                  Enviar Mensagem
                </Button>

                <HStack spacing={2} justify="center">
                  <Icon as={MdLock} boxSize={3} color="brand.muted" />
                  <Text fontFamily="'Inter', sans-serif" fontSize="xs" color="brand.muted">
                    Responderemos em até 24h úteis.
                  </Text>
                </HStack>

              </VStack>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      {/* Bottom contact bar */}
      <Box borderTop="1px solid" borderColor="rgba(94,75,86,0.12)" bg="white">
        <Flex
          maxW="1400px" mx="auto"
          px={{ base: 5, md: 12 }} py={6}
          justify={{ base: 'center', md: 'space-between' }}
          align="center" flexWrap="wrap" gap={6}
        >
          <HStack spacing={4}>
            <Flex
              w="52px" h="52px"
              border="1px solid" borderColor="rgba(94,75,86,0.2)"
              borderRadius="full" align="center" justify="center"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="1.2rem" color="brand.fig"
              aria-hidden="true"
            >
              GC
            </Flex>
            <Box borderLeft="1px solid" borderColor="rgba(94,75,86,0.15)" pl={4} lineHeight={1.4}>
              <Text fontFamily="'Manrope', sans-serif" fontSize="0.72rem"
                fontWeight="600" letterSpacing="0.1em" color="brand.text">
                GEISA COSTA
              </Text>
              <Text fontFamily="'Inter', sans-serif" fontSize="xs" color="brand.muted">
                Psicóloga | Psicanalista
              </Text>
              <Text fontFamily="'Inter', sans-serif" fontSize="xs" color="brand.muted">
                CRP 06/000000
              </Text>
            </Box>
          </HStack>

          {[
            { icon: FaWhatsapp,  href: 'https://wa.me/5541987820288',      label: 'Fale pelo WhatsApp',     sub: '(41) 98782-0288' },
            { icon: FaInstagram, href: 'https://instagram.com/',           label: 'Acompanhe no Instagram', sub: '@psi.geisacosta' },
            { icon: FaEnvelope,  href: 'mailto:contato@geisacosta.com.br', label: 'Ou envie um e-mail',     sub: 'contato@geisacosta.com.br' },
          ].map(({ icon, href, label, sub }) => (
            <HStack
              key={label} spacing={3}
              as={Link} href={href}
              isExternal={!href.startsWith('mailto')}
              _hover={{ textDecoration: 'none', opacity: 0.8 }}
              aria-label={`${label}: ${sub}`}
            >
              <Flex
                w="36px" h="36px"
                border="1px solid" borderColor="rgba(94,75,86,0.2)"
                borderRadius="full" align="center" justify="center"
                aria-hidden="true"
              >
                <Icon as={icon} boxSize={4} color="brand.fig" />
              </Flex>
              <Box>
                <Text fontFamily="'Manrope', sans-serif" fontSize="xs"
                  fontWeight="600" color="brand.text">{label}</Text>
                <Text fontFamily="'Inter', sans-serif" fontSize="xs" color="brand.muted">{sub}</Text>
              </Box>
            </HStack>
          ))}
        </Flex>
      </Box>

    </Box>
  )
}