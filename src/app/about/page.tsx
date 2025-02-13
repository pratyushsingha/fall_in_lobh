import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Github, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Team Member 1",
      github: "https://github.com/member1",
      role: "Frontend Developer",
    },
    {
      name: "Team Member 2",
      github: "https://github.com/member2",
      role: "UI/UX Designer",
    },
    {
      name: "Team Member x",
      github: "https://github.com/member2",
      role: "creative Designer",
    },
    // Add more team members as needed
  ];

  return (
    <div className="min-h-screen ">
      

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Our Project</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Valentine's Templates is a delightful collection of interactive Valentine's Day cards. Our project aims to spread love and joy through creative digital expressions.
                Each template is carefully crafted to create memorable Valentine's moments.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <Link href={member.github} className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                    GitHub Profile
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Project Repository</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <p className="text-lg text-gray-600 mb-4">Check out our project on GitHub! Feel free to contribute, report issues, or star the repository.</p>
              <Link
                href="https://github.com/your-username/valentine-templates"
                className="inline-flex items-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </Link>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Technologies Used</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"].map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-600">
        <p>
          Made with <Heart className="w-4 h-4 inline text-pink-500" /> for Valentine's Day {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
