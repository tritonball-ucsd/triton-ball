import './articles.css'
import Card from '../Card/card'
import ARTICLES from './../../data/articles.json'

export default function Articles() {
  return (
    <section className='articles-section' id='articles'>
    <div className="article-title">
      <h2>
        ARTICLES <span style={{ color: "#11284A", fontSize: "3rem", paddingLeft: "8px" }}>❯</span>
      </h2>
      <h5 className='articleSubtitle'>Follow Triton Ball on <a id="medium-link" href="https://medium.com/@tritonball" target="_blank" rel="noopener noreferrer">Medium</a> to see articles written by members! Create a Medium account to join our team and add your own articles</h5>
      <h5 className='articleSubtitle'>Check out the featured articles for the quarter below!</h5>
    </div>
    
    <div className="article-container">
        {ARTICLES.map((project, index) => (
        <div className="article-card" key={index}>
            <Card
                image={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
            />
            </div>
        ))}
    </div>
  </section>
  )
}
