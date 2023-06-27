import React from 'react'
import logo from './assets/logo.svg'
import profile from './assets/profile-img.jpeg'
import work1 from './assets/work-1.png'
import work2 from './assets/work2.png';
import heroimg from './assets/workspace.png';





const Landingpage = () => {
  return (
    <>
      <div className='Boxed '>
        <div className='flex justify-between mb-10 items-center'>
          <img src={logo} className='w-[170px] sm:w-[130px] py-10' alt="logo" />
          <p className='sm:hidden'>maneriteshh@gmail.com</p>
        </div>

        <div className='flex sm:flex-col w-full'>
          <div className='flex-1'>
            <h1 className='text-5xl sm:text-3xl leading-snug font-semibold  '>Leverage your online presence with
              <span className='text-yellow-400'> professional websites & funnels </span>
            </h1>

            <p className='py-10 sm:text-sm'>we help bussiness to build websites and funnel system which helps to get more coustomers, more leads and more sales. it boosts yor bussiness on 10X growth and increasing conversion rate of leads</p>
            <button className='px-8 text-lg rounded-xl py-4 bg-blue-600'>Work with me</button>
          </div>
          <div className='flex justify-end flex-1'>
            <img className='rounded-xl sm:mt-10 w-[900px] sm:w-[500px]' src={heroimg} alt="Ritesh mane" />

          </div>
        </div>
      </div>

      <Work />
      <About />
      <CalltoAction />

      <div className='py-2 Boxed'>
        <hr />
        <div className='flex sm:flex-col justify-between p-10'>
          <p className='text-slate-600'>Slash Ritesh</p>
          <p className='text-slate-600'>Privacy policy</p>
          <p className='text-slate-600'>maneriteshh@gmail.com</p>
        </div>
      </div>
    </>
  )
}


const About = () => {
  return (
    <>
      <div className='Boxed py-36 sm:py-20'>
        <h1 className='text-center text-4xl font-semibold sm:text-3xl'>Man Behind the Slash funnels</h1>
        <div className='flex sm:gap-8 sm:flex-col my-20'>
          <div className='flex-1 flex justify-center items-center'>
            <img src={profile} className='h-[500px] sm:h-[300px] rounded-2xl' alt="" />
          </div>
          <div className='flex-1 pr-10 sm:p-0'>
            <i className=' text-slate-500'>
              "My name is Ritesh from India. I am working on this field last 2yr and also work with the co-opreate and freelance project <br />
              <br />
              my aim is to help bussiness to build there strong online presence with not only with website with also applying the strategies that actually work for them and help to achive massive result with our services
              <br />
              <br />
              <div className='sm:hidden'>

              I always said building website is not so hard its only some code of html css js or sometimes some no code tools like wordpress or webflow
              <br />
              <br />
              but actually placing the images , design and writting better copy matters when we saw website as bussiness growth prespective .
              <br /><br />also adding the automation and systems integartion which help bussiness to be productive and delivery services seamlessly
              "
              </div>
            </i>

            <div className='mt-10 flex items-end flex-col'>
              <p>Ritesh Mane</p>
              <p>founder of Slash funnels</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


const CalltoAction =()=>{
  return(
    <>
    <div className='Boxed py-2 pb-20 '>
      <div className='bg-blue-800 sm:h-96 bg-opacity-20 relative border border-blue-600 flex flex-col gap-5 rounded-2xl p-10'>
        <h1 className='p-2 bg-gray-600 w-fit sm:text-sm rounded-full px-10'>Hurry up! Its time to Be professional</h1>
        <h1 className='text-4xl font-semibold sm:text-3xl '>Book a Call to get offer in Best Budget</h1>
        <button className='px-10 py-4 rounded-2xl absolute bottom-10 right-20 bg-indigo-600'> Book a call </button>
      </div>
    </div>
    </>
  )
}

const Work = () => {

  return (
    <>
      <div className='Boxed py-40 sm:py-36'>
        <h1 className='text-center text-4xl sm:text-3xl font-semibold'>My Recent Work</h1>
        <div className='text-center p-5'>
          <p>✅ Professional design  &nbsp; &nbsp;</p>
          <p>✅ High converting   &nbsp; &nbsp;</p>
          <p>✅ Lead Capturing stategies</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-1 gap-10 pt-10'>

          <div className='flex gap-5 flex-col p-8 bg-slate-800 rounded-xl justify-center items-center'>
            <h2 className='text-xl font-semibold'>Pyro Product- Ecommerce Website</h2>
            <img src={work1} width={500} className='rounded-lg' alt="" />
            <button className='bg-blue-600 p-2 w-40 rounded-lg'>
              <a href='https://celebrateind.com/'>Visit website</a>
            </button>
          </div>

          <div className='flex gap-5 flex-col p-8 bg-slate-800 rounded-xl justify-center items-center'>
            <h2 className='text-xl font-semibold'>Fitness Trainer- Ecommerce Website</h2>
            <img src={work2} width={500} className='rounded-lg' alt="" />
            <button className='bg-blue-600 p-2 w-40 rounded-lg'>
              <a target="_blank" href='https://celebrateind.com/'>Visit website</a>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}
export default Landingpage