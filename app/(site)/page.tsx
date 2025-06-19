import { getProjects } from "@/sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";

const ImageLink = "/satchlogo.png";
const LilianImage = "/gordonsetter.JPG";

export default async function Home() {
  const projects = await getProjects();
  const thisYear = new Date().getFullYear();
  console.log(thisYear);

  return (
    <div>
      <Image src={ImageLink} alt='' width={1500} height={100} />
      <Image
        src={LilianImage}
        alt=''
        width={500}
        height={600}
        className='m-auto mt-8 rounded-3xl'
      />

      {/* <h1 className='text-7xl font-extrabold '>Satch Valdres</h1> */}

      {/*<p className='mt-3 text-xl text-gray-600'>
        Satch Valdres eies og drives av Lillian Randby. Butikken & Salongen ble
        offisielt åpnet 6 desember 2023.
      </p>
      <p className='mt-3 text-xl text-gray-600'>
        I butikken tilbyr vi et godt utvalg av utstyr, leker og fòr til dine
        4-beinte venner, og i salongen tar vi oss godt av vask, stell og klipp
        av hunder og katter i alle raser og størrelser.
      </p>*/}

      <h2 className='mt-24 text-center font-bold text-gray-700 text-3xl'>
        Et utvalg av våre tjenester
      </h2>
      <div className='mt-5 mb-5 grid md:grid-cols-2 lg:grid-cols3 gap-8'>
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className='border-2 border-gray-500 rounded-lg p-2 hover:scale-105 hover:border-blue-500 transition'>
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className='object-cover rounded-lg border border-gray-500'
              />
            )}

            <div className='mt-2 font-extrabold bg-black bg-clip-text text-transparent'>
              {project.name}
            </div>
          </Link>
        ))}
      </div>

      <div>
        <h2 className='mt-24 text-center font-bold text-gray-700 text-3xl'>
          Samarbeidspartnere på fòr og utstyr
        </h2>
        <div className='mt-5 mb-5 grid md:grid-cols-4 lg:grid-cols3 gap-8 items-center  justify-center md:justify-start'>
          <Image
            src={"/eukanuba.png"}
            alt={"Eukanubalogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/farmina.png"}
            alt={"Farminalogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/provit.png"}
            alt={"Provitlogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/kingsmoor.jpg"}
            alt={"Kingsmoorlogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/vom.png"}
            alt={"Vomlogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/hurttalogovitbg.jpg"}
            alt={"Hurttalogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/kong.png"}
            alt={"Vomlogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
          <Image
            src={"/nonstop.png"}
            alt={"Nonstoplogo"}
            width={180}
            height={30}
            className='object-cover rounded-lg border border-gray-50 hover:scale-110'
          />
        </div>
      </div>

      <footer className='w-full my-10  text-center'>
        <i className='fa fa-copyright text-center ' aria-hidden='true'>
          Copyright {thisYear.toString()} Valdres Hundesalong | Built with ❤️ by
          Tvela AS
        </i>
      </footer>
    </div>
  );
}
