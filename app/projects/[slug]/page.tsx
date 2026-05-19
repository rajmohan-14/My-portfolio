import data from '@/public/project-data.json';
import PageTitle from '@/components/PageTitle';
import { Badge, Button } from '@/components/aspect-ui';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = data.find((item: any) => item.slug === slug);

  if (!project) {
    return (
      <main className="w-full overflow-hidden cursor-none">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 dark:text-white">Project Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/projects" className="text-blue-600 hover:text-blue-800 font-medium">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full overflow-hidden cursor-none">
      <div className="mx-auto mt-4 w-full rounded-t-3xl background bg-[#f1f6fb] pb-12 pt-6 shadow shadow-normalText/25 drop-shadow-md backdrop-blur-3xl dark:bg-[#262626] lg:max-w-[1440px]">
        <PageTitle
          title={project.title}
          className="text-wrap pt-10 px-3 flex justify-center w-full text-2xl"
        />
      </div>
      
      <div className="mx-auto w-full lg:max-w-[1440px] px-4 py-8">
        <div className="bg-white dark:bg-[#1a1a1a] rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex gap-2 mb-4">
            {project.project_type?.map((type: string) => (
              <Badge key={type} variant="outline" className="text-xs">
                {type}
              </Badge>
            ))}
          </div>

          <Badge variant="default" className="mb-6">
            {project.project_status === 'I' ? 'In Progress' : project.project_status}
          </Badge>

          <div className="flex gap-4 mb-8">
            {project.project_url && (
              <Link href={project.project_url} target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View Live Demo
                </Button>
              </Link>
            )}
            {project.github_repo && (
              <Link href={project.github_repo} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  View Source
                </Button>
              </Link>
            )}
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300">{project.short_description}</p>
          </div>

          {project.key_features && project.key_features.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.key_features.map((feature: any, idx: number) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <div>
                      <p className="font-semibold">{feature.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.tech_use && project.tech_use.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech_use.map((tech: string) => (
                  <Badge key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
