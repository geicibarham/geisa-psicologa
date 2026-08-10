import {
  Box, Flex, Text, Button, Link, HStack,
  IconButton, VStack, useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Início',      href: '#hero' },
  { label: 'Sobre',       href: '#about' },
  { label: 'Atendimento', href: '/atendimento', isRoute: true },
  { label: 'FAQ',         href: '#faq' },
  { label: 'Contato',     href: '/contato',     isRoute: true },
  { label: 'Psicanálise', href: '/psicanalise', isRoute: true },
]

function Logo() {
  return (
    <Flex as={Link} href="/" align="center" gap={3} _hover={{ textDecoration: 'none' }}>
      <Flex
        w="45px" h="45px"
        border="1px solid" borderColor="#C9A46A"
        borderRadius="full"
        align="center" justify="center"
        fontFamily="'Cormorant Garamond', serif"
        fontSize="1.5rem"
        color="#5E4B56"
        flexShrink={0}
      >
        GC
      </Flex>
      <Box lineHeight={1.15}>
        <Text
          fontFamily="'Manrope', sans-serif"
          fontSize="0.72rem" fontWeight="600"
          letterSpacing="0.12em" color="#4D3B45"
        >
          GEISA COSTA
        </Text>
        <Text
          fontFamily="'Manrope', sans-serif"
          fontSize="0.5rem" letterSpacing="0.18em"
          textTransform="uppercase" color="#6F6468"
        >
          Psicanalista
        </Text>
      </Box>
    </Flex>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      {/* ── Sticky bar ── */}
      <Box
        as="nav"
        position="sticky" top={0} zIndex={100}
        bg="#f6f1ed"
        backdropFilter="blur(12px)"
        borderBottom="1px solid"
        borderColor="rgba(216,197,175,0.4)"
      >
        <Flex
          maxW="1600px" mx="auto"
          px={{ base: 5, md: 10 }}
          h="68px"
          align="center"
          justify="space-between"
        >
          <Logo />

          {/* Desktop links */}
          <HStack spacing={8} display={{ base: 'none', lg: 'flex' }}>
            {NAV_LINKS.map(({ label, href, isRoute }) => (
              <Link
                key={href}
                as={isRoute ? RouterLink : undefined}
                to={isRoute ? href : undefined}
                href={!isRoute ? href : undefined}
                fontFamily="'Manrope', sans-serif"
                fontSize="0.85rem"
                fontWeight="700"
                letterSpacing="0.1em"
                textTransform="uppercase"
                color="brand.muted"
                _hover={{ color: 'brand.fig', textDecoration: 'none' }}
              >
                {label}
              </Link>
            ))}
          </HStack>

          {/* Desktop CTA */}
          <Button
            as={Link} href="https://wa.me/5541987820288" isExternal
            variant="primary"
            display={{ base: 'none', lg: 'inline-flex' }}
          >
            Agendar Consulta
          </Button>

          {/* Mobile hamburger */}
          <IconButton
            aria-label="Abrir menu"
            icon={<HamburgerIcon boxSize={5} />}
            variant="ghost"
            color="brand.fig"
            display={{ base: 'flex', lg: 'none' }}
            onClick={onOpen}
            _hover={{ bg: 'transparent' }}
          />
        </Flex>
      </Box>

      {/* ── Mobile overlay + half-width drawer ── */}
      {isOpen && (
        <Box
          position="fixed" inset={0} zIndex={200}
          display="flex" justifyContent="flex-end"
        >
          {/* Blurred backdrop */}
          <Box
            position="absolute" inset={0}
            bg="rgba(246,241,238,0.55)"
            backdropFilter="blur(6px)"
            onClick={onClose}
            transition="opacity 0.35s"
          />

          {/* Drawer panel */}
          <Box
            position="relative" zIndex={1}
            w={{ base: '82%', sm: '72%' }}
            maxW="400px"
            h="100vh"
            bg="#F6F1EE"
            borderLeft="1px solid"
            borderColor="rgba(94,75,86,0.12)"
            display="flex"
            flexDirection="column"
            px={8} py={10}
            animation="slideIn 0.38s cubic-bezier(0.22,1,0.36,1) both"
            sx={{
              '@keyframes slideIn': {
                from: { transform: 'translateX(100%)' },
                to:   { transform: 'translateX(0)' },
              },
            }}
          >
            {/* Close + Logo row */}
            <Flex justify="space-between" align="center" mb={12}>
              <Logo />
              <IconButton
                aria-label="Fechar menu"
                icon={<CloseIcon boxSize={3} />}
                variant="ghost"
                color="brand.muted"
                onClick={onClose}
                _hover={{ bg: 'transparent', color: 'brand.fig' }}
              />
            </Flex>

            {/* Nav links */}
            <VStack align="start" spacing={0} flex={1}>
              {NAV_LINKS.map(({ label, href, isRoute }, i) => (
                <Link
                  key={href}
                  as={isRoute ? RouterLink : undefined}
                  to={isRoute ? href : undefined}
                  href={!isRoute ? href : undefined}
                  onClick={onClose}
                  display="block"
                  w="full"
                  py={5}
                  borderBottom="1px solid"
                  borderColor="rgba(94,75,86,0.1)"
                  fontFamily="'Cormorant Garamond', serif"
                  fontSize="1.5rem"
                  fontWeight="400"
                  color="brand.text"
                  letterSpacing="0.04em"
                  _hover={{ color: 'brand.fig', textDecoration: 'none', pl: 2 }}
                  transition="all 0.2s"
                  sx={{
                    animation: `fadeUp 0.4s ${0.06 * i + 0.15}s both`,
                    '@keyframes fadeUp': {
                      from: { opacity: 0, transform: 'translateY(10px)' },
                      to:   { opacity: 1, transform: 'translateY(0)' },
                    },
                  }}
                >
                  {label}
                </Link>
              ))}
            </VStack>

            {/* Bottom CTA */}
            <Box mt={10}>
              <Button
                as={Link}
                href="https://wa.me/5541987820288"
                isExternal
                variant="primary"
                w="full"
                onClick={onClose}
              >
                Agendar Consulta
              </Button>

              <Box
                mt={8} h="1px"
                bg="linear-gradient(90deg, transparent, #C9A46A, transparent)"
                opacity={0.5}
              />

              <Text
                mt={4}
                fontFamily="'Manrope', sans-serif"
                fontSize="0.65rem"
                letterSpacing="0.12em"
                textTransform="uppercase"
                color="brand.muted"
                textAlign="center"
              >
                Online & Presencial
              </Text>
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}