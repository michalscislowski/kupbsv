import React from 'react';

export default function FaqText() {
    return (
        <article className="main">
            <h1>Kup BSV FAQ</h1>
            <h3>Czym jest Bitcoin SV</h3>
            <p>BSV powstał w wyniku hard forka sieci Bitcoin Cash. Skrót “SV” oznacza Satoshi Vision, ponieważ twórcy coina chcą za pomocą waluty przywrócić oryginalną wizję twórcy Bitcoina, Satoshiego Nakamoto. BSV to szybka, przyjazna użytkownikowi implementacja elektronicznego systemu gotówkowego Peer-to-Peer. Udogodnienia dla kopaczy BSV umożliwią przedsiębiorcom tworzenie stron i aplikacji w udoskonalonej, stabilnej sieci bazującej na Bitcoin Cash. </p>
            
            <h3>Jaka jest maksymalna liczba transakcji kupna / sprzedaży?</h3>
            <p>Niezweryfikowany użytkownik może dokonać wymian walutowych do wartości 4000 zł miesięcznie, a po przekroczeniu 15 000 zł, będzie musiała nastąpić weryfikacja konta.</p>

            <h3>Jakie kryptowaluty mogę kupić / sprzedać?</h3>
            <p>Serwis KUPBSV.PL umożliwia kupno / sprzedaż Bitcoin SV za PLN</p>
        
            <h3>W jaki sposób kupbsv.pl weryfikuje mój profil i ile to trwa?</h3>
            <p>Weryfikacja w serwisie KUPBSV.PL następuję poprzez serwis blockpass za pomocą dokumentu tożsamości</p>
        
            <h3>Jaki jest koszt korzystania z kupbsv.pl?</h3>
            <p>Wszystkie opłaty i prowizje są zawarte w naszej tabeli opłat i prowizji dostępnej pod adresem: </p>
        
            <h3>Czy mogę przechowywać swoje środki na kupbsv.pl?</h3>
            <p>Kupbsv.pl nie oferuje swoim klientom możliwości przechowywania środków na naszej stronie internetowej. Nasi klienci mogą kupować i sprzedawać BTC lub inne kryptowaluty, wysyłając je „na” lub „z” istniejącego portfela. Użytkownik, który nie posiada jeszcze portfela, może go założyć za pomocą aplikacji jednego z naszych partnerów: MoneyButton.</p>
        
            <h3>W jakich godzinach działa czat?</h3>
            <p>Czat jest dostępny od poniedziałku do piątku w godzinach od 8:00 do 18:00.</p>
        
            <h3>Jaka jest minimalna wartość transakcji?</h3>
            <p>Minimalna kwota kupna dla Bitcoin SV wynosi 100 zł. Przy sprzedaży BSV nie ma minimalnej wielkości sprzedaży</p>
        
            <h3>W jakim banku kupbsv.pl ma konto bankowe?</h3>
            <p>Obsługującym nas bankiem jest: ... w Poznaniu</p>
        
            <h3>Moje pytanie nie jest tutaj opisane, jak mogę uzyskać dodatkową pomoc?</h3>
            <p>Jeśli potrzebujesz dodatkowej pomocy, napisz do nas na adres e-mail: kontakt@bitcantor.com lub skontaktuj się z nami przez czat.</p>
        
            <h3>Pozdrowienia, Zespół KupBSV</h3>
            
            <style jsx> {`
            * {
                margin: 0;
            }
            h1 {
                font-size: 32px;
            }
            h3 {
                font-size: 24px;
                padding-top: 36px;
                margin-bottom: 40px;
            }
            p {
                font-size: 16px;
                padding-bottom: 36px;
                border-bottom: 1px solid rgb(135, 138, 139);
                font-weight: 400;
                line-height: 1.625;
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
            }
            h3:last-child {
                text-align: center;
            }
            .main-dark {
                background-color: #0a0e12;
                color: #9d9487; 
            }
            .p-dark {
                border-bottom: 1px solid rgb(35, 38, 39);
            }
            @media only screen and (max-width: 499px) {
                .main {
                    margin: auto;
                    margin-top: 120px;
                    min-width: 300px;
                }
            }

            `}</style>
        </article>
    );
}