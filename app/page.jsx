'use client'

import Header from "@/components/Header"

import styles from "@/app/page.module.css"

import Image from "next/image";

import { createContext, useState } from 'react';

import { LoggedUserProvider } from '@/context/LoggedUserContext';
import Link from 'next/link';
import Footer from '@/components/Footer';

function Home() {

  return (

    <>


      <Header />



      <div className={styles.banner}>

        <Image src="/schoolAtenas.png" alt="Escola de Atenas" width={1400} height={690} />

        <div className={styles.bannerTxt}>

          <h1>Ars Tempus</h1>
          <p>Descubra mais sobre os movimentos artísticos</p>

        </div>

      </div>

      <div className={styles.body}>

        <h3 className={styles.movimentos}>Movimentos</h3>

        <div className={styles.card}>

          <Link href="/renascimento" ><Image src="/principalRenascimento.png" alt="Principal Renascimento" width={580} height={390} /></Link>

          <h3>Renascimento</h3>

        </div>

        <div className={styles.card}>

          <Link href="/abstracionismo" ><Image src="/principalAbstracionismo.png" alt="Principal Abstracionismo" width={580} height={390} /></Link>

          <h3>Abstracionismo</h3>

        </div>

        <div className={styles.card}>

          <Link href="/barroco" ><Image src="/principalBarroco.png" alt="Principal Barroco" width={580} height={390} /></Link>

          <h3>Barroco</h3>

        </div>


        <div className={styles.card}>

          <Link href="/impressionismo" ><Image src="/principalImpressionismo.png" alt="Principal Impressionismo" width={580} height={390} /></Link>

          <h3>Impressionismo</h3>

        </div>

        <div className={styles.card}>

          <Link href="/rococo" ><Image src="/principalRococo.png" alt="Principal Rococo" width={580} height={390} /></Link>

          <h3>Rococó</h3>

        </div>

        <div className={styles.card}>

          <Link href="/romantismo" ><Image src="/principalRomantismo.png" alt="Principal Romantismo" width={580} height={390} /></Link>

          <h3>Romantismo</h3>

        </div>

        <div className={styles.card}>

          <Link href="/realismo" ><Image src="/principalRealismo.png" alt="Principal Realismo" width={580} height={390} /></Link>

          <h3>Realismo</h3>

        </div>

        <div className={styles.card}>

          <Link href="/neoclassicismo" ><Image src="/principalNeoclassicismo.png" alt="Principal Neoclassicismo" width={580} height={390} /></Link>

          <h3>Neoclassicismo</h3>

        </div>


      </div>

      <Footer />

    </>

  )

}

export default Home
