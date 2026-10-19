export type Student = {
  id: string; name: string; department: string; departmentSlug: string;
  year: number; email: string; initials: string; color: string;
  enrolled: string; about: string; subjects: { code: string; title: string; credits: number }[];
  specialization: string;
};
export type Department = {
  slug: string; name: string; description: string; specializations: number; enrolled: number;
  icon: "code" | "design" | "business";
};
export type Specialization = {
  slug: string; name: string; departmentSlug: string; description: string;
  track: string; lead: string; lab: string; enrollment: number; cycle: string;
};