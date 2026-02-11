import Card from '@components/card/Card';
import projectsList from './projectsList';
import styles from './Projects.module.css';

export default function Projects() {
    return (
        <section className={styles.project} id="projects">
            <h1 className={styles.projectsTitle}>Projects</h1>

            <div className={styles.gridContainer}>
                {projectsList.map((project) => (
                    <Card
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tools={project.tools}
                    />
                ))}
            </div>
        </section>
    );
}
