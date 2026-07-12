import {
  Box, Flex, Grid, GridItem, Text, Link, HStack, VStack, Icon,
} from '@chakra-ui/react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const NAV_COLS = [
  {
    title: 'Navegação',
    links: [
      { label: 'Início',       href: '#hero' },
      { label: 'Sobre',        href: '#about' },
      { label: 'Atendimentos', href: '#atendimentos' },
      { label: 'Abordagem',    href: '#abordagem' },
    ],
  },
  {
    title: 'Informações',
    links: [
      { label: 'FAQ',     href: '#faq' },
      { label: 'Contato', href: '#contato' },
    ],
  },
  {
    title: 'Atendimento',
    links: [{ label: 'Online e presencial', href: '#' }],
    social: true,
  },
]

export default function Footer() {
  return (
    <Box id="abordagem" as="footer" bg="brand.fig">
      {/* Gold top line */}
      <Box
        h="1px"
        bg="linear-gradient(90deg, transparent 0%, #C9A46A 50%, transparent 100%)"
        opacity={0.5}
      />

      <Grid
         mx="auto"
        px={{ base: 5, md: 10 }}
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: '220px repeat(3, 1fr)' }}
        gap={8}
        py={14}
      >
        {/* Brand */}
        <GridItem colSpan={{ base: 1, sm: 2, md: 1 }}>
          <Flex align="center" gap={3} mb={4}>
            <Flex
              w="65px" h="65px"
              border="1px solid" borderColor="rgba(201,164,106,0.45)"
              borderRadius="full"
              align="center" justify="center"
              fontFamily="'Cormorant Garamond', serif"
              fontSize="1.8rem"
              color="rgba(255,255,255,0.85)"
            >
              GC
            </Flex>
            <Box lineHeight={1.15}>
              <Text
                fontFamily="'Manrope', sans-serif"
                fontSize="0.72rem" fontWeight="600"
                letterSpacing="0.12em"
                color="rgba(255,255,255,0.9)"
              >
                GEISA COSTA
              </Text>
              <Text
                fontFamily="'Manrope', sans-serif"
                fontSize="0.5rem" letterSpacing="0.18em"
                textTransform="uppercase"
                color="#fff"
              >
                Psicanalista
              </Text>
            </Box>
          </Flex>
        </GridItem>

        {/* Nav columns */}
        {NAV_COLS.map(({ title, links, social }) => (
          <GridItem key={title}>
            <Text
              fontFamily="'Manrope', sans-serif"
              fontSize="1.0rem" fontWeight="700"
              letterSpacing="0.16em" textTransform="uppercase"
              color="#fff" mb={5}
            >
              {title}
            </Text>
            <VStack align="start" spacing={3}>
              {links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  fontFamily="'Inter', sans-serif"
                  fontSize="lg"
                  color="#fff"
                  _hover={{ color: 'white', textDecoration: 'none' }}
                >
                  {label}
                </Link>
              ))}
            </VStack>

            {social && (
              <HStack spacing={4} mt={6}>
                <Link href="https://instagram.com/" isExternal aria-label="Instagram"
                  color="#fff"
                  transition="color 0.2s"
                >
                  <Icon as={FaInstagram} boxSize={8} />
                </Link>
                <Link href="https://wa.me/5541987820288" isExternal aria-label="WhatsApp"
                  color="#fff"
                  transition="color 0.2s"
                >
                  <Icon as={FaWhatsapp} boxSize={8} />
                </Link>
              </HStack>
            )}
          </GridItem>
        ))}
      </Grid>

      {/* Bottom bar */}
      <Box borderTop="1px solid" borderColor="rgba(255,255,255,0.08)">
        <Flex
          maxW="1160px" mx="auto"
          px={{ base: 5, md: 10 }}
          py={5}
          justify={{ base: 'center', md: 'space-between' }}
          align="center"
          flexWrap="wrap"
          gap={3}
        >
          <Text
            fontFamily="'Inter', sans-serif"
            fontSize="xs"
            color="#fff"
          >
            © 2024 Geisa Costa. Todos os direitos reservados.
          </Text>
          <HStack spacing={6}>
            {['Política de Privacidade', 'Termos de Uso'].map(label => (
              <Link
                key={label}
                href="#"
                fontFamily="'Inter', sans-serif"
                fontSize="xs"
                color="#fff"
                _hover={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
              >
                {label}
              </Link>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
}
