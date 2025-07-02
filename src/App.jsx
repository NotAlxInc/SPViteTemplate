import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import tailwindLogo from './assets/tailwind.svg'
import sprestlibLogo from './assets/sprestlib.svg'
import './App.css'
import packageJson from '../package.json'

const sprLib = window.sprLib;

function App() {
  const sprLibv = sprLib ? sprLib.version : 'Not loaded'
  const reactVersion = packageJson.dependencies.react.replace('^', '')
  const viteVersion = packageJson.devDependencies.vite.replace('^', '')
  const tailwindVersion = packageJson.dependencies.tailwindcss.replace('^', '')

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          <img src={tailwindLogo} className="logo " alt="Tailwind logo" />
        </a>
        <a href="https://gitbrent.github.io/SpRestLib/" target="_blank">
          <img src={sprestlibLogo} className="logo" alt="SPRestLib logo" />
        </a>
      </div>
      <h1>Vite + React + Tailwind + SPRestLib</h1>

      <div className="text-xs space-y-1 mt-4">
        <p>Vite version: {viteVersion}</p>
        <p>React version: {reactVersion}</p>
        <p>Tailwind version: {tailwindVersion}</p>
        <p>SPRestLib version: {sprLibv}</p>
      </div>
    </>
  )
}

export default App
