import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: countries } = await supabase.from("countries").select();
  console.log(countries)

  return (
    <ul className="my-auto">
      {countries?.map((country) => (
        <li style={{color: 'white'}} key={country.id}>{country.name}</li>
      ))}
    </ul>
  );
}