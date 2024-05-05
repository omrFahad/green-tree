import '../styles/banner.scss'

let treeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><path fill="#71a03a" d="M32 34.9L2 55.1s14.5 3.4 30 3.4s30-3.4 30-3.4z" /><path fill="currentColor" d="M32 23.6L7 43.8s12.1 3.4 25 3.4s25-3.4 25-3.4z" /><span></span><path fill="#7cb545" d="M32 12.3L12 32.5s9.7 3.4 20 3.4s20-3.4 20-3.4z" /><path fill="currentColor" d="M32 1L17 20.8s7.2 3.8 15 3.8s15-3.8 15-3.8z" /></svg>


let Banner = () => {
    return (
        <div className="banner">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                <path fill="#71a03a" d="M32 34.9L2 55.1s14.5 3.4 30 3.4s30-3.4 30-3.4z" />
                <path fill="currentColor" d="M32 23.6L7 43.8s12.1 3.4 25 3.4s25-3.4 25-3.4z" />
                <path fill="#71a03a" d="M32 12.3L12 32.5s9.7 3.4 20 3.4s20-3.4 20-3.4z" />
                <path fill="currentColor" d="M32 1L17 20.8s7.2 3.8 15 3.8s15-3.8 15-3.8z" />
                <text x="50%" y="29%" textAnchor="middle">hello</text>
                <text x="50%" y="50%" textAnchor="middle">pick</text>
                <text x="50%" y="67%" textAnchor="middle">your</text>
                <text x="50%" y="85%" textAnchor="middle">tree</text>

            </svg>


        </div>

    )
}


export default Banner