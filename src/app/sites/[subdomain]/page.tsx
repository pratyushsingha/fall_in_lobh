"use client";
import Temp1 from "@/components/template/Temp1";
import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface SiteDetails {
  title: string;
  messages: string[];
  moods: string[];
  noButtonMessages: string[];
  celebrationMediaUrl: string;
  celebrationMessage: string;
}

export default function Home() {
  const { subdomain } = useParams();
  const router = useRouter();
  console.log(subdomain);

  const [siteDetails, setSiteDetails] = useState<SiteDetails>({
    title: "",
    messages: [],
    moods: [],
    noButtonMessages: [],
    celebrationMediaUrl: "",
    celebrationMessage: "",
  });
  const getSiteDetails = async () => {
    try {
      const response = await axios.get(`/api/website?query=${subdomain}`);
      setSiteDetails(response.data.website);
    } catch (error) {
      console.error("Error fetching site details:", error);
      router.push("/404");
    }
  };

  useEffect(() => {
    getSiteDetails();
  }, []);

  return (
    <Temp1
      title={siteDetails?.title}
      messages={siteDetails?.messages}
      moods={siteDetails?.moods}
      prev={false}
      noButtonMessages={siteDetails?.noButtonMessages}
      celebrationMediaUrl={siteDetails?.celebrationMediaUrl}
      celebrationMessage={siteDetails?.celebrationMessage}
    />
  );
}
