import '../css/style.css';

function LoadingSpinner(){
    return(
        <div className='loader'>
            <div className='loader-ring'>
                <div></div><div></div><div></div><div></div>
            </div>
        </div>
    )
}

export default LoadingSpinner