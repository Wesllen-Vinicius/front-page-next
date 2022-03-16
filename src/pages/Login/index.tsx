import * as React from 'react';

export default function Login() {
  return (
    <body>
      <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100'>
        <div
          className='
          w-50 flex
          max-w-md
          flex-col
          rounded-3xl
          bg-white
          px-4
          py-8
          shadow-md
          sm:px-6
          md:px-8
          lg:px-10
        '
        >
          <div className='self-center text-xl font-medium text-gray-800 sm:text-3xl'>
            Bem vindo de Volta!
          </div>
          <div className='mt-4 self-center text-xl text-gray-800 sm:text-sm'>
            Informe suas credenciais para poder acessar.
          </div>

          <div className='mt-10'>
            <form action='#'>
              <div className='mb-5 flex flex-col'>
                <label
                  htmlFor='email'
                  className='mb-1 text-xs tracking-wide text-gray-600'
                >
                  E-Mail:
                </label>
                <div className='relative'>
                  <div
                    className='
                    absolute
                    left-0
                    top-0
                    inline-flex
                    h-full
                    w-10
                    items-center
                    justify-center
                    text-gray-400
                  '
                  >
                    <i className='fas fa-at text-blue-500'></i>
                  </div>

                  <input
                    id='email'
                    type='email'
                    name='email'
                    className='
                    w-full
                    rounded-2xl
                    border
                    border-gray-400
                    py-2
                    pl-10 pr-4
                    text-sm
                    placeholder-gray-500
                    focus:border-blue-400 focus:outline-none
                  '
                    placeholder='Informe seu Email'
                  />
                </div>
              </div>
              <div className='mb-6 flex flex-col'>
                <label
                  htmlFor='password'
                  className='mb-1 text-xs tracking-wide text-gray-600 sm:text-sm'
                >
                  Senha:
                </label>
                <div className='relative'>
                  <div
                    className='
                    absolute
                    left-0
                    top-0
                    inline-flex
                    h-full
                    w-10
                    items-center
                    justify-center
                    text-gray-400
                  '
                  >
                    <span>
                      <i className='fas fa-lock text-blue-500'></i>
                    </span>
                  </div>

                  <input
                    id='password'
                    type='password'
                    name='password'
                    className='
                    w-full
                    rounded-2xl
                    border
                    border-gray-400
                    py-2
                    pl-10 pr-4
                    text-sm
                    placeholder-gray-500
                    focus:border-blue-400 focus:outline-none
                  '
                    placeholder='Informe sua senha'
                  />
                </div>
              </div>

              <div className='flex w-full'>
                <button
                  type='submit'
                  className='
                  mt-2
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-2xl bg-blue-500
                  py-2
                  text-sm
                  text-white
                  transition
                  duration-150
                  ease-in
                  hover:bg-blue-600
                  focus:outline-none
                  sm:text-base
                '
                >
                  <span className='mr-2 uppercase'>Logar</span>
                  <span>
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='mt-6 flex items-center justify-center'>
          <a
            href='#'
            target='_blank'
            className='
            inline-flex
            items-center
            text-center
            text-xs
            font-medium text-gray-700
          '
          ></a>
        </div>
      </div>
    </body>
  );
}
