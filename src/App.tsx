import { BsArrowDown } from 'react-icons/bs'
// I'm using BEM model to create the classes in sass
import about from './assets/about-me.jpg'
import work1 from './assets/work1.png'
import work2 from './assets/work2.jpg'

function App() {

  return (
    <>
      
      {/* Presentation */}
      <div className="container presentation__container-align presentation__container-bg">
        <h1 className='presentation__title presentation-color'>James McGill</h1>
        <p className='presentation__slogan presentation-color'>ATTORNEY AT LAW</p>

        <div className="presentation__navigation">
          <BsArrowDown className='presentation-color presentation__navigation-icon' size={50} />
        </div>
      </div>

      {/* About me */}
      <div className="container about__container-align">
        <div className='about__img-container'>
          <img src={ about } alt="james_mcgill" className='about__img' />
        </div>
        <div className='about__text-container'>
          <h2 className='about__text-title'>About me</h2>
          <p className='about__text'>
            James Morgan "Jimmy" McGill, better known by his professional alias and business moniker Saul Goodman, is an Irish-American criminal defense lawyer, scam artist, and convicted criminal who is serving an 86-year sentence at ADX Montrose. Originally from Cicero, Illinois during his career as a scam artist, Jimmy moved to Albuquerque, New Mexico where he worked as a lawyer, and later resided as a fugitive in Omaha, Nebraska before being caught and apprehended in a federal prison at Montrose, Colorado. 
          </p>
        </div>
      </div>


      {/* Our work */}

      <div className='container__small work__container'>

        <h2 className='work__img-title'>Our work</h2>
        <div className='work__img-align'>
          <div className='work__img-container end'>
            <img src={ work1 } alt="" className='work__img' />
          </div>
          
          <div className='work__img-container'>
            <img src={ work2 } alt="" className='work__img scaled' />
          </div>

          <div className='work__img-container start'>
            <img src={ work1 } alt="" className='work__img' />
          </div>

        </div>
      </div>

      {/* Contact us */}
      <div className='container contact__container contact__container-align'>
        <h2 className='contact__title'>Contact us!</h2>

        <form className='contact__form'>
          <div className='contact__input-container'>
            <label htmlFor='fullname' className='contact__label'>Fullname</label>
            <input type="text" name='fullname' className='contact__input' />
          </div>
         
          <div className='contact__input-container'>
            <label htmlFor='email' className='contact__label'>Email</label>
            <input type="email" name='email' className='contact__input' />
          </div>

          <div className='contact__input-container'>
            <label className='contact__label'>Put a message</label>
            <textarea className='contact__textarea' cols={2} rows={10}></textarea>
          </div>

          <div className='contact__input-container'>
            <input type="submit" value="SUBMIT" className='contact__submit' />
          </div>
        </form>
      </div>

      <footer className='container__small footer__container'>
        <div className="footer__container-divided">
          <h3 className='footer__subtitle'>Our Location</h3>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.875533012094!2d-0.18713168408539999!3d51.12920384610507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875f19a0a25156b%3A0xcc33d17f7b40b599!2sThe%20People&#39;s%20Pension!5e0!3m2!1ses!2sar!4v1677021023415!5m2!1ses!2sar" 
            width="500" 
            height="450"
            style={{ border: '0px'}}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="footer__container-divided">
          <h3 className='footer__subtitle'>Follow us</h3>

          <ul>
            <li>Instagram</li>
            <li>@thisaulgooman_ig</li>
          </ul>

          <ul>
            <li>Twitter</li>
            <li>@thisaulgooman_tw</li>
          </ul>

          <h3 className='footer__subtitle'>Business</h3>
          <ul>
            <li>+94 345 677-197</li>
            <li>goodman@yahoo.com</li>
          </ul>



        </div>
        <div className="footer__container-divided">
          <h3 className='footer__subtitle'>Legal</h3>

          <ul>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

      </footer>
    </>
  )
}

export default App
