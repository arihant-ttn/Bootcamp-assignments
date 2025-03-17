import RevalidateButton from "@/components/RevlaidateButton";
export async function getForceCacheData() {
  const res = await fetch('http://localhost:3000/api/users', {
    cache: 'force-cache', 
    next:{tags : ["users"]}
  });
  return res.json();
}

export async function getNoStoreData() {
  const res = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store', 
    
  });
  return res.json();
}

export default async function MemoPage() {
  const forceCacheData = await getForceCacheData();
  const noStoreData = await getNoStoreData();

  return (
    <div className="p-6">
      


      <div className="mb-6 p-4 border rounded-lg">
        <h2 className="text-lg font-semibold">Force-Cache</h2>
    
        <ul className="list-disc ml-6">
          {forceCacheData.users.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>


      <div className="p-4 border rounded-lg">
        <h2 className="text-lg font-semibold">No-Store</h2>
        <ul className="list-disc ml-6">
          {noStoreData.users.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
      <RevalidateButton/>
    </div>
  );
}
