import { courses } from "@/data/courses";
import EditCourseClient from "./EditCourseClient";

export async function generateStaticParams() {
  return courses.map((c) => ({
    id: c.id,
  }));
}

export default function EditCoursePage({ params }: { params: Promise<{ id: string }> }) {
  return <EditCourseClient params={params} />;
}
