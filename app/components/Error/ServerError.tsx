import React from 'react'

interface Props {
    error: string;
}

const ServerError = ( {error} : Props) => {
  return (
    <div className="flex flex-col m-auto gap-12 mx-auto mt-18 grow">
        <dialog id="error_modal" className="modal modal-bottom sm:modal-middle modal-open">
            <div className="modal-box py-12">
                <h2 className="m-auto text-red-800 dark:text-red-400 font-bold text-5xl pb-8">500 |<br></br> SERVER ERROR</h2>
                <p className="m-auto font-bold text-2xl"> Try refreshing or trying again later</p>
            </div>
        </dialog>
        <div className="grow" />
        <p className="mx-auto mb-2"><em>{error}</em></p>
    </div>
  )
}

export default ServerError