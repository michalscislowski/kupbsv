export default function Livebsvbox () {
    return (
        <div className="livecoinwatch">
            <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js"></script> 
            <div class="livecoinwatch-widget-6" 
                lcw-coin="BTC" lcw-base="USD" 
                lcw-period="d" 
                lcw-color-tx="#ffffff" 
                lcw-color-bg="#000000" 
                lcw-border-w="0" >
            </div>
            <style jsx> {`
                            .livecoinwatch {                                
 
                            }
            `}</style>
</div>
    )
}