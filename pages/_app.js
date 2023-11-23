import "@/styles/globals.css";
import "/styles/custom.css";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; //

export default function App({ Component, pageProps }) {
  return (
    <>
      <Analytics /> <Component {...pageProps} />
    </>
  );
}
