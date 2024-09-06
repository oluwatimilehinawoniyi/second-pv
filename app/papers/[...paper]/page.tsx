import { GridLayout } from "@/app/components";
import Navigation from "@/app/components/common/Navigation";
import { FileStack } from "lucide-react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <GridLayout
      leftBar={
        <div className="flex h-full w-full flex-col items-center pt-20">
          <Navigation
            icon={<FileStack size={16} />}
            title="papers"
            to="/papers"
          />
        </div>
      }
      display={
        <div className="pt-20">
          <h1>My Post: {params.slug}</h1>
        </div>
      }
    />
  );
}
