import React from 'react'
import { useSelector } from 'react-redux'
function Fikstur() {
  const useSelectorRes = useSelector((e) => e)
  const fikstur = useSelectorRes.allFikstur.fikstur
  return (
    <div className="h-full flex-1 ">
      <h3 className="ml-2 h-auto text-xl font-bold  uppercase text-blue-900">
        Fikstür
      </h3>
      <div className="flex flex-row">
        <div className=" w-72 ">Günün Tahminleri</div>
        <div className="flex-1 rounded-lg bg-white shadow-sm ">
          <div className="flex justify-between bg-emerald-700 p-3">
            <div>Maç Sonuçları</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          {fikstur.success ? (
            fikstur.message.response.map((data, index) => {
              return (
                <div className="flex justify-center">
                  <div className="flex w-1/2 justify-between">
                    <div className="w-1/3 text-left">
                      <p>{data.teams.home.name}</p>
                    </div>
                    <div className="w-1/3 text-center">
                      <p>-</p>
                    </div>
                    <div className="w-1/3 text-right">
                      <p>{data.teams.away.name}</p>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div
              className="rounded-b border-t-4 border-teal-500 bg-teal-100 px-4 py-3 text-teal-900 shadow-md"
              role="alert"
            >
              <div className="flex">
                <div className="py-1">
                  <svg
                    className="mr-4 h-6 w-6 fill-current text-teal-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Oops ! Malesef bir sorun oluştu.</p>
                  <p className="text-sm">
                    Sistemlerimiz güncellenirken sizleri beklettiğimiz için özür
                    dileriz. Lütfen daha sonra tekrar deneyin.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className=" w-72 ">Reklam</div>
      </div>
    </div>
  )
}

export default Fikstur
