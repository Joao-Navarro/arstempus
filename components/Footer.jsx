import Link from "next/link"

import Image from "next/image"

function Footer() {

    return (

        <>

            <div className="footerBox">

                <div className="footer">

                    <h3> Vanguard </h3>

                    <p> ©2023</p>


                </div>

                <nav className="nav-footer">

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

                </nav>

                <div className="footer-icons">

                    <Link href="https://react.dev" target="blank"><Image src="/jsxIcon.png" alt="JSX Icon" width={20} height={20} /></Link>

                    <Link href="https://github.com" target="blank"><Image src="/gitHubIcon.png" alt="Git Hub Icon" width={20} height={20}  /></Link>

                    <Link href="https://trello.com/pt-BR?&aceid=&adposition=&adgroup=148159506607&campaign=19269516466&creative=641463051732&device=c&keyword=trello&matchtype=e&network=g&placement=&ds_kids=p74543507295&ds_e=GOOGLE&ds_eid=700000001557344&ds_e1=GOOGLE&gad_source=1&gclid=Cj0KCQiAuqKqBhDxARIsAFZELmKOSVWS1S6bnMmW8C769o4gWp6VYC4qfswM2PWav1tSQ_dNhObR_HsaAsbQEALw_wcB&gclsrc=aw.ds" target="blank"><Image src="/trelloIcon.png" alt="Trello Icon" width={20} height={20} /></Link>


                </div>

            </div>

        </>

    )

}

export default Footer