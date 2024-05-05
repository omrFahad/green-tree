import '../styles/feature.scss'

let Feature = () => {
    return (
        <div className="feature">
            {/* BOX 1 */}
            <div className="feature-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="640" height="512" viewBox="0 0 640 512"><path fill="currentColor" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z" /></svg>
                <h6>Free Shipping</h6>
            </div>
            {/* BOX 2 */}
            <div className="feature-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M1.5 6h1a.5.5 0 0 1 .5.5V9a.5.5 0 0 1-.5.5h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm11 3.5h-1A.5.5 0 0 1 11 9V6.5a.5.5 0 0 1 .5-.5h1a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1Zm-3 2.75a2 2 0 0 0 2-2h0V9.5" /><path d="M8.25 11a1.25 1.25 0 0 1 0 2.5h-1.5a1.25 1.25 0 0 1 0-2.5ZM2.5 6V5a4.5 4.5 0 0 1 9 0v1m-6-2v1.5m3-1.5v1.5m-3 2c0 1.33 3 1.33 3 0" /></g></svg>
                <h6>24/7 Support</h6>
            </div>
            {/* BOX 3 */}
            <div className="feature-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M.5 7A6.5 6.5 0 1 0 7 .5a7.23 7.23 0 0 0-5 2" /><path d="m2.5.5l-.5 2L4 3m3 .5v4L4.4 8.8" /></g></svg>
                <h6>7 Days Return</h6>
            </div>
            {/* BOX 4 */}
            <div className="feature-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M216 68h-25.94A33.82 33.82 0 0 0 196 49.69A36.62 36.62 0 0 0 158.31 12A33.44 33.44 0 0 0 134 23.25a54.65 54.65 0 0 0-6 8.3a54.65 54.65 0 0 0-6-8.3A33.44 33.44 0 0 0 97.69 12A36.62 36.62 0 0 0 60 49.69A33.82 33.82 0 0 0 65.94 68H40a20 20 0 0 0-20 20v32a20 20 0 0 0 16 19.6V200a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-60.4a20 20 0 0 0 16-19.6V88a20 20 0 0 0-20-20Zm-4 48h-72V92h72Zm-60-76.83a9.59 9.59 0 0 1 7-3.17h.35A12.62 12.62 0 0 1 172 49a9.59 9.59 0 0 1-3.17 7c-6.9 6.12-18.25 9.26-27.63 10.76c1.5-9.34 4.64-20.69 10.8-27.59Zm-64.3.53a12.8 12.8 0 0 1 8.91-3.7H97a9.59 9.59 0 0 1 7 3.17c6.12 6.9 9.26 18.24 10.75 27.61C105.45 65.27 94 62.13 87.17 56A9.59 9.59 0 0 1 84 49a12.72 12.72 0 0 1 3.7-9.3ZM44 92h72v24H44Zm16 48h56v56H60Zm80 56v-56h56v56Z" /></svg>
                <h6>Gift Card</h6>
            </div>
            {/* BOX 5 */}
            <div className="feature-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58c.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4S7 4.67 7 5.5S6.33 7 5.5 7z" /></svg>
                <h6>Best Offers</h6>
            </div>
            {/* BOX 6 */}
            <div className="feature-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M10.5 8.5a5 5 0 1 1-8.25-3.8" /><path d="M5.28 6.65a1.6 1.6 0 0 0-.16.7a1.52 1.52 0 0 0 1.53 1.53a.77.77 0 0 1 .77.77v3.47M.57 9.27h1.85A1.54 1.54 0 0 1 4 10.81v2.45m9.26-11.39l-1-.34a.34.34 0 0 0-.39.13l-.73 1.13l-4-2A2.49 2.49 0 0 0 3.53 2.1A.68.68 0 0 0 4 3l2.61.84l.26.09l.49 1.68a.36.36 0 0 0 .24.25l1.18.38a.37.37 0 0 0 .48-.41L9 4.58h.17l2.55.83a.67.67 0 0 0 .85-.41l.9-2.77a.34.34 0 0 0-.21-.36Z" /></g></svg>
                <h6>World Shipping</h6>
            </div>
        </div>
    )
}

export default Feature 