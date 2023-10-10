import React, { useState } from 'react'
import PlaceCard from './components/PlaceCard'
import headerImage from "./assets/header.jpg"
import Paginationn from './components/Pagination'
import { Typography } from '@mui/material'
import Loader from './components/Loader'
const Home = () => {
  const [loading,setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  },2000);

  if(loading) return <Loader/>;
  return (
    <div >
      {/* <img src={headerImage} style={{width:"100%",marginTop:"20px"}} /> */}
      <div style={{ display: "flex", gap: "40px", margin: "50px 50px 100px 50px", flexWrap: "wrap", justifyContent: "center" }}>
        <PlaceCard imageLink={"https://www.fodors.com/wp-content/uploads/2019/01/Maldives2.gif"} title={"Maldives"}></PlaceCard>
        <PlaceCard imageLink={"https://i.pinimg.com/originals/11/3c/aa/113caaee58e59e3ea2c6d964f91e1770.jpg"} title={"Upaipur"}></PlaceCard>
        <PlaceCard imageLink={"https://www.indiatravelblog.net/wp-content/uploads/2010/04/The-Gwalior-Fort.jpg"} title={"Gwalior"}></PlaceCard>
        <PlaceCard imageLink={"https://res.cloudinary.com/tourhq/image/upload/c_fill,f_auto,fl_progressive,g_auto,q_auto:best/hbkj1m1krnshjf5zyrlw"} title={"Jaipur"}></PlaceCard>
        <PlaceCard imageLink={"https://th.bing.com/th/id/OIP.jWJ0UUluSEaVjLmgfeFObAHaE7?pid=ImgDet&rs=1"} title={"Mysore"}></PlaceCard>
        <PlaceCard imageLink={"https://th.bing.com/th/id/OIP.oTUjnlAlPdhTSqcaqDs_YQHaE8?pid=ImgDet&rs=1"} title={"Pachmarhi"}></PlaceCard>
        <PlaceCard imageLink={"https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/09/Best-time-to-visit-Agra-3.jpg"} title={"Agra"}></PlaceCard>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "100px" }}>
        <Paginationn></Paginationn>
      </div>
      <Typography style={{ display: "flex", justifyContent: "center" }} >copyright ©️ 2023</Typography>
    </div>
  )
}

export default Home