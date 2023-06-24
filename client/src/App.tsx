import { Helmet } from 'react-helmet-async';
import { GlobalStyles } from './assets';

function App() {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap' rel='stylesheet' />
      </Helmet>
    </>
  )
}

export default App;