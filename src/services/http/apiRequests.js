export async function getHostelsList() {
  const res = await fetch("http://localhost:3000/hostels");
  const data = await res.json();
  return data;
}
