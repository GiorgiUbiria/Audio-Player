import { createClient } from "@/utils/supabase/server";
import AvatarDropdown from "./avatar-dropdown";

const HeaderAvatar = async () => {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  const user = data.user

  console.log(user)

  return <AvatarDropdown user={user} />;
};

export default HeaderAvatar;
