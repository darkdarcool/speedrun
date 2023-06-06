import Client from "./client.ts";

export default Client;

if (import.meta.main) {
  const client = new Client();
  const users = client.users;

  const user = await users.lookup({ name: 'darkdarcool' });
  console.log(user[0].location.region!.names);
}