import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, LanguageIcon, XMarkIcon } from "@heroicons/react/24/outline/index.js";
import type { NavProps } from '../types';


const Nav = ({ location, translations, language, children }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageToggle, setLanguageToggle] = useState(false);

  const navSelectedStyle =
    "rounded-sm bg-fulvous-600 px-3 py-2 text-sm font-medium text-white";
  const navMobileSelectedStyle =
    "block rounded-sm bg-fulvous-600 px-3 py-2 text-base font-medium text-white";
  const navDefaultStyle =
    "rounded-sm px-3 py-2 text-sm font-medium text-white hover:bg-fulvous-600 hover:text-white transition duration-300 ease-in-out";
  const navMobileDefaultStyle =
    "block rounded-sm px-3 py-2 text-base font-medium text-white hover:bg-fulvous-600 hover:text-white";
  const languagePrefix = language === 'es' ? '' : "/" + language;

  return (
    <Disclosure as="nav" className="bg-slate-blue-950">
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* Left nav links (desktop) */}
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-start">
              <div className="flex space-x-4">
                <a
                  href={languagePrefix + "/"}
                  className={
                    location === "home" ? navSelectedStyle : navDefaultStyle
                  }
                >
                  {translations.home}
                </a>
                <a
                  href={languagePrefix + "/about/"}
                  className={
                    location === "about" ? navSelectedStyle : navDefaultStyle
                  }
                >
                  {translations.about}
                </a>
              </div>
            </div>

            {/* Centered logo (desktop) */}
            <div className="hidden sm:flex sm:flex-shrink-0 sm:items-center sm:justify-center sm:absolute sm:left-1/2 sm:-translate-x-1/2">
              <a href={languagePrefix + "/"}>
                <img
                  className="h-10 w-auto"
                  src="/logo/Encarnacion_Service_Logo_svg_white_01.svg"
                  alt="Encarnación Service SRL"
                />
              </a>
              <span className="px-1 text-white leading-tight font-semibold">Encarnación<br/>Service</span>
            </div>

            {/* Right nav links (desktop) */}
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
              <div className="flex space-x-4">
                <a
                  href={languagePrefix + "/services/"}
                  className={
                    location === "services" ? navSelectedStyle : navDefaultStyle
                  }
                >
                  {translations.services}
                </a>
                <a
                  href={languagePrefix + "/contact/"}
                  className={
                    location === "contact" ? navSelectedStyle : navDefaultStyle
                  }
                >
                  {translations.contact}
                </a>
                {languageToggle ? children
                : (
                  <button
                    onClick={() => setLanguageToggle(!languageToggle)}
                    className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-fulvous-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <span className="sr-only">language</span>
                    <LanguageIcon className="block h-6 w-6" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>

            {/* Mobile: logo on left, hamburger on right */}
            <div className="flex sm:hidden flex-shrink-0">
              <a href={languagePrefix + "/"}>
                <img
                  className="block h-10 w-auto"
                  src="/logo/Encarnacion_Service_Logo_svg_white_01.svg"
                  alt="Encarnación Service SRL"
                />
              </a>
            </div>
            <div className="-mr-2 flex sm:hidden">
              <Disclosure.Button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-fulvous-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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

        <Disclosure.Panel className="sm:hidden bg-slate-blue-950">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Disclosure.Button
              as="a"
              href={languagePrefix + "/"}
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
              href={languagePrefix + "/about/"}
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
              href={languagePrefix + "/services/"}
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
              href={languagePrefix + "/contact/"}
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
