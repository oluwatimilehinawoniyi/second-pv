import { Metadata } from "next";
import PaperPage from "@/app/components/UI/PaperPage";

export const metadata: Metadata = {
  title: "Papers",
  description: "Welcome to my blogsite!",
};

export default function Blog() {
  return <PaperPage />;
}
