import { GridLayout } from "@/app/components";
import Navigation from "@/app/components/common/Navigation";
import { FileStack } from "lucide-react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <GridLayout
      leftBar={
        <div className="hidden h-full w-full flex-col items-start pl-20 pt-20 lg:flex">
          <Navigation
            icon={<FileStack size={16} />}
            title="papers"
            to="/papers"
          />
        </div>
      }
      display={
        <div className="pt-20 relative">
          <div className="sticky top-6 mb-6 h-10 bg-background lg:hidden">
            <Navigation
              icon={<FileStack size={16} />}
              title="papers"
              to="/papers"
            />
          </div>

          <h1>My Post: {params.slug}</h1>
        </div>
      }
    />
  );
}
