import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import SignUpForm from "./SignUpForm";

export default async function Page() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return (
    <SignUpForm />
  );
}
