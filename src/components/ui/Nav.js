import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

const Nav = ({items}) => {
    return (
        <div className="footer">    
                    <p className="copyright">{items.attributionText}</p>
                    <p className="social"><a href="https://github.com/Neha045/Marvel" target="!#"><AiFillGithub/></a></p>
            
    </div>
    )
}

export default Nav
