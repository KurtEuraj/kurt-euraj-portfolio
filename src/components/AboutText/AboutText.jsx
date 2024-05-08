import "./AboutText.scss"

function AboutText() {

    return (
        <div className="about-text">
            <div className="about-text__wrapper">
                <h1 className="about-text__heading">Who am I? 🤔</h1>
                <div className="about-text__body-wrapper">
                    <p className="about-text__body">
                        I'm a developer with a keen eye and a strong attention to detail. I strive to create visually appealing and functionally sound applications. Starting my development journey in 2020, driven by sheer curiosity, immediately I knew this was where I belong. My mission is to make applications that simplify tasks for everyone.
                    </p>
                    <p className="about-text__body">
                        I've always been an artist at heart. Before transitioning to software development, my background was in music production. To this day, I still make music occasionally when i'm feeling inspired.
                    </p>
                    <p className="about-text__body">
                    Throughout my high school days, I was hugely involved in theatre. Taking on multiple lead roles and was accepted into George Brown's Acting in Media program.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutText