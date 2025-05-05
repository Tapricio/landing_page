import { useQuery } from "@tanstack/react-query";
/* staleTime -> cada cuanto tiempo se vuelve a hacer un fetch, en milisegundos
gcTime -> (garbade collection time) -> cada cuanto quiero que se haga un nuevo fetch, cada cuanto se limpia, por ejemplo si lo quiero siempre es 0
*/
export function AllUsers() {
  const { isPending, error, data } = useQuery({
    queryKey: ["allUsers"],
    staleTime: 1000 * 60 * 30,
    queryFn: () =>
      fetch("https://dummyjson.com/users").then((res) => res.json()),
  });

  if (isPending) return <div>Loading...</div>;

  if (error) <div>{`Ha ocurrido un error ${error.message}`}</div>;

  return (
    <div>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}
