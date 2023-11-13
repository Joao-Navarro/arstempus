'use client'

import { ThemeContextNovo } from '@/context/Theme';

import Header from "@/components/Header"

import styles from "@/app/page.module.css"

import { createContext, useState } from 'react';

import { LoggedUserProvider } from '@/context/LoggedUserContext';
import Link from 'next/link';
import Footer from '@/components/Footer';

function Home() {

  return (

    <>


      <Header />



      <div className={styles.banner}>

        <img src="/schoolAtenas.png" alt="Escola de Atenas" />

        <div className={styles.bannerTxt}>

          <h1>Ars Tempus</h1>
          <p>Descubra mais sobre os movimentos artísticos</p>

        </div>

      </div>

      <div className={styles.body}>

        <h3 className={styles.movimentos}>Movimentos</h3>

        <div className={styles.card}>

          <Link href="/renascimento" ><img src="/principalRenascimento.png" alt="Principal Renascimento" /></Link>

          <h3>Renascimento</h3>

        </div>

        <div className={styles.card}>

          <Link href="/abstracionismo" ><img src="/principalAbstracionismo.png" alt="Principal Abstracionismo" /></Link>

          <h3>Abstracionismo</h3>

        </div>

        <div className={styles.card}>

          <Link href="/barroco" ><img src="/principalBarroco.png" alt="Principal Barroco" /></Link>

          <h3>Barroco</h3>

        </div>


        <div className={styles.card}>

          <Link href="/impressionismo" ><img src="/principalImpressionismo.png" alt="Principal Impressionismo" /></Link>

          <h3>Impressionismo</h3>

        </div>

        <div className={styles.card}>

          <Link href="/rococo" ><img src="/principalRococo.png" alt="Principal Rococo" /></Link>

          <h3>Rococó</h3>

        </div>

        <div className={styles.card}>

          <Link href="/romantismo" ><img src="/principalRomantismo.png" alt="Principal Romantismo" /></Link>

          <h3>Romantismo</h3>

        </div>

        <div className={styles.card}>

          <Link href="/realismo" ><img src="/principalRealismo.png" alt="Principal Realismo" /></Link>

          <h3>Realismo</h3>

        </div>

        <div className={styles.card}>

          <Link href="/neoclassicismo" ><img src="/principalNeoclassicismo.png" alt="Principal Neoclassicismo" /></Link>

          <h3>Neoclassicismo</h3>

        </div>


      </div>

      <Footer />

    </>

  )

}

export default Home
