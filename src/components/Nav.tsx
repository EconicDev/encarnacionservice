import {  useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline/index.js";
import type { NavProps } from '../types';

const Nav = ({ location, translations, language, children }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  
  const navSelectedStyle =
    "rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white";
  const navMobileSelectedStyle =
    "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white";
  const navDefaultStyle =
    "rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-700 hover:text-white";
  const navMobileDefaultStyle =
    "block rounded-md px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-700 hover:text-white";
  const languagePrefix = language === 'es' ? '' : "/" + language;

  return (
    <Disclosure as="nav" className="bg-white-900">
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="/astro-template/assets/encarnacion-services-logo.png"
                  alt="Encarnación Service SRL"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="/astro-template/assets/encarnacion-services-logo.png"
                  alt="Encarnación Service SRL"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href={"/astro-template" + languagePrefix + "/"}
                    className={
                      location === "home"
                        ? navSelectedStyle
                        : navDefaultStyle
                    }
                  >
                    {translations.home}
                  </a>
                  <a
                    href={"/astro-template" + languagePrefix + "/about/"}
                    className={
                      location === "about" ? navSelectedStyle : navDefaultStyle
                    }
                  >
                    {translations.about}
                  </a>
                  <a
                    href={"/astro-template" + languagePrefix + "/services/"}
                    className={
                      location === "services"
                        ? navSelectedStyle
                        : navDefaultStyle
                    }
                  >
                    {translations.services}
                  </a>
                  <a
                    href={"/astro-template" + languagePrefix + "/contact/"}
                    className={
                      location === "contact"
                        ? navSelectedStyle
                        : navDefaultStyle
                    }
                  >
                    {translations.contact}
                  </a>
                </div>
              </div>
            </div>
            {children}
            <div className="-mr-2 flex sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Disclosure.Button
              as="a"
              href={"/astro-template" + languagePrefix + "/"}
              className={
                location === "home"
                  ? navMobileSelectedStyle
                  : navMobileDefaultStyle
              }
            >
              {translations.home}
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href={"/astro-template" + languagePrefix + "/about/"}
              className={
                location === "about"
                  ? navMobileSelectedStyle
                  : navMobileDefaultStyle
              }
            >
              {translations.about}
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href={"/astro-template" + languagePrefix + "/services/"}
              className={
                location === "services"
                  ? navMobileSelectedStyle
                  : navMobileDefaultStyle
              }
            >
              {translations.services}
            </Disclosure.Button>
            <Disclosure.Button
              as="a"
              href={"/astro-template" + languagePrefix + "/contact/"}
              className={
                location === "contact"
                  ? navMobileSelectedStyle
                  : navMobileDefaultStyle
              }
            >
              {translations.contact}
            </Disclosure.Button>
          </div>
        </Disclosure.Panel>
      </>
    </Disclosure>
  );
};
export default Nav;
