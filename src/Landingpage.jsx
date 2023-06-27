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
          <img src={logo} className='w-[170px] py-10' alt="logo" />
          <p>maneriteshh@gmail.com</p>
        </div>

        <div className='flex w-full'>
          <div className='flex-1'>
            <h1 className='text-3xl leading-snug font-semibold lg:text-[3rem]  '>Leverage your online presence with
              <span className='text-yellow-400'> professional websites & funnels </span>
            </h1>

            <p className='py-10'>we help bussiness to build websites and funnel system which helps to get more coustomers, more leads and more sales. it boosts yor bussiness on 10X growth and increasing conversion rate of leads</p>
            <button className='px-8 text-lg rounded-xl py-4 bg-blue-600'>Work with me</button>
          </div>
          <div className='flex justify-end flex-1'>
            <img className='rounded-xl pl-20 w-[900px]' src={heroimg} alt="Ritesh mane" />

          </div>
        </div>
      </div>

      <Work />
      <About />
      <CalltoAction />

      <div className='py-2 Boxed'>
        <hr />
        <div className='flex justify-between p-10'>
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
      <div className='Boxed py-36'>
        <h1 className='text-center text-4xl font-semibold'>Man Behind the Slash funnels</h1>
        <div className='flex my-20'>
          <div className='flex-1 flex justify-center items-center'>
            <img src={profile} className='h-[500px] rounded-2xl' alt="" />
          </div>
          <div className='flex-1 pr-10'>
            <i className=' text-slate-500'>
              "My name is Ritesh from India. I am working on this field last 2yr and also work with the co-opreate and freelance project <br />
              <br />
              my aim is to help bussiness to build there strong online presence with not only with website with also applying the strategies that actually work for them and help to achive massive result with our services
              <br />
              <br />
              I always said building website is not so hard its only some code of html css js or sometimes some no code tools like wordpress or webflow
              <br />
              <br />
              but actually placing the images , design and writting better copy matters when we saw website as bussiness growth prespective .
              <br /><br />also adding the automation and systems integartion which help bussiness to be productive and delivery services seamlessly
              "
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
      <div className='bg-blue-800 bg-opacity-20 relative border border-blue-600 flex flex-col gap-5 rounded-2xl p-10'>
        <h1 className='p-2 bg-gray-600 w-fit rounded-full px-10'>Hurry up! Its time to Be professional</h1>
        <h1 className='text-4xl font-semibold '>Book a Call to get offer in Best Budget</h1>
        <button className='px-10 py-4 rounded-2xl absolute bottom-10 right-20 bg-indigo-600'> Book a call </button>
      </div>
    </div>
    </>
  )
}

const Work = () => {

  return (
    <>
      <div className='Boxed py-40'>
        <h1 className='text-center text-4xl font-semibold'>My Recent Work</h1>
        <p className='text-center p-5'>
          ✅ Professional design  &nbsp; &nbsp;
          ✅ High converting   &nbsp; &nbsp;
          ✅ Lead Capturing stategies
        </p>

        <div className='grid grid-cols-2 gap-10 pt-20'>

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