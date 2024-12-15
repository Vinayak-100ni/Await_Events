import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <><section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 xl:pl-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className=" h2-bold md:h1-bold">Join, Organize, Enjoy: Your Events, Our Community! </h1>
          <p className="p-regular-15 md:p-regular-20">Await-Events is a application that streamlines the process of booking sports facilities, providing a comprehensive platform for event management and enhancing the user experience with real-time features.</p>
          <Button asChild className="button w-full sm:w-fit" size="lg" >
            <Link href='#events'>Explore Now</Link>
          </Button>
        </div>
        <Image src="/assets/images/hero.png"
          alt="hero"
          width={1000}
          height={1000}
          className="rounded-xl max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]  " />
      </div>
    </section>
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12" id="events">
        <h2 className="md:h2-bold h3-bold"> Trusted By <br /> Thousands of Events</h2>
        <div className="flex flex-col w-full gap-5 md:flex-row">
          Search CategoryFilter
        </div>
      </section>
    </>
  );
}
