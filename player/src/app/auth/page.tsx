import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import LoginForm from "./loginForm";

export default async function Page() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  if (data.user) {
    redirect("/");
  }

  return <LoginForm />;
}
