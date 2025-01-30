import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row bg-[#ba9fe1] w-full h-[812px] gap-14 items-center pt-24 md:pt-0 lg:pt-0">
      <div className="w-full lg:w-[40%] hidden lg:flex flex-col  items-center gap-6">
        <div className="flex flex-col items-center w-[280px] lg:w-[480px] min-h-[500px] lg:min-h-[534px] h-auto bg-[#e2cbf5] gap-10 px-6 py-6 rounded-[20px]">
          <div className="flex flex-col items-center gap-3">
            <img
              src="https://avatars.githubusercontent.com/u/65674550?v=4"
              alt="git image: Andre Negrelli"
              className="block object-cover w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] rounded-full"
            />
             <button className="w-[208px] h-[30px] text-black bg-[#b388eb] hover:opacity-80 rounded-[10px]">
              Home
            </button>
            <button className="w-[208px] h-[30px] text-black bg-[#b388eb] hover:opacity-80 rounded-[10px]">
              Contact
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
        <div className="flex flex-col justify-start w-full min-h-[685px] h-auto bg-[#e2cbf5] gap-3 px-6 py-6 rounded-[20px]">
          <p className="text-[#7429d6] text-xl">ABOUT ME</p>
          <p className="text-[#7429d6]">Hello!! My name is André Negreli Conrado Bini, and I'm a web developer with one year of experience. I graduated in Universidade Estadual do Centro Oeste as a Computer Science Barchelor.</p>
          <p className="text-[#7429d6]">I have started taking interest in web development in the university, with my focus starting and carrying on until now on the Front-end side with, JavaScript-driven technologies. So far, I've worked with React in some personal projects and professionally with Vue.</p>
          <p className="text-[#7429d6]">Although my main focus is on Front-end side, I have no problems with learning and working with Back-end or whatever is needed of me, I'm a fast learner and I like to study new things.</p>
          <p className="text-[#7429d6]">I have experience working with particularly small to mid-teams, but I can adapt fast to bigger environments, I have no problems with talking or presenting to multiple people, expressing opinions on meetings and this kinda of stuff, as I did a lot in my previous job, I find myself a particularly good communicator.</p>
          <p className="text-[#7429d6]">Besides all the technical stuff, I really enjoy video games it's my favorite hobby, I also love dogs, going to the gym, playing card games (Pokémon, Yu-Gi-Oh sometimes), music, movies, read mangas and in the future I want to explore the game developing area as a hobby, as I have a bunch of projects in my head. </p>
          <p className="text-[#7429d6]">Well, I hope you like what you will see in my portfolio ! ;) </p>
        </div>
      </div>
    </div>
  );
}
