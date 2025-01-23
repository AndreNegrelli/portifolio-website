import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row bg-[#ba9fe1] w-full h-[812px] gap-14 items-center pt-24 md:pt-0 lg:pt-0 ">
      <div className="w-full lg:w-[40%] hidden lg:flex flex-col  items-center gap-6">
        <div className="flex flex-col items-center w-[280px] lg:w-[480px] min-h-[500px] lg:min-h-[534px] h-auto bg-[#e2cbf5] gap-10 px-6 py-6 rounded-[20px]">
          <div className="flex flex-col items-center gap-3">
            <img
              src="https://avatars.githubusercontent.com/u/65674550?v=4"
              alt="git image: Andre Negrelli"
              className="block object-cover w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] rounded-full"
            />
            <button className="w-[208px] h-[30px] text-black bg-[#b388eb] hover:opacity-80 rounded-[10px]">
              Contact
            </button>
            <button className="w-[208px] h-[30px] text-black bg-[#b388eb] hover:opacity-80 rounded-[10px]">
              About me
            </button>
            <button className="w-[208px] h-[30px] text-black bg-[#b388eb] hover:opacity-80 rounded-[10px]">
              Projects
            </button>
            <button className="w-[208px] h-[30px] text-black bg-[#b388eb] hover:opacity-80 rounded-[10px]">
              Experience & skills
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <p className="w-[200px] text-[#7429d6]">Made with:</p>
            <div className="flex flex-row justify-center items-center gap-4 border-2 w-[200px]  border-[#b388eb] rounded-[10px] ">
              <Link
                href={"https://vercel.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-14 cursor-pointer"
                  src="assets/logos/vercel-logotype-dark.svg"
                  alt="Vercel Logo"
                />
              </Link>
              <Link
                href={"https://nextjs.org/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-14 cursor-pointer"
                  src="assets/logos/nextjs-logotype-light-background.svg"
                  alt="Next Logo"
                />
              </Link>
              <Link
                href={"https://react.dev/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-8 cursor-pointer"
                  src="assets/logos/react-2.svg"
                  alt="React Logo"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-6">
            <p className="w-[200px] text-[#7429d6] text-[10px] font-bold">
              THIS PORTIFOLIO IS UNDER PROGRESS
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-[#e2cbf5] w-[280px] h-auto px-6 py-6 rounded-[20px]">
          <p className="w-[200px] text-[#7429d6]">Socials:</p>
          <div className="flex flex-row justify-center items-center gap-4 border-2 w-[200px] px-2 py-2 border-[#b388eb] rounded-[10px] ">
            <Link
              href={"https://github.com/AndreNegrelli"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-8 cursor-pointer"
                src="assets/logos/github-mark.svg"
                alt="Github logo"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/andre-negrelli/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-8 cursor-pointer"
                src="assets/logos/black-linkedin-logo.svg"
                alt="Next Logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[280px] lg:w-[55%] flex flex-col items-center">
        <div className="flex flex-col items-center justify-center w-full min-h-[685px] h-auto bg-[#e2cbf5] px-6 py-6 rounded-[20px]">
          <h1 className=" text-[#7429d6] text-[30px] text-center font-bold">
            ANDRÉ NEGRELI CONRADO BINI
          </h1>
          <p className=" text-[#7429d6] text-sm text-center">
            Front-end developer
          </p>
          <div className="pt-10 flex flex-row gap-4">
              <button className="flex w-[100px] lg:w-[140px] h-[50px] text-black bg-[#b388eb] hover:opacity-80 rounded-[10px] items-center justify-center">
                HIRE ME
              </button>
              <div className="dropdown w-[100px] lg:w-[140px] h-[50px] text-black bg-[#b388eb] hover:opacity-80 rounded-[10px] flex items-center justify-center">
                <p tabIndex={0} className="flex justify-center items-center">
                  GET CV
                </p>
                <ul
                  tabIndex={0}
                  className="dropdown-content w-[120px] menu bg-[#b388eb] mt-[118px] rounded-box z-[1]"
                >
                  <li className="w-[50px]">
                    <a className="flex text-center w-[100px]">EN</a>
                  </li>
                  <li className="w-[50px]">
                    <a className="flex text-center w-[100px]">PT/BR</a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
