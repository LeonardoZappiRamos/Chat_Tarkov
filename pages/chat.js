import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);
    
    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            id: listaDeMensagens.length + 1,
            de: 'vanessametonini',
            texto: novaMensagem,
        };
        setListaDeMensagens([
            mensagem,
            ...listaDeMensagens,
        ]);
        setMensagem('');
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[200],
                backgroundImage: 'url(https://mocah.org/thumbnail/410547-nature-dawn-Escape-from-Tarkov.png)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[200],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        display: 'flex',
                        flexDirection: 'row',
                        height: '100%', width: '100%'
                    }}
                >   
                    <Box
                        styleSheet={{
                            position: 'relative',
                            display: 'flex',
                            flex: 1,
                            height: '80%', minHeight: '700px',
                            backgroundColor: appConfig.theme.colors.neutrals[999],
                            flexDirection: 'column',
                            borderRadius: '2px',
                            marginRight:'10px',
                            padding: '16px',
                        }}
                    >

                        <CardList/>

                    </Box>
                    
                    <Box
                        styleSheet={{
                            position: 'relative',
                            display: 'flex',
                            flex: 5,
                            height: '80%', minHeight: '700px',
                            backgroundColor: appConfig.theme.colors.neutrals[999],
                            flexDirection: 'column',
                            borderRadius: '2px',
                            padding: '16px',
                        }}
                    >
                        <MessageList mensagens={listaDeMensagens} setMensagens={setListaDeMensagens} />

                        <Box
                            as="form"
                            styleSheet={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <TextField
                                value={mensagem}
                                onChange={(event) => {
                                    const valor = event.target.value;
                                    setMensagem(valor);
                                }}
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        event.preventDefault();
                                        handleNovaMensagem(mensagem);
                                    }
                                }}
                                placeholder="Insira sua mensagem aqui..."
                                type="textarea"
                                styleSheet={{
                                    width: '100%',
                                    border: '0',
                                    resize: 'none',
                                    borderRadius: '5px',
                                    padding: '6px 8px',
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                    marginRight: '12px',
                                    color: appConfig.theme.colors.neutrals[200],
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            
                            <Box styleSheet={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/vanessametonini.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                            <Button
                                type='reset'
                                variant='tertiary'
                                colorVariant='neutral'
                                size= 'sm'
                                iconName='trash'
                                onClick= {() => {
                                    let novaLista = props.mensagens.filter(props => props.id != mensagem.id)
                                    /* console.log(novaLista) */
                                    props.setMensagens(novaLista)
                                }}
                            ></Button>
                            </Box>  
                        </Box>
                        {mensagem.texto}  
                    </Text>
                );
            })}
        </Box>
    )
}

function CardList(){
    return (
        <>
            <Box 
                styleSheet={{ 
                    width: '100%', borderRadius: '2px',
                    marginBottom: '16px', padding: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'flex-start', 
                    backgroundColor: appConfig.theme.colors.neutrals['050']
                }} >
                <Image
                    styleSheet={{
                        width: '52px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'inline-block',
                        marginRight: '5px',
                    }}
                    src={`https://github.com/vanessametonini.png`}
                />
                <Box
                    styleSheet={{
                        display: 'flex', justifyContent:'space-between',
                        width: '100%', height: '100%', alignItems: 'center',
                        padding: '12px 0',
                    }}
                >
                <Text 
                variant='heading5'
                styleSheet={{
                    color: appConfig.theme.colors.neutrals[999],
                }} 
                >
                    vanessametonini
                </Text>
                    <Text variant='heading5'>
                        27/01
                    </Text>
                </Box>
            </Box>
        </>
    )
}