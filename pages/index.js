import React, { useState } from 'react'
import useSWR from 'swr'
import Scrollspy from 'react-scrollspy'
import { FaFacebookF, FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa'

const fetcher = (...args) => fetch(...args).then(res => res.json())
const Index = () => {
  const [form, setForm] = useState({
    nome: '',
    assunto: '',
    mensagem: ''
  })

  const formatString = string => {
    return `https://wa.me/+5586998153359?text=Meu nome é ${string.nome}, ${string.assunto}. ${string.mensagem}`
  }

  const onChange = env => {
    const key = env.target.name;
    const value = env.target.value;

    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  const { data, err } = useSWR('https://api.github.com/users/carlosdaniel0/repos', fetcher)
  return (
    <div>
      {/* Div Fixa */}
      <div className='fixed mt-32 ml-2'>
        <a className='rounded-full shadow text-2xl p-3 block my-1 bg-white cursor-pointer hover:text-blue-900' href='https://facebook.com/carlos.daniel2016'><FaFacebookF /></a>
        <a className='rounded-full shadow text-2xl p-3 block my-1 bg-white cursor-pointer hover:text-blue-600' href='https://linkedin.com/in/carlos-daniel0'><FaLinkedin /></a>
        <a className='rounded-full shadow text-2xl p-3 block my-1 bg-white cursor-pointer hover:text-red-300' href='https://instagram.com/carlosdaniel.png'><FaInstagram /></a>
        <a className='rounded-full shadow text-2xl p-3 block my-1 bg-white cursor-pointer hover:text-purple-900' href='https://github.com/carlosdaniel0'><FaGithub /></a>
      </div>
      {/*  Apresentação  */}
      <div className='bg-100'>
        <div className='sm:flex justify-between mx-8'>
          <div className='mt-8 mx-auto md:my-auto'>
            <h2 className='text-blue-400 text-2xl'>Olá, eu sou</h2>
            <h1 className='text-blue-900 text-4xl font-black'>Carlos Daniel</h1>
            <h3 className='text-gray-800 font-bold text-xl'>Programador Fullstack</h3>
            <span className='text-gray-700'>Desenvolvimento web e mobile</span> <br />

            <Scrollspy items={['whatsapp']}>
              <a href='#contato' id='button-contact-me' className='mt-8 text-center block text-gray-800 hover:bg-gray-800 hover:text-white font-bold rounded-3xl p-3 border border-gray-800'>Fale Comigo</a>
            </Scrollspy>
          </div>

          <div className='mx-auto pt-8'>
            <img src='./me.png' />
          </div>
        </div>
      </div>

      {/*  Formação  */}
      {/* Card */}
      <div className='formacao bg-white shadow rounded-3xl lg:rounded-full md:w-3/5 w-4/5  mx-auto py-4 mb-8'>
        <h1 className='font-bold font-2xl text-center'>Formação</h1>
        <div className='lg:flex mx-8 my-4'>
          {/* Item */}
          <div className='sm:flex content-between'>
            <div>
              <img src='./ies/logo_estacio.png' className='mx-auto' width='75px' />
            </div>
            <div>
              <h1 className='font-bold md:text-left text-center'>Superior</h1>
              <h2>Análise e Desenolvimento de Sistemas</h2>
              <span>Cursando 1º período</span>
            </div>
          </div>

          <div className='sm:flex content-between'>
            <div>
              <img className='mx-auto' src='./ies/logo_ifpi.png' width='75px' />
            </div>
            <div>
              <h1 className='font-bold md:text-left text-center'>Técnico</h1>
              <h2>Técnico em Desenvolvimento de Sistemas</h2>
              <span>Cursando 3º período</span>
            </div>
          </div>
        </div>
      </div>
      {/* Tecnologias */}
      <div className='my-8'>
        <h1 className='text-2xl font-bold text-gray-800 text-center'>Tecnologias</h1>
        <div className='text-center mt-4'>
          <img className='inline p-2' width='250px' src='./tecnologies/logo_flutter.png' />
          <img className='inline p-2' width='250px' src='./tecnologies/logo_node.png' />
          <img className='inline p-2' width='250px' src='./tecnologies/logo_next.png' />
          <img className='inline p-2' width='250px' src='./tecnologies/logo_firebase.png' />
        </div>
        <div className='text-center'>
          <img className='inline p-2' width='150px' src='./tecnologies/html5.png' />
          <img className='inline p-2' width='110px' src='./tecnologies/css3.png' />
          <img className='inline p-2' width='120px' src='./tecnologies/js.png' />
          <img className='inline p-2' width='250px' src='./tecnologies/logo-react.png' />
          <img className='inline p-2' width='150px' src='./tecnologies/logo-postgresql.png' />
        </div>
      </div>

      {/* Projetos GitHub */}
      <div className='my-8'>
        <h1 className='text-2xl font-bold text-gray-800 text-center mt-2'>Projetos GitHub</h1>
        {/* Cards */}
        <div className='text-center mx-auto'>
          {!data && <h1 className='text-center my-auto text-2xl'>...Carregando</h1>}
          {data && data.map(repo => {
            if (repo.full_name != 'CarlosDaniel0/carlosdaniel0') {
              return <div className='card-project p-6 rounded shadow inline-block m-2' key={data.id}>
                <a href={repo.html_url}><h1 className='hover:underline text-left text-xl font-bold'>{repo.full_name}</h1></a>
                <h2 className='text-left'>Linguagem: {repo.language}</h2>
              </div>
            }
          })
          }
        </div>
      </div>

      {/* Contato */}
      <div className='bg-gray-900 pt-4 pb-12' id='contato'>
        <h1 className='text-2xl font-bold text-white text-center'>Contato</h1>
        <div className='sm:flex justify-between mx-8'>
          <form name='whatsapp' className='mx-auto'>
            <span className='text-center text-3xl text-green-600'><FaWhatsapp /> </span>
            <input className='whatsapp placeholder-gray-800 bg-gray-100 text-gray-600 rounded p-2 my-2' type='text' name='nome' onChange={onChange} placeholder='Nome' /> <br />
            <input className='whatsapp placeholder-gray-800 bg-gray-100 text-gray-600 rounded p-2 my-2' type='text' name='assunto' onChange={onChange} placeholder='Assunto' /> <br />
            <textarea rows='4' className='whatsapp placeholder-gray-800 bg-gray-100 text-gray-600 rounded p-2 my-2' name='mensagem' onChange={onChange} placeholder='Mensagem'></textarea> <br />
            <a href={formatString(form)} className='whatsapp bg-green-700 text-white font-bold p-3 block text-center rounded-3xl' type='submit'>Enviar</a>
          </form>

          <div className='mx-auto md:my-auto mt-8'>
            <div className='bg-gray-100 rounded-2xl p-4'>
              <h1 className='font-bold'>Endereço de email</h1>
              <a href='mailto:carlos.daniel2016@hotmail.com'><h2>carlos.daniel2016@hotmail.com</h2></a>
            </div>
            <div className='bg-gray-100 rounded-2xl p-4 mt-2'>
              <h1 className='font-bold'>Telefone</h1>
              <a href='tel:+5586998153359'><h2>(86) 9.9815-3359</h2></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className='py-4 bg-gray-700 text-white text-center'>©2020 Carlos Daniel - Todos os Direitos Reservados</p>
    </div>
  )
}

export default Index