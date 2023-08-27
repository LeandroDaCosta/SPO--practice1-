
import '../Styles/boxContainer.css';

function BoxContainer(props) {

  return (
    <>
    <div className='box-content'>
      
            <img className='image-box' src={props.path} alt="" />
       
        <h1 className='title-box'>{props.title}</h1> 
        <p className='text-box'> {props.text}</p>
    </div>

    </>
    );
   
}

export default BoxContainer;
