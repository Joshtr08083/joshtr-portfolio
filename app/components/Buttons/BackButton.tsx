'use client'

// import { useRouter } from 'next/router'

const BackButton = () => {
//   const router = useRouter();

  return (
    <button 
        onClick = {
            () => {console.log("HI")}
        }
        className = "btn btn-outline btn-xl shadow-xl/50"
    >
        Back
    </button>

  )
}

export default BackButton