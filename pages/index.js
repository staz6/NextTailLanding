import Head from 'next/head'
import Image from 'next/image'
import Slider from '../assets/images/slider.png'
import Ellipse from '../assets/images/ellipse.png'
import Accordian from '../components/Accordian/Accordian'
import LeftAccordian from '../components/Accordian/LeftAccordian'
import RightAccordian from '../components/Accordian/RightAccordian'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import AboutButton from '../components/Button/AboutButton'
import SignalIcon from '../assets/svgs/SignalIcon'
import DashboardIcon from '../assets/svgs/DashboardIcon'
import TagIcon from '../assets/svgs/TagIcon'
export default function Home() {
  return (
    <>
    <div className="mainWrapper">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <div className={"breaker"}>

      </div>

        <div className={"imageContainer"}>
          <Image
          src={Slider}
          alt="Slider"
          layout="fill" className={'w-full h-full relative object-cover mt-10'}
        />
        <div className={'ellipse '}>
        <Image
          src={Ellipse}
          alt="ellipse" className={"ellipse"}/>
        </div>
        </div>

        <div className={"text-center mt-24 text-white"}>
          <h1 className={"aboutHeading not-italic font-extrabold text-5xl text-center"}>Loren Ipsum</h1>
          <p className={"not-italic font-normal text-base leading-5 text-center text-gray-200 mt-3"}>Created by: <span style={{color:"rgba(252, 54, 76, 1)"}}>Loren Ipsum</span></p>
          <p className={"not-italic font-normal text-base leading-5 text-center text-gray-200 mt-3"}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem. </p>

        </div>

        <div className={"flex hidden md:flex justify-center items-center gap-8 mt-16 px-2"}>
          <AboutButton title={"Lorem Ipsum"} icon={<SignalIcon/>}/>
          <AboutButton title={"Lorem Ipsum"} icon={<DashboardIcon/>}/>
          <AboutButton title={"Lorem Ipsum"} icon={<TagIcon/>}/>
        </div>

        <div className={"accordianContainer ml-auto mr-auto mt-20"}>
        <div className={"container mt-5 "}>
          <div class={"lg:flex gap-8"}>
            <div class={"flex-1 mt-4"}>    
              <LeftAccordian open={true}/>
            </div>

            <div class={"flex-1 mt-4"}>
                <RightAccordian open={true}/>
                <div className={"mt-4"}>
                  <Accordian open={false}/>
                </div>
            </div>
          </div>

        </div>
        </div>

      
        
        
        
        
       
    </div>
    <Footer/>

    </>
    
  )
}
