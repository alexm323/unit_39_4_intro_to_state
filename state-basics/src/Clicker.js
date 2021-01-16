import React from 'react'

const Clicker = () => {
    const fireLasers = (e) => {
        console.log(e)
        console.log('THE LASERS HAVE BEEN FIRED!')
        console.log('ZAP! PEW PEW PEW!!!')
    }
    return (
        <>
            <button onMouseOver={fireLasers} >Click Me!</button>
            <textarea onScroll={fireLasers} rows="2"  >
                asasdlk asdlaslfj asl;dfjas;ldkfj as;ldkfjasfj
                asdfljasd;lfjasd
                asdfklasd;fljasd;lfkjas;ldfkj a;sldkfjf
                asasdlk asdlaslfj asl;dfjas;ldkfj as;ldkfjasfj
                asdfljasd;lfjasd
                asdfklasd;fljasd;lfkjas;ldfkj a;sldkfjf
                asasdlk asdlaslfj asl;dfjas;ldkfj as;ldkfjasfj
                asdfljasd;lfjasd
                asdfklasd;fljasd;lfkjas;ldfkj a;sldkfjf
            </textarea>
        </>
    )
}

export default Clicker;
