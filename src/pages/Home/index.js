import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import dadosInicial from '../../data/dados_iniciais.json'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import BannerMain from '../../components/BannerMain'

function Home() {
  return (
    <BrowserRouter>
      <Menu />
      <BannerMain
        videoTitle={dadosInicial.categorias[0].videos[0].titulo}
        url={dadosInicial.categorias[0].videos[0].url}
        videoDescription={'o que é o front-end? Trabalhando na área'}
      ></BannerMain>
      <Carousel
        ignoreFirstVideo
        category={dadosInicial.categorias[0]}
      ></Carousel>
      <Carousel
        ignoreFirstVideo
        category={dadosInicial.categorias[1]}
      ></Carousel>
      <Carousel
        ignoreFirstVideo
        category={dadosInicial.categorias[2]}
      ></Carousel>
      <Carousel
        ignoreFirstVideo
        category={dadosInicial.categorias[3]}
      ></Carousel>
      <Carousel
        ignoreFirstVideo
        category={dadosInicial.categorias[4]}
      ></Carousel>
      <Carousel
        ignoreFirstVideo
        category={dadosInicial.categorias[5]}
      ></Carousel>
      <Footer />
    </BrowserRouter>
  )
}

export default Home
