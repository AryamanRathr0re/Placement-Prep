async function  loadUserData(){
  const res=await fetch("https://jsonplaceholder.typicode.com/users")
  const users=await res.json()
  const sortedUser=users.sort((a,b)=>b.address.city.localeCompare(a.address.city))
  
  console.log(sortedUser)
}

loadUserData()