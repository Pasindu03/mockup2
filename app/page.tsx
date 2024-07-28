import Hero from "@/components/Hero";
import Channels from "@/components/Channels";
import TVShows from "@/components/TVShows";
import Live from "@/components/Live";
import Movies from "@/components/Movies";
import MyList from "@/components/MyList";

export default function Home() {
  return (
      <>
          <Hero />
          <Channels/>
          <TVShows />
          <Live />
          <Movies />
          <MyList />
      </>
    );
}
