"use client";
import Temp1 from "@/components/template/Temp1";
import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Temp2 from "@/components/template/Temp2";
const messages = [
  `Welcome, ok 👑`,
  `Your presence brightens my day...`,
  `Every moment is magical ✨`,
  `You're absolutely incredible 🌟`,
  `Together, we create perfection 🎵`,
  `Will you be my Valentine? 🌹`,
];

const moods = [
  "superHappy",
  "excited",
  "happy",
  "hopeful",
  "nervous",
  "question",
];

const noButtonMessages = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?",
  "Wouldn't you reconsider?",
];

export default function Home() {
  const { subdomain } = useParams();
  const router = useRouter();
  console.log(subdomain);
  const [siteDetails, setSiteDetails] = useState({});
  const getSiteDetails = async () => {
    try {
      const response = await axios.get(`/api/website?query=${subdomain}`);
      console.log(response.data.website);
      setSiteDetails(response.data.website);
    } catch (error) {
      console.error("Error fetching site details:", error);
      router.push("/404");
    }
  };

  useEffect(() => {
    getSiteDetails();
  }, []);
  const celebrationMediaUrl =
    "https://media.giphy.com/media/3o7TKz9bX9v9KzCnXK/giphy.gif";
  const celebrationMessage =
    "Congratulations! You have reached the end of this page! 🎉";
  return (
    <Temp2
      messages={siteDetails?.messages}
      moods={siteDetails?.moods}
      prev={false}
      noButtonMessages={siteDetails?.noButtonMessages}
      celebrationMediaUrl={siteDetails?.celebrationMediaUrl}
      celebrationMessage={siteDetails?.celebrationMessage}
    />
  );
}
