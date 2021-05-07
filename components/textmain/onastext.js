import React from 'react';

export default function ONasText() {
    return (
        <article className="main">
            <h1>O nas</h1>
   
            <h3>Czym jest Banach Group?</h3>
            <p>Banach Group będzie pierwszą instytucją w Polsce, która zapewni klientom detalicznym i biznesowym bezpieczny dostęp do rynku Bitcoin SV. Banach Group chce być w centrum sieci Bitcoin SV w kraju, oferując usługi finansowe i technologiczne, a także doradztwo biznesowe w zakresie komercjalizacji i wdrażania technologii. W całej naszej organizacji zawsze staramy się łączyć odpowiednie umiejętności i wiedzę, aby wspierać rozwój technologii, rozwój sieci i obsługę klienta. Dzięki doświadczeniu, które wykracza poza branżę telekomunikacyjną i IT, nasza grupa koncentruje się na wprowadzaniu na rynek najnowocześniejszych rozwiązań. </p>
        
            <h3>Nasza misja</h3>
            <p>Misją Banach Group jest rozwijanie ekosystemu Bitcoin SV w Polsce i budowa biznesu w oparciu o jeden stabilny, globalny łańcuch.</p>
        
            <h3>Cele na pierwszy 12 miesięcy:</h3>
            <ul>
                <li>Utworzenie pierwszego zdecentralizowanego kantoru wymiany kryptowalut w oparciu o technologię Non-Custodial wallets (W trakcie)</li>
                <li>Dostarczenie usług tokenizacji niefinansowej i finansowej dla biznesu </li>
                <li>Stworzenie pierwszych regulowanych rynków typu P2P w Polsce (ArtSwap, BeatSwap)</li>
            </ul>

            <h3>Nasze plany na przyszłość</h3>
            <ul>
                <li>Wdrażanie nowoczesnych technologii w oparciu o technologię blockchain</li>
                <li>Pokazanie użytkownikowi pozytywnych aspektów wykorzystania bitcoina SV w świecie finansów przyszłości</li>
                <li>Dostarczenie użytkownikom kompleksowych narzędzi oraz programów finansowych</li>
                <li>Rozwój fundacji Bitcoin SV w Polsce i promocja równego dostępu do technologii</li>
                <li>Wprowadzenie serii usług opartych o walutę bitcoina SV</li>
            </ul>

            <h3>Kontakt</h3>
            <ul>
                <li>Adres siedziby: Wilczak 12F/48</li>
                <li>Adres email: office@8anach.com</li>
            </ul>
            <style jsx> {`
            h1 {
                font-size: 32px;
            }
            h3 {
                font-size: 18px;
            }
            p, ul {
                padding-bottom: 24px;
            }
            .main {
                margin: auto;
                margin-top: 140px;
                width: 60%;
                max-width: 750px;
                min-width: 400px;
                font-size: 16px;
                min-height: 879px;
                text-align: justify;
                letter-spacing: 0.5px;
                line-height: 1.625;
            }
            .main-dark {
                background-color: #0a0e12;
                color: #9d9487;
            }
            @media only screen and (max-width: 499px) {
                .main {
                    margin: auto;
                    margin-top: 120px;
                    min-width: 300px;
                    width: 90%;
                }
            }
            `}</style>
        </article>
    );
}