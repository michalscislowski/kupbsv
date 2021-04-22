import React from 'react';

export default function ONasText() {
    return (
        <main className="main">
            <h1>O nas</h1>
            <a className="czym">
                <h3>Czym jest Banach Group?</h3>
                <p>Banach Group w ramach licencji MIP będzie pierwszą firmą w Polsce, która zapewni klientom detalicznym i biznesowym bezpieczny dostęp do rynku Bitcoin SV. Banach Group chce być w centrum sieci Bitcoin SV w kraju, oferując usługi finansowe i technologiczne, a także doradztwo biznesowe w zakresie komercjalizacji i wdrażania technologii. W całej naszej organizacji zawsze staramy się łączyć odpowiednie umiejętności i wiedzę, aby wspierać rozwój technologii, rozwój sieci i obsługę klienta. Dzięki doświadczeniu, które wykracza poza branżę telekomunikacyjną i IT, nasza grupa koncentruje się na wprowadzaniu na rynek najnowocześniejszych rozwiązań. </p>
            </a>
            <a className="misja">
                <h3>Nasza misja</h3>
                <p>Misją Banach Group jest rozwijanie ekosystemu Bitcoin SV w Polsce i budowa biznesu w oparciu o jeden stabilny, globalny łańcuch.</p>
            </a>
            <a className="cele">
                <h3>Cele na pierwszy 12 miesięcy:</h3>
                <p>&middot; Utworzenie pierwszego zdecentralizowanego kantoru wymiany kryptowalut w oparciu o technologię Non-Custodial wallets (W trakcie)<br/>
                &middot; Dostarczenie usług tokenizacji niefinansowej i finansowej dla biznesu <br/>
                &middot; Stworzenie pierwszych regulowanych rynków typu P2P w Polsce (ArtSwap, BeatSwap)</p>
            </a>
            <a className="wizja">
                <h3>Nasze plany na przyszłość</h3>
                <p>&middot; Wdrażanie nowoczesnych technologii w oparciu o technologię blockchain <br/>
                &middot; Pokazanie użytkownikowi pozytywnych aspektów wykorzystania bitcoina SV w świecie finansów przyszłości <br/>
                &middot; Dostarczenie użytkownikom kompleksowych narzędzi oraz programów finansowych <br/>
                &middot; Rozwój fundacji Bitcoin SV w Polsce i promocja równego dostępu do technologii<br/>
                &middot; Wprowadzenie serii usług opartych o walutę bitcoina SV</p>
            </a>
            <style jsx> {`
            .main {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    margin-top: 78px;
                    margin-left: 20px;
                }
            `}</style>
        </main>
    );
}