import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import memes from './assets/Memes.gg.svg'
import icon from './assets/memes.png'
import appStore from './assets/appstore.png'
import banner from './assets/phone.png'
import creditCard from './assets/CreditCard.svg'
import sparkle from './assets/Sparkle.svg'
import ClockClockwise from './assets/ClockClockwise.svg'
import footerImage from './assets/footerimage.svg'
import Card from './Card'
import { Link } from 'react-router-dom'
const cards = [
  {
    title: 'Easy Transactions',
    icon: creditCard,
    description: 'Start trading instantly with your debit or credit card. Quick, seamless, and secure.'
  },
  {
    title: 'AI Trading Agents',
    description: 'Let our AI agent handle the hard work. Customize your trades and execute smarter strategies.',
    icon: sparkle,
  }, {
    title: 'Stay Updated',
    description: 'Be the first to trade the hottest coins. We list earlier than competitors, giving you a head start.',
    icon: ClockClockwise,
  }
]

const footeerItems = [
  { text: 'Terms of Service', linkTo: '/terms' },
  { text: 'Privacy Policy', linkTo: '/policy' },
  { text: 'Support', href: 'mailto:support@memes.gg' },
  { image: footerImage }
]

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="app home">
      <div className='headerDesktop'>
        <div className='leftCol'>
          <div className='icons'>
            <img src={icon} alt="memesicon1" className='memesicon1' />
            <img src={memes} alt="" className='memesIcon' />
          </div>
          <div>
            <img src={banner} alt="" className='bannerImage' />
          </div>
          <p className='headerText'><span className='beTheFirst'>Be the first </span>to trending memecoins</p>
          <p className='subtitle'>Join the platform built for meme traders: fast, easy, and always ahead of the curve.</p>
          <div className='appStore'>
            <a href="https://apps.apple.com/app/id6475736639" target="_blank" rel="noopener noreferrer">
              <img src={appStore} alt="App Store" />
            </a>          </div>
        </div>
        <div className='rihgtCol'>
          <img src={banner} alt="" className='bannerImageDesktop' />
        </div>

      </div>

      <div className='cards'>
        {cards.map((card, index) => <Card key={index} {...card} />)}
      </div>
      <div className="footer">
        <p className='footerText'>
          Memes.gg is not an exchange and does not provide investment advice. The content of this app is not investment advice and does not constitute any odder or solicitation to offer or recommendation of any product or service. Memes.gg is a visual interface to blockchain decentralized exchanges and does not directly exchange, develop, create, maintain, or endorse any cryptocurrencies.
        </p>
        <div className="footerContainer">


          <div className="footerItems">
            {footeerItems.map((item, index) => (
              <div key={index} className='footerItem'>
                {item.href && <a href={item.href}>{item.text}</a>}
                {item.linkTo && <Link to={item.linkTo}>{item.text}</Link>}
                {item.image && <img src={item.image} alt="" />}
              </div>
            ))}
          </div>
          <img src={footerImage} alt="" className='desktopFooterImage' />
        </div>
      </div>
    </div>
  )
}

export default Home
