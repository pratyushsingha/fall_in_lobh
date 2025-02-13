"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Clipboard } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const PreviewPage = () => {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center  p-6">
      {showConfetti && <Confetti width={width} height={height} />}

      <Card className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-lg w-full text-center shadow-2xl">
        <CardTitle>
          <h1 className="text-4xl font-bold mb-4">🎉 Congratulations! 🎉</h1>
        </CardTitle>
        <CardContent>
          <p className="text-lg mb-6">
            Your website is live! Share it with the world:
          </p>
          <div className="flex justify-center items-center space-x-3">
            <div className="bg-white/30  rounded-lg p-4 mb-6">
              <p className="text-xl font-mono break-all">{url}</p>
            </div>
            <Button variant="ghost" className="self-center mb-4">
              <Clipboard />
            </Button>
          </div>

          <a
            href={url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg hover:bg-purple-100 transition-all duration-300 transform hover:scale-105"
          >
            Visit Your Website
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreviewPage;
