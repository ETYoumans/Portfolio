import './card.css';

const Project = ({
    title,
    image,
    description,
    buzzWords,
    link
}) => {
    return (
        <a className="project" href={link}>
            <img src={image} className="project-image" />
            <div className="project-info">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <div className="buzzWords">{buzzWords}</div>
            </div>
        </a>
    );
}

export default Project;