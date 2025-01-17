import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#ba9fe1] w-full h-[812px] gap-14 items-center pt-24">
      <div className="flex flex-col items-center w-[280px] min-h-[500px] h-auto bg-[#e2cbf5] gap-10 px-6 py-6 rounded-[20px]">
        <div className="flex flex-col items-center gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/65674550?v=4"
            alt="git image: Andre Negrelli"
            className="block object-cover w-[100px] h-[100px] rounded-full"
          />
          <button className="w-[200px] h-[30px] bg-[#b388eb] hover:opacity-80 rounded-[10px]">
            Contact
          </button>
          <button className="w-[200px] h-[30px] bg-[#b388eb] hover:opacity-80 rounded-[10px]">
            About me
          </button>
          <button className="w-[200px] h-[30px] bg-[#b388eb] hover:opacity-80 rounded-[10px]">
            Projects
          </button>
          <button className="w-[200px] h-[30px] bg-[#b388eb] hover:opacity-80 rounded-[10px]">
            Experience & skills
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <p className="w-[200px]">Made with:</p>
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
      </div>
      <div className="flex flex-col items-center bg-[#e2cbf5] w-[280px] h-auto px-6 py-6 rounded-[20px]">
        <p className="w-[200px]">Socials:</p>
        <div className="flex flex-row justify-center items-center gap-4 border-2 w-[200px] px-2 py-2 border-[#b388eb] rounded-[10px] ">
          <Link
            href={"https://github.com/AndreNegrelli"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 cursor-pointer"
              src="assets/logos/github-mark.svg"
              alt="Vercel Logo"
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
  );
}
