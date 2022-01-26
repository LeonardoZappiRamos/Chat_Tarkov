import { Box, Button } from '@skynexui/components';
import appConfig from '../config.json';
import { useRouter } from 'next/router';

export default function ChatPage() {
  const roteamento = useRouter();
  return (
    <>
      <Box
      styleSheet={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: 'url(https://mocah.org/thumbnail/410547-nature-dawn-Escape-from-Tarkov.png)',
        backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
      }}
    >
      <Box
        as="form"
        onSubmit={function (infosDoEvento) {
          infosDoEvento.preventDefault();
          roteamento.push('./');
          // window.location.href = '/chat';
        }}
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          width: '100%', maxWidth: '700px',
          borderRadius: '5px', padding: '32px', margin: '16px',
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          backgroundColor: appConfig.theme.colors.neutrals[700],
          border: '1px solid', borderColor: appConfig.theme.colors.primary[900],
          color: appConfig.theme.colors.neutrals["050"]
        }}
        >
          <h1>Página do Chat</h1>
          <Button
            type='submit'
            label='Voltar'
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["000"],
              mainColor: appConfig.theme.colors.primary[500],
              mainColorLight: appConfig.theme.colors.primary[400],
              mainColorStrong: appConfig.theme.colors.primary[600],
            }}
          />
        </Box>
    </Box>
  </>
  )
}