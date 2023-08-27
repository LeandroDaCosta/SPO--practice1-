
import './Styles/header.css';

function THeader() {

  return (
    <>
    <div className="HomeHeader">
      <div className='title-content'>  
        <h1 className='title'>Ghost & Gatsby</h1>
         <h2 className='subtitle'>Thoughts, stories and JAMstack</h2>
      
      </div>
      <div className='footer-header'>
          <div className='left-content'> 
              <p className='text-footer'> Home</p>
              <p className='text-footer'> Tag</p>
              <p className='text-footer'> Author</p>
              <p className='text-footer'> Help</p>
            </div>
          <div className='rigth-content'> 
              <p className='textr-footer'> About</p>
            </div>
      </div>
    </div>
    
    </>
    );
   
}

export default THeader;
