import { Box, Button } from '@skynexui/components'
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json'
import { Titulo } from '../components/Titulo'
import { supabase } from '../service/client'

export default function PaginaInicial() {
  const [user, setUser] = React.useState(null);
  const roteamento = useRouter();

  React.useEffect(() => {
      checkUser();

      window.addEventListener('hashchange', function() {
      checkUser();
    });
  }, [])

  async function checkUser() {
    const user = supabase.auth.user();
    setUser(user);
  }
  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: 'github'
    });
  }

  if (user) {
    /* console.log(user); */
    roteamento.push(`/chat?user=${user.user_metadata.preferred_username}`);
  }
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
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
            border: '1px solid', borderColor: appConfig.theme.colors.primary[900]
          }}
        >
          {/* Formulário */}
          <Box
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
              width: '50%', textAlign: 'center',
            }}
          >
            <Titulo tag="h2">Boas vindas ao Chat do Tarkov!</Titulo>
            
            <Button
              type='button'
              label='GitHub'
              iconName='Github'
              onClick={(event)=> {
                event.preventDefault();
                signInWithGithub()
              }}
              
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}
        </Box>
      </Box>
    </>
  );
}