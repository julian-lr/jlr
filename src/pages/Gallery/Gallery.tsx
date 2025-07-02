import styles from './Gallery.module.scss'

const projects = [
  {
    title: 'Web Development',
    description: 'Final project built during the CoderHouse Web Development course, showcasing responsive layouts and modern HTML, CSS, and SCSS techniques.',
    url: 'https://github.com/julian-lr/Web-Development-CH-JLR',
    image: '/img/previews/preview-ch-wd.png',
  },
  {
    title: 'JavaScript',
    description: 'Final project developed as part of the CoderHouse JavaScript course, focused on core JavaScript concepts, DOM manipulation, and interactive web features.',
    url: 'https://github.com/julian-lr/JavaScript-CH-JLR',
    image: '/img/previews/preview-ch-js.png',
  },
  {
    title: 'ReactJS',
    description: 'Final project built during the CoderHouse ReactJS course, using JavaScript and focused on component-based architecture and state management.',
    url: 'https://github.com/julian-lr/ReactJS-CH-JLR',
    image: '/img/previews/preview-ch-react.png',
  },
  {
    title: 'Email Demo',
    description: 'A personal project demonstrating the fundamentals of email design and development, including layout and basic interactivity.',
    url: 'https://github.com/julian-lr/Email-demo-JLR',
    image: '/img/previews/preview-e-mail.png',
  },
  {
    title: 'Allnighter v2',
    description: 'A legacy tool for locating special characters in HTML emails—now obsolete, as modern platforms handle this automatically.',
    url: 'https://github.com/julian-lr/allnighter-v2',
    image: '/img/previews/preview-allnighter.png',
  },
]

function Gallery() {
  return (
    <section className={styles.gallery}>
      <h2>Gallery</h2>
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={project.image}
              alt={project.title + ' preview'}
              className={styles.preview}
            />
            <div className={styles.cardText}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Gallery
