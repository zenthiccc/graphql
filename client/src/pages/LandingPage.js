import React from "react";
import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";
import { useQuery, gql } from "@apollo/client";

const FETCH_ANIMALS = gql`
  {
    animals {
      image
      id
      title
      price
      slug
      image
      star
    }
  }
`;
function LandingPage() {
  const { loading, error, data } = useQuery(FETCH_ANIMALS);
  console.log(error)
  if (loading) return <div>Loading...</div>;

  if (error) return <div>Some error happened</div>;
  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
    </div>
  );
}

export default LandingPage;
