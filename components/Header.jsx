'use client'

import { useState } from "react"

import Link from "next/link"

import { LoggedUserContext } from "@/context/LoggedUserContext";

function Header() {

    const [name, setName] = useState("")

    const menuShow = () => {

        let menuMobile = document.querySelector('.mobile-menu')

        if (menuMobile.classList.contains('open')) {

            menuMobile.classList.remove('open')

            document.querySelector('.icon').src = "/menuIcon.png"

        }

        else {

            menuMobile.classList.add('open')

            document.querySelector('.icon').src = "/menu-icon-close.jpg"


        }

    }


    return (

        <>

            <LoggedUserContext.Provider value={name}>

                <div className="headerBox">

                    <nav>

                        <div className="header">

                            <Link href="./"><h1>Ars Tempus</h1></Link>

                            <div className="name">

                                <input

                                    placeholder="Digite seu primeiro nome"

                                    type="text"

                                    value={name}

                                    onChange={e => setName(e.target.value)}

                                />


                                <p>Olá, {name}</p>

                            </div>


                        </div>

                        <div className="nav-header">

                            <ul>
                                <li>

                                    <Link href="/romantismo" >Romantismo </Link>

                                </li>

                                <li>

                                    <Link href="/abstracionismo" > Abstracionismo </Link>

                                </li>

                                <li>

                                    <Link href="/renascimento" >Renascimento</Link>

                                </li>

                                <li>

                                    <Link href="/barroco" > Barroco </Link>

                                </li>

                                <li>

                                    <Link href="/impressionismo" >Impressionismo </Link>

                                </li>

                                <li>

                                    <Link href="/neoclassicismo" > Neoclassicismo</Link>

                                </li>

                                <li>

                                    <Link href="/rococo" >Rococó</Link>

                                </li>

                                <li>

                                    <Link href="/realismo" > Realismo </Link>

                                </li>

                                <li>

                                    <Link href="/sobrenos" > Sobre Nós </Link>

                                </li>


                            </ul>

                        </div>


                        <div className="mobile-menu-icon">

                            <button onClick={menuShow} className="btn-icon"><img className="icon" src="/menuIcon.png" alt="Menu Icon" /></button>

                        </div>
                    </nav>

                </div>

                <div className="mobile-menu">

                    <ul>
                        <li>

                            <Link href="/romantismo" >Romantismo </Link>

                        </li>

                        <li>

                            <Link href="/abstracionismo" > Abstracionismo </Link>

                        </li>

                        <li>

                            <Link href="/renascimento" >Renascimento</Link>

                        </li>

                        <li>

                            <Link href="/barroco" > Barroco </Link>

                        </li>

                        <li>

                            <Link href="/impressionismo" >Impressionismo </Link>

                        </li>

                        <li>

                            <Link href="/neoclassicismo" > Neoclassicismo</Link>

                        </li>

                        <li>

                            <Link href="/rococo" >Rococó</Link>

                        </li>

                        <li>

                            <Link href="/realismo" > Realismo </Link>

                        </li>

                        <li>

                            <Link href="/sobrenos" > Sobre Nós </Link>

                        </li>
                        
                    </ul>

                </div>

            </LoggedUserContext.Provider>

        </>

    )

}

export default Header