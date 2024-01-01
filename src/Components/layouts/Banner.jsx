import Button from '../Button'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Images from '../Images'
import Paragraph from '../Paragraph'
import House from '../icons/House'
import Play from '../../assets/paly.png'
import White from '../../assets/w_arrow.png'
import Pink from '../../assets/p_arrow.png'


const Banner = () => {
  return (

    <section className='bg-[#F2F6F7]  relative'>
        <Images src={White} className="absolute top-96 left-2"/>
        <Container className="max-w-[1170px] py-64">
            <Flex>
               <House/>
               <Paragraph text="Real Estate Agency" className=" pl-2 text-base font-Nunito"/>
            </Flex>
            <Heading text=" Find #Your Dream# House By Us" as="h1" className="font-Poppins text-6xl font-bold w-1/2 pt-4"/>
            <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipisicing" className="text-base font-Nunito text-black  pt-6"/>
            <Flex className="items-center">
               <Button text="View Properties" className="w-[137px] h-[48px] text-white text-sm font-Poppins"/>
               <a href="#"><Images src={Play} className=""/></a>
            </Flex>
        </Container>
        <Images src={Pink} className="absolute top-96 right-8"/>
    </section>
  )
}

export default Banner