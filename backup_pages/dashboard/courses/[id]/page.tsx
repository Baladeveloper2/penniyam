import { courses } from "@/data/courses";
import CoursePlayerClient from "./CoursePlayerClient";

export async function generateStaticParams() {
  return courses.map((c) => ({
    id: c.id,
  }));
}

export default function CoursePlayerPage({ params }: { params: Promise<{ id: string }> }) {
  return <CoursePlayerClient params={params} />;
}
