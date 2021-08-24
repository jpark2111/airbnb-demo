import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ exploreData, liveData }) {
  const mapExploreData = (item, index) => {
    return (
      <SmallCard
        key={index}
        img={item.img}
        location={item.location}
        distance={item.distance}
      />
    );
  };

  const mapLiveData = (item, index) => {
    return <MediumCard key={index} img={item.img} title={item.title} />;
  };
  const smallCards = exploreData?.map(mapExploreData);

  const mediumCards = liveData?.map(mapLiveData);
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-20">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {smallCards}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3">
            {mediumCards}
          </div>
          <section className="relative py-16">
            <LargeCard
              img="https://links.papareact.com/4cj"
              title="The Greatest Outdoors"
              description="Wishlists curated by airbnb."
              buttonText="Get inspired"
            />
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const liveData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      liveData,
    },
  };
}
