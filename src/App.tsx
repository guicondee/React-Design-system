import { Envelope, Lock } from 'phosphor-react'
import '../src/styles/global.css'
import { Button } from './components/Button'
import { CheckBox } from './components/CheckBox'
import { Heading } from './components/Heading'
import { Logo } from './components/logo'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'

export function App() {

  return (
   <div className='w-screen h-screen text-gray-100 bg-gray-900 flex items-center justify-center flex-col'>
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg' clasName='mt-4'>
          Ignite Lab
        </Heading>

        <Text size='lg' clasName='text-gray-400 mt-1'>Faça login e comece a usar! </Text>
      </header>

      <form className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text clasName='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' />
          </TextInput.Root>
        </label>

        <label htmlFor="passworld" className='flex flex-col gap-3'>
          <Text clasName='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type='password' id='passworld' placeholder='********' />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <CheckBox id='remember'/>
          <Text size='sm' clasName='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
      </form>

      <footer className='flex flex-col gap-4 items-center mt-8'>
        <Text asChild size='sm'>
        <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha</a>
        </Text>
        <Text asChild size='sm'>
        <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>

      </footer>
    </div>
  )
}

 
