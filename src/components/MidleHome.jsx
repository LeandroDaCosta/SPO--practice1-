
import '../Styles/midleHome.css';
import BoxContainer from './BoxContainer';
function midleHome() {

  return (
    <>
    <div className="home-background">
       <div className='home-backgroundd'>
        <BoxContainer path="https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
                        title="About Ghost + Gatsby" 
                        text="Build an API driven static-site with Gatsby.js and use Ghost as a completely decoupled headless CMS. Read more about how it works and how to use this starter theme here!"
                       
        />
        <BoxContainer path="https://gatsby.ghost.io/content/images/2019/01/ghost-headless-feature-image.png"
                        title="Welcome to Ghost" 
                        text="Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time."
                           
        
        />
        <BoxContainer path="https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png"
                        title="Writing posts with Ghost ✍️" 
                        text="Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly."
                               
        />
        
        <BoxContainer path="https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png"
                        title="Writing posts with Ghost ✍️" 
                        text="Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly."
                               
        />
         <BoxContainer path="https://static.ghost.org/v3.0.0/images/publishing-options.png"
                        title="Publishing options" 
                        text="The Ghost editor post settings menu has everything you need to fully optimise and distribute your content effectively."
                               
        />
         <BoxContainer path="https://static.ghost.org/v3.0.0/images/admin-settings.png"
                        title="Managing admin settings" 
                        text="Welcome, it's great to have you here. We know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time."
        />
        

        
        </div>
    </div>
    
    </>
    );
   
}

export default midleHome;
