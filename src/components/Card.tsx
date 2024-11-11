function Card() {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 bg-yellow-100/70 p-3 shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="flex items-center justify-between gap-5">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <div className="group cursor-pointer rounded-lg border border-gray-500 p-1 duration-150 hover:bg-black">
          <svg
            className="fill-black group-hover:fill-white"
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Delete Note</title>
            <path d="M8 26c0 1.656 1.343 3 3 3h10c1.656 0 3-1.344 3-3l2-16h-20l2 16zM19 13h2v13h-2v-13zM15 13h2v13h-2v-13zM11 13h2v13h-2v-13zM25.5 6h-6.5c0 0-0.448-2-1-2h-4c-0.553 0-1 2-1 2h-6.5c-0.829 0-1.5 0.671-1.5 1.5s0 1.5 0 1.5h22c0 0 0-0.671 0-1.5s-0.672-1.5-1.5-1.5z"></path>
          </svg>
        </div>
      </div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
  );
}

export default Card;
