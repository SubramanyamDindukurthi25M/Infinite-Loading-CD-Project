import spinner from '../assets/Spinner.gif'

export const Loader = () => {
    return (
        <section className='d-flex justify-content-center align-items-center'>
            <img 
                src={spinner} 
                alt="spinner" 
            />
        </section>
    )
}