import {
  Box, Flex, Grid, GridItem, Text, Link, HStack, VStack, Icon, Button,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'

const NAV_LINKS = [
  { label: 'Início', href: '/#hero' },
  { label: 'Sobre', href: '/#about' },
  { label: 'Atendimentos', href: '/atendimento' },
]

const INFO_LINKS = [
  { label: 'FAQ', href: '/#faq' },
  { label: 'Políticas', href: '#' },
  { label: 'Privacidade', href: '#' },
  { label: 'Termos de Uso', href: '#' },
]

export default function Footer() {
  return (
    <Box as="footer" bg="brand.fig" position="relative">

      {/* Gold top line */}
      <Box
        h="1px"
        bg="linear-gradient(90deg, transparent 0%, #C9A46A 50%, transparent 100%)"
        opacity={0.5}
      />

      {/* Main grid */}
      <Grid
        mx="auto"
        px={{ base: 6, md: 14 }}
        pt={16} pb={16}
        templateColumns={{ base: '1fr', md: '280px 1fr 1fr 1fr 1fr' }}
        gap={{ base: 10, md: 8 }}
      >

        {/* Brand + tagline + CTA */}
        <GridItem>
          <Flex align="center" gap={3} mb={5}>
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
                fontSize={{ base: '0.8rem', md: '0.95rem' }} fontWeight="600"
                letterSpacing="0.14em"
                color="#fff"
              >
                GEISA COSTA
              </Text>
              <Text
                fontFamily="'Manrope', sans-serif"
                fontSize={{ base: '0.55rem', md: '0.68rem' }} letterSpacing="0.2em"
                textTransform="uppercase"
                color="#fff"
              >
                Psicanalista
              </Text>
            </Box>
          </Flex>

          <Text
            fontFamily="'Cormorant Garamond', serif"
            fontSize={{ base: '1.1rem', md: '1.28rem' }}
            fontWeight={300}
            fontStyle="italic"
            color="#fff"
            lineHeight={1.6}
            mb={6}
            maxW="22ch"
          >
            Um espaço seguro para compreender, elaborar e transformar.
          </Text>

          <Button
            as={Link}
            href="https://wa.me/5541987820288"
            isExternal
            variant="outline_fig"
            borderColor="#fff"
            color="white"
            fontSize={{ base: '0.65rem', md: '0.78rem' }}
            px={6} py={3}
            mb={4}
            _hover={{ bg: 'rgba(255,255,255,0.1)', textDecoration: 'none' }}
          >
            Agendar Conversa
          </Button>

          <Text
            fontFamily="'Manrope', sans-serif"
            fontSize={{ base: '0.58rem', md: '0.7rem' }}
            letterSpacing="0.14em"
            textTransform="uppercase"
            color="#fff"
            mt={3}
          >
            Atendimento Online e Presencial
          </Text>
        </GridItem>

        {/* Navegação */}
        <GridItem>
          <Text
            fontFamily="'Manrope', sans-serif"
            fontSize={{ base: '0.7rem', md: '0.82rem' }} fontWeight="700"
            letterSpacing="0.18em" textTransform="uppercase"
            color="white" mb={3}
          >
            Navegação
          </Text>
          <Box w="full" h="1px" bg="rgba(201,164,106,0.3)" mb={5} position="relative">
            <Box w="4px" h="4px" bg="brand.gold" borderRadius="full"
              position="absolute" top="-1.5px" left="0" />
          </Box>
          <VStack align="start" spacing={3}>
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                as={RouterLink}
                to={href}
                fontFamily="'Inter', sans-serif" fontSize={{ base: 'sm', md: 'md' }}
                color="#fff"
                _hover={{ color: 'white', textDecoration: 'none' }}
              >
                {label}
              </Link>
            ))}
          </VStack>
        </GridItem>

        {/* Informações */}
        <GridItem>
          <Text
            fontFamily="'Manrope', sans-serif"
            fontSize={{ base: '0.7rem', md: '0.82rem' }} fontWeight="700"
            letterSpacing="0.18em" textTransform="uppercase"
            color="white" mb={3}
          >
            Informações
          </Text>
          <Box w="full" h="1px" bg="rgba(201,164,106,0.3)" mb={5} position="relative">
            <Box w="4px" h="4px" bg="brand.gold" borderRadius="full"
              position="absolute" top="-1.5px" left="0" />
          </Box>
          <VStack align="start" spacing={3}>
            {INFO_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                as={href.startsWith('/') ? RouterLink : undefined}
                to={href.startsWith('/') ? href : undefined}
                href={href.startsWith('/') ? undefined : href}
                fontFamily="'Inter', sans-serif" fontSize={{ base: 'sm', md: 'md' }}
                color="#fff"
                _hover={{ color: 'white', textDecoration: 'none' }}
              >
                {label}
              </Link>
            ))}
          </VStack>
        </GridItem>

        {/* Atendimento */}
        <GridItem>
          <Text
            fontFamily="'Manrope', sans-serif"
            fontSize={{ base: '0.7rem', md: '0.82rem' }} fontWeight="700"
            letterSpacing="0.18em" textTransform="uppercase"
            color="white" mb={3}
          >
            Atendimento
          </Text>
          <Box w="full" h="1px" bg="rgba(201,164,106,0.3)" mb={5} position="relative">
            <Box w="4px" h="4px" bg="brand.gold" borderRadius="full"
              position="absolute" top="-1.5px" left="0" />
          </Box>
          <VStack align="start" spacing={4}>
            <Text fontFamily="'Inter', sans-serif" fontSize={{ base: 'sm', md: 'md' }} color="#fff">
              Online e Presencial
            </Text>

            <HStack spacing={3}>
              <Icon as={FaPhoneAlt} boxSize={{ base: 4, md: 5 }} color="brand.gold" />
              <Link href="tel:+554734079956"
                fontFamily="'Inter', sans-serif" fontSize={{ base: 'sm', md: 'md' }}
                color="#fff"
                _hover={{ color: 'white', textDecoration: 'none' }}
              >
                (47) 3407-9956
              </Link>
            </HStack>

            <HStack spacing={3}>
              <Icon as={FaWhatsapp} boxSize={{ base: 4, md: 5 }} color="brand.gold" />
              <Link href="https://wa.me/5541987820288" isExternal
                fontFamily="'Inter', sans-serif" fontSize={{ base: 'sm', md: 'md' }}
                color="#fff"
                _hover={{ color: 'white', textDecoration: 'none' }}
              >
                (41) 98782-0288
              </Link>
            </HStack>

            <HStack spacing={3}>
              <Icon as={FaInstagram} boxSize={{ base: 4, md: 5 }} color="brand.gold" />
              <Link href="https://instagram.com/" isExternal
                fontFamily="'Inter', sans-serif" fontSize={{ base: 'sm', md: 'md' }}
                color="#fff"
                _hover={{ color: 'white', textDecoration: 'none' }}
              >
                @psi.geisacosta
              </Link>
            </HStack>

            <HStack spacing={3}>
              <Icon as={MdEmail} boxSize={{ base: 4, md: 5 }} color="brand.gold" />
              <Link href="mailto:geisacostapsicanalista@gmail.com"
                fontFamily="'Inter', sans-serif" fontSize={{ base: 'sm', md: 'md' }}
                color="#fff"
                _hover={{ color: 'white', textDecoration: 'none' }}
              >
                geisacostapsicanalista@gmail.com
              </Link>
            </HStack>

            <HStack spacing={3}>
              <Icon as={MdLocationOn} boxSize={{ base: 4, md: 5 }} color="brand.gold" />
              <Text fontFamily="'Inter', sans-serif" fontSize={{ base: 'sm', md: 'md' }} color="#fff">
                Rua Evaristo da Veiga 156- 6 andar/ bairro Glória
                Joinville - SC
              </Text>
            </HStack>
          </VStack>
        </GridItem>

        {/* Vamos Conversar CTA */}
        <GridItem>
          <Text
            fontFamily="'Manrope', sans-serif"
            fontSize={{ base: '0.7rem', md: '0.82rem' }} fontWeight="700"
            letterSpacing="0.18em" textTransform="uppercase"
            color="white" mb={3}
          >
            Vamos Conversar?
          </Text>
          <Box w="full" h="1px" bg="rgba(201,164,106,0.3)" mb={5} position="relative">
            <Box w="4px" h="4px" bg="brand.gold" borderRadius="full"
              position="absolute" top="-1.5px" left="0" />
          </Box>
          <Text
            fontFamily="'Inter', sans-serif"
            fontSize={{ base: 'sm', md: 'md' }}
            color="#fff"
            lineHeight={1.8}
            mb={6}
          >
            Dê o primeiro passo no seu processo de transformação.
          </Text>
          <Button
            as={Link}
            href="https://wa.me/5541987820288"
            isExternal
            variant="outline_fig"
            borderColor="rgba(201,164,106,0.5)"
            color="white"
            fontSize={{ base: '0.65rem', md: '0.78rem' }}
            px={6} py={3}
            _hover={{ bg: 'rgba(201,164,106,0.15)', textDecoration: 'none' }}
          >
            Agendar Sua Conversa
          </Button>
        </GridItem>

      </Grid>

      {/* Illustrated bottom — normal flow, not absolute */}
      <Flex
        w="100%"
       justify={{ base: 'center', md: 'center' }}
        pointerEvents="none"
        mt={-4}
      >
        <img className='footer-designer'
          src="/footer.png"
          alt=""
          style={{
            width: '80%',
            height: 'auto',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
      </Flex>

      {/* Bottom bar */}
      <Box
        borderTop="1px solid" borderColor="rgba(255,255,255,0.08)"
        bg="brand.fig"
      >
        <Flex
          maxW="1440px" mx="auto"
          px={{ base: 6, md: 14 }}
          py={5}
          justify={{ base: 'center', md: 'space-between' }}
          align="center"
          flexWrap="wrap"
          gap={3}
        >
          <Text fontFamily="'Inter', sans-serif" fontSize={{ base: 'xs', md: 'sm' }} color="#fff">
            © 2025 Geisa Costa. Todos os direitos reservados.
          </Text>
          <HStack spacing={6} divider={<Box w="1px" h="12px" bg="#fff" />}>
            {['Política de Privacidade', 'Termos de Uso'].map(label => (
              <Link key={label} href="#"
                fontFamily="'Inter', sans-serif" fontSize={{ base: 'xs', md: 'sm' }}
                color="#fff"
                _hover={{ color: '#fff', textDecoration: 'none' }}
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