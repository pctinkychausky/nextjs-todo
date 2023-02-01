import "@/styles/globals.css";
import "@/styles/tailwind.css";

const App = ({ Component, pageProps }) => {
  return (
    <div className="h-screen bg-gray-900 text-gray-100">
      <Component {...pageProps} />
    </div>
  );
};

export default App;
