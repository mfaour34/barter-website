import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="bg-white">
      <div class="container mx-auto px-8">
        <div class="w-full flex flex-col md:flex-row py-6">
          <div class="flex-1 mb-6 text-black">
            <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="12" fill="url(#paint0_linear)" />
              <path d="M30.8954 25.6H54.5834C59.6234 25.6 63.7274 26.896 66.8954 29.488C70.0634 32.032 71.6474 35.344 71.6474 39.424C71.6474 41.632 71.0954 43.648 69.9914 45.472C68.8874 47.296 67.3754 48.808 65.4554 50.008C67.8554 51.16 69.7754 52.744 71.2154 54.76C72.6554 56.728 73.3754 58.936 73.3754 61.384C73.3754 65.752 71.7434 69.28 68.4794 71.968C65.2634 74.656 61.0154 76 55.7354 76H30.8954V25.6ZM53.9354 34.24H41.3354V46.192H53.9354C56.1434 46.192 57.9194 45.664 59.2634 44.608C60.6074 43.504 61.2794 42.04 61.2794 40.216C61.2794 38.392 60.6074 36.952 59.2634 35.896C57.9194 34.792 56.1434 34.24 53.9354 34.24ZM54.9434 67.36C57.3434 67.36 59.2634 66.784 60.7034 65.632C62.1434 64.432 62.8634 62.824 62.8634 60.808C62.8634 58.888 62.1434 57.328 60.7034 56.128C59.2634 54.928 57.3434 54.328 54.9434 54.328H41.3354V67.36H54.9434Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear" x1="0" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#2979FF" />
                  <stop offset="1" stop-color="#4C589E" />
                </linearGradient>
              </defs>
            </svg>
            <a class="text-black-600 no-underline hover:no-underline font-bold text-1xl lg:text-3xl" href="#">
              Barter
            </a>
          </div>
         
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Legal</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link to="/terms"><a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a></Link>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <Link to="/privacy"><a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a></Link>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Social</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="http://www.facebook.com" class="no-underline hover:underline text-gray-800 hover:text-pink-500" target="_blank">Facebook</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="http://www.linkedin.com" class="no-underline hover:underline text-gray-800 hover:text-pink-500" target="_blank">Linkedin</a>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="http://www.twitter.com" class="no-underline hover:underline text-gray-800 hover:text-pink-500" target="_blank">Twitter</a>
              </li>
            </ul>
          </div>
          <div class="flex-1">
            <p class="uppercase text-gray-500 md:mb-6">Company</p>
            <ul class="list-reset mb-6">
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link to="/about-us"><a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a></Link>
              </li>
              <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <Link to="/about-us"><a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;