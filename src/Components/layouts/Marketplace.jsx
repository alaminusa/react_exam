import { useRef } from "react";
import Button from "../Button";
import Container from "../Container"
import Flex from "../Flex"
import Bar from "../icons/Bar"
import Paragraph from "../Paragraph"
import { FaAngleDown } from "react-icons/fa6";


const Marketplace = () => {

  let dropRef_1 = useRef(null)
  let dropRef_2 = useRef(null)
  let dropRef_3 = useRef(null)

    let handleDrop_1 = () => {

      if (dropRef_1.current.style.display == "block") {
        dropRef_1.current.style.display = "none"
      }else{
        dropRef_1.current.style.display = "block"
      }
    };

    let handleDrop_2 = () => {

      if (dropRef_2.current.style.display == "block") {
        dropRef_2.current.style.display = "none"
      }else{
        dropRef_2.current.style.display = "block"
      }
    };
    let handleDrop_3 = () => {

      if (dropRef_3.current.style.display == "block") {
        dropRef_3.current.style.display = "none"
      }else{
        dropRef_3.current.style.display = "block"
      }
    };
  return (
    

    <section className="py-14 relative cursor-pointer">
        <Container className="max-w-[1174px] bg-slate-200 p-4 absolute top-[-40px] left-[23%]">
            <Flex className="justify-between">
                <div onClick={handleDrop_1} className=" border-slate-400 border flex justify-between items-center w-64 h-12 px-3 rounded-sm hover:border-red-600">
                    <div className="flex justify-around">
                      <Paragraph text="Choose Area" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                      <FaAngleDown className="text-red-600 ml-48 mt-3"/>
                    </div>
                    <div className="relative top-16 right-32 hidden" ref={dropRef_1}>
                      <Paragraph text="Dhaka" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                      <Paragraph text="Khulna" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                      <Paragraph text="Sirajganj" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                      <Paragraph text="Rangpur" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                    </div>
                </div>
                <div onClick={handleDrop_2} className=" border-slate-400 border flex justify-between items-center w-64 h-12 px-3 rounded-sm hover:border-red-600">
                    <div className="flex justify-around">
                      <Paragraph text="Property Status" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                      <FaAngleDown className="text-red-600 ml-48 mt-3"/>
                    </div>
                    <div className="relative top-16 right-32 text-justify hidden" ref={dropRef_2}>
                      <Paragraph text="Dhaka" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                      <Paragraph text="Khulna" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                      <Paragraph text="Sirajganj" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                      <Paragraph text="Rangpur" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                    </div>
                </div>
                <div onClick={handleDrop_3} className=" border-slate-400 border flex justify-between items-center w-64 h-12 px-3 rounded-sm hover:border-red-600">
                    <div className="flex justify-around">
                      <Paragraph text="Property Type" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                      <FaAngleDown className="text-red-600 ml-48 mt-3"/>
                    </div>
                    <div className="relative top-16 right-32 hidden hover:duration-500" ref={dropRef_3}>
                      <Paragraph text="Land" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                      <Paragraph text="Appertment" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                      <Paragraph text="House" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                      <Paragraph text="Floor" className="w-6 text-sm text-[#5C5B7B] font-bold font-Nunito"/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                   <Bar/>
                   <Button text="FIND NOW" className="w-[137px] h-[48px] text-white text-sm font-Poppins ml-5"/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Marketplace