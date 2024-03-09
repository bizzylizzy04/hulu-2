import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Results from "@/components/Results";
import requests from "@/utils/requests";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ results }) {
  return (
    <div>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then(res => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}

// Next.js, Tailwind CSS, Mobile Responsive, TMDB backend API Requests
// Style for Moible First Development, then use special break points to change the sizes for different screen sizes