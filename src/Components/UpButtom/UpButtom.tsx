'use client'
import { scrollToTop } from '@/utils/scrollToTop'
import { BiUpArrowAlt } from "react-icons/bi";

const UpButtom = () => {
  return (
    <div className="fixed bottom-4 right-4 grid h-9 w-9 place-items-center bg-white">
    <button onClick={scrollToTop}>
      <BiUpArrowAlt size={30} />
    </button>
  </div>
  )
}

export default UpButtom