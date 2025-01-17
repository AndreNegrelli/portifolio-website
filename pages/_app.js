import GlobalStyle from "../src/theme/GlobalStyle"
import '../app/global.css'

function MyApp({Component, pageProps}) {
    return (
        <>
        <GlobalStyle></GlobalStyle>
        <Component {...pageProps} />
        </>
    )
}

export default MyApp