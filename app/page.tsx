import Career from "./ui/career/career";
import KeyServices from "./ui/services/services";
import SplashScreen from "./ui/splash/splash";

export default function Home() {
  return (
    <>
      <main className="">
        {/* <section className="fixed bg-red-600 h-screen w-screen z-10 flex"> */}
          
        {/* </section> */}
        <SplashScreen />
        <div>
          <KeyServices />
        </div>

        <div>
          <Career />
        </div>
      </main>
    </>
  );
}
