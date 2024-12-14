const StartProject = () => {
  return (
    <div className="h-[120vh] bg-[#CDEA68] flex items-center justify-center">
      <div className="">
        <h2 className="text-[15rem] leading-[12rem] text-c font-bold">
          <p className="">Ready</p>
          <p className="">to start</p>
          <p className="">the project?</p>
        </h2>
        <div className="mt-16 flex items-center gap-6">
          <button className=" px-8 py-4 border  border-[#212121] bg-[#212121] flex items-center justify-center gap-4 rounded-full uppercase text-white text-xl">
            <p>Start the project</p>{" "}
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dot"
              >
                <circle cx="12.1" cy="12.1" r="1" />
              </svg>
            </span>
          </button>
          <p className=" text-xl">OR</p>
          <button className=" px-8 py-4 border  border-[#212121] text-black flex items-center justify-center gap-4 rounded-full uppercase text-xl">
            <p>info@baits.com</p>{" "}
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-dot"
              >
                <circle cx="12.1" cy="12.1" r="1" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartProject;
