import { Fragment} from 'react'
import { useContext } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { AuthGoogleContext } from '../contexts/authGoogle';

import LogoTI from '../assets/LogoTI.png'


const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'O que é', href: '#', current: false },
  { name: 'Resenha', href: '#resenha', current: false },
  { name: 'Benefícios', href: '#beneficio', current: false },
]
const userNavigation = [
  { name: 'Sair', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const { user, signOut } = useContext(AuthGoogleContext);
  let userLogado = user

  console.log(userLogado)
  return (
        <div className='min-h-full'>  
          <Disclosure as="nav" className="bg-slate-900 fixed w-full z-10 mt-0 top-0">
                    {({ open }) => (
                      <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                          <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                              <div className="flex-shrink-0">
                                <img className='w-24' src={LogoTI}></img>
                              </div>
                              <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                  {navigation.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className={classNames(
                                        item.current
                                          ? 'bg-gray-900 text-white'
                                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'px-3 py-2 rounded-md text-sm font-medium'
                                      )}
                                      aria-current={item.current ? 'page' : undefined}
                                    >
                                      {item.name}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="hidden md:block">
                              <div className="ml-4 flex items-center md:ml-6">

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                  <div>
                                    <Menu.Button className="max-w-xs bg-gray-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                      <span className="sr-only">Abrir Menu</span>
                                      <h4 className='text-white mr-2 text-base font-medium'>{userLogado.displayName}</h4>
                                      <img className="h-8 w-8 rounded-full" src={userLogado.photoURL} alt="" />
                                    </Menu.Button>
                                  </div>
                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                  >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-slate-300 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                      {userNavigation.map((item) => (
                                        <Menu.Item key={item.name}>
                                          {({ active }) => (
                                            <a
                                              href={item.href}
                                              className={classNames(
                                                active ? 'bg-slate-300' : '',
                                                'block px-4 py-2 text-sm '
                                              )}
                                              onClick={() => signOut()}
                                            >
                                              {item.name}
                                            </a>
                                          )}
                                        </Menu.Item>
                                      ))}
                                    </Menu.Items>
                                  </Transition>
                                </Menu>
                              </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                              {/* Mobile menu button */}
                              <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                )}
                              </Disclosure.Button>
                            </div>
                          </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigation.map((item) => (
                              <Disclosure.Button
                                key={item.name}
                                as="a"
                                href={item.href}
                                className={classNames(
                                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                  'block px-3 py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                              >
                                {item.name}
                              </Disclosure.Button>
                            ))}
                          </div>
                          <div className="pt-4 pb-3 border-t border-gray-700">
                            <div className="flex items-center px-5">
                              <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src={userLogado.photoURL} alt="" />
                              </div>
                              <div className="ml-3">
                                <div className="text-base font-medium leading-none text-white">{userLogado.displayName}</div>
                              </div>
                            </div>
                            <div className="mt-3 px-2 space-y-1">
                              {userNavigation.map((item) => (
                                <Disclosure.Button
                                  key={item.name}
                                  as="a"
                                  href={item.href}
                                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                >
                                  {item.name}
                                </Disclosure.Button>
                              ))}
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
    )
  }