import React from 'react'
import './RightSidebar.css'
import comment from '../../assets/comment-alt-solid.svg'
import pen from '../../assets/pen-solid.svg'
import blackLogo from '../../assets/blacklogo.svg'
const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18' />
                <p>Want better answers from your data? Ask better questions</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18' />
                <p>Making event-driven development predictable with Discover</p>
            </div>
        </div>

        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width='18' />
                <p>Moderation strike: Results of negotiations</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width='18' />
                <p>Our Design Vision for Stack Overflow and the Stack Exchange network</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blackLogo} alt="blackLogo" width='18' />
                <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blackLogo} alt="blackLogo" width='18' />
                <p>Collections: A New Feature for Collectives on Stack Overflow</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blackLogo} alt="blackLogo" width='18' />
                <p>Preview of Search and Question-Asking Powered by GenAI</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blackLogo} alt="blackLogo" width='18' />
                <p>Call for volunteer reviewers for an updated search experience: OverflowAI Search</p>
            </div>
        </div>

        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>35</p>
                <p>why was the spam flag declined, yet the question marked as spam?</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>20</p>
                <p>Is a link to the "How to ask" help page a useful comment?</p>
            </div>
        </div>
        

    </div>
  )
}

export default Widget