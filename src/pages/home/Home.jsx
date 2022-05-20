import Featured from '../../components/featured/Featured'
import FeaturedProperties from '../../components/featuredProjects/FeaturedProperties'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/propertyList/PropertyList'
import './home.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitles">Homes guests love</h1>
        <FeaturedProperties />
      </div>
    </div>
  )
}
