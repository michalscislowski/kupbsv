import React from 'react';

export default function FaqText() {
    return (
        <main className="main">
            <h1>Kup BSV FAQ</h1>
            <a className="jak">
                <h3>I. Czym jest Bitcoin SV</h3>
                <p>BSV powstał w wyniku hard forka sieci Bitcoin Cash. Skrót “SV” oznacza Satoshi Vision, ponieważ twórcy coina chcą za pomocą waluty przywrócić oryginalną wizję twórcy Bitcoina, Satoshiego Nakamoto. BSV to szybka, przyjazna użytkownikowi implementacja elektronicznego systemu gotówkowego Peer-to-Peer. Udogodnienia dla kopaczy BSV umożliwią przedsiębiorcom tworzenie stron i aplikacji w udoskonalonej, stabilnej sieci bazującej na Bitcoin Cash. </p>
            </a>
            <a className="max">
                <h3>II. Jaka jest maksymalna liczba transakcji kupna / sprzedaży?</h3>
                <p>Niezweryfikowany użytkownik może dokonać wymian walutowych do wartości 4000 zł miesięcznie, a po przekroczeniu 15 000 zł, będzie musiała nastąpić weryfikacja konta.</p>
            </a>
            <a className="kupno">
                <h3>III. Jakie kryptowaluty mogę kupić / sprzedać?</h3>
                <p>Serwis KUPBSV.PL umożliwia kupno / sprzedaż Bitcoin SV za PLN</p>
            </a>
            <a className="weryfikacja">
                <h3>IV. W jaki sposób kupbsv.pl weryfikuje mój profil i ile to trwa?</h3>
                <p>Weryfikacja w serwisie KUPBSV.PL następuję poprzez serwis blockpass za pomocą dokumentu tożsamości</p>
            </a>
            <a className="koszt">
                <h3>V. Jaki jest koszt korzystania z kupbsv.pl?</h3>
                <p>Wszystkie opłaty i prowizje są zawarte w naszej tabeli opłat i prowizji dostępnej pod adresem: </p>
            </a>
            <a className="środki">
                <h3>VI. Czy mogę przechowywać swoje środki na kupbsv.pl?</h3>
                <p>Kupbsv.pl nie oferuje swoim klientom możliwości przechowywania środków na naszej stronie internetowej. Nasi klienci mogą kupować i sprzedawać BTC lub inne kryptowaluty, wysyłając je „na” lub „z” istniejącego portfela. Użytkownik, który nie posiada jeszcze portfela, może go założyć za pomocą aplikacji jednego z naszych partnerów: MoneyButton.</p>
            </a>
            <a className="infolinia">
                <h3>VII. W jakich godzinach działa czat?</h3>
                <p>Czat jest dostępny od poniedziałku do piątku w godzinach od 8:00 do 18:00.</p>
            </a>
            <a className="minimum">
                <h3>VIII. Jaka jest minimalna wartość transakcji?</h3>
                <p>Minimalna kwota kupna dla Bitcoin SV wynosi 100 zł. Przy sprzedaży BSV nie ma minimalnej wielkości sprzedaży</p>
            </a>
            <a className="bank">
                <h3>IX. W jakim banku kupbsv.pl ma konto bankowe?</h3>
                <p>Obsługującym nas bankiem jest: ... w Poznaniu</p>
            </a>
            <a className="dodatkowe">
                <h3>X. Moje pytanie nie jest tutaj opisane, jak mogę uzyskać dodatkową pomoc?</h3>
                <p>Jeśli potrzebujesz dodatkowej pomocy, napisz do nas na adres e-mail: kontakt@bitcantor.com lub skontaktuj się z nami przez czat.</p>
            </a>
            <a className="pozdrowienia">
                <h2>Pozdrowienia, Zespół KupBsv</h2>
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