import Header from '../header/Header';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <main className='relative w-full flex justify-center bg-gradient-to-b from-[rgba(0,0,0,0.7)] from-10% via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)] to-90% pb-14 max-lg:px-2'>
      <Header showSignIn={false} />
      <img className='absolute object-cover w-full h-full -z-50' src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg" alt="background-image" />

      <LoginForm />
    </main>
  )
}

export default Login