import '../../app/css/Preloader/preloader.css';

const Preloader = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className="bouncer">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Preloader