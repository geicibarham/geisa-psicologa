import { Box, Grid, VStack, Text, Icon } from '@chakra-ui/react'
import { MdFavorite, MdSecurity, MdPerson, MdAutoAwesome } from 'react-icons/md'

const PILLARS = [
  { icon: MdFavorite,    label: 'Escuta Acolhedora\ne Sem Julgamentos' },
  { icon: MdSecurity,    label: 'Ambiente Seguro\ne Sigiloso' },
  { icon: MdPerson,      label: 'Atendimento\nPersonalizado' },
  { icon: MdAutoAwesome, label: 'Foco no Seu\nCrescimento e Bem-Estar' },
]

export default function Pillars() {
  return (
    <Box className='pilar-outer' bg="white"  borderTop="1px solid" borderColor="rgba(216,197,175,0.5)">
      <div className='pilar-container'>
      <Grid
        maxW="1160px" mx="auto"
        px={{ base: 5, md: 10 }}
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
      >
        {PILLARS.map(({ icon, label }, i) => (
          <VStack
            key={label}
            py={10} px={4}
            textAlign="center"
            spacing={4}
            borderRight={i < 3 ? '1px solid' : 'none'}
            borderColor="rgba(216,197,175,0.35)"
          >
            <Icon as={icon} boxSize={20} color="brand.fig" />
            <Text
              fontFamily="'Manrope', sans-serif"
              fontSize="0.63rem"
              fontWeight="600"
              letterSpacing="0.12em"
              textTransform="uppercase"
              color="brand.text"
              lineHeight={1.6}
              whiteSpace="pre-line"
            >
              {label}
            </Text>
          </VStack>
        ))}
      </Grid>
      </div>
    </Box>
  )
}
