
import "./scss-styles/styles.scss";

function Section(props) {
    return ( 
        <section className="main_section">
            <div className="main_section_ctn">

                <h4>{props.name}</h4>

                <figure>
                    <img src={require('../Assets/imgs/'+props.images[0])} alt="" />
                </figure>

                <p>{props.description}</p>

            </div>
        </section>
    );
}

export default Section;