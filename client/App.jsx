import "bootstrap/dist/css/bootstrap.min.css"
import TopBar from "../frontend/topbar"
import { StrictMode } from "react"
function App() {
  const categories = [
    { name: "Textiles", img: "https://via.placeholder.com/300x200?text=Textiles" },
    { name: "Electronics", img: "https://via.placeholder.com/300x200?text=Electronics" },
    { name: "Furniture", img: "https://via.placeholder.com/300x200?text=Furniture" },
    { name: "Automotive", img: "https://via.placeholder.com/300x200?text=Automotive" },
    { name: "Food & Beverages", img: "https://via.placeholder.com/300x200?text=Food" },
    { name: "Chemicals", img: "https://via.placeholder.com/300x200?text=Chemicals" },
  ];
  return (
    <StrictMode>
      <TopBar></TopBar>
      <div className="container my-5">
      <h2 className="mb-4 text-center fw-bold">Explore Categories</h2>
      <div className="row g-4">
        {categories.map((category, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img src={category.img} className="card-img-top" alt={category.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{category.name}</h5>
                <a href={`/categories/${category.name.toLowerCase()}`} className="btn btn-outline-primary">
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </StrictMode>
  )
}

export default App
