import './articles.css'
import Card from '../Card/card'
import ARTICLES from './../../data/articles.json'

export default function Articles() {
  return (
    <section className='articles-section'>
    <div className="article-title">
      <h2>
        Articles <span style={{ color: "#11284A", fontSize: "3rem", paddingLeft: "8px" }}>❯</span>
      </h2>
      <h5 className='articleSubtitle'>Create a Medium account now to join our team and add your own articles</h5>
    </div>
    
    <div className="article-container" id='articles'>
        {ARTICLES.map((project, index) => (
        <div className="article-card" key={index}>
            <Card
                image={project.image}
                title={project.title}
                description={project.description}
            />
            </div>
        ))}
    </div>
  </section>
  )
}
