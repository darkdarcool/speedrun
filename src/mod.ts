import Client from "./client.ts";

export default Client;

if (import.meta.main) {
  const client = new Client("jb4d8m7rx6sc6pgdbz07nu7p0");
  const users = client.users;

  // const user = await users.lookup({ name: 'darkdarcool' });
  // console.log(user[0].location.region!.names);
  const user = await users.pbs("joo25l3j", { top: 1 });
  console.log(user[0].run.game);
}