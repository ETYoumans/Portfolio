import './page.css';

const Page = ({
    title,
    subtitle,
    image,
    section1,
    details1,
    section2,
    details2,
    github
}) => {
    return (
        <div className="page">
            <h1>
                {title}
            </h1>
            <h2>
                {subtitle}
            </h2>
            <div className = "img-container">
                <img src={image} className="page-image" />
            </div>

            <div className="hr-bar"></div>

            <h4>
                {section1}
            </h4>
            {details1}

            <div className="hr-bar"></div>

            <h4>
                {section2}
            </h4>

            {details2}


        </div>
    );
}

export default Page;