import React from 'react'

const Greetings = (props) => {
    const { lang, children } = props;
    return ( 
        <div>
          {lang === 'de' ? <p>Hallo {children}</p> : 
          lang === 'fr' ? <p>Bonjour {children}</p> :
          lang === 'es' ? <p>Hola {children}</p> :                <p>Hello {children}</p>}
          

        </div>
    )
    }
export default Greetings



