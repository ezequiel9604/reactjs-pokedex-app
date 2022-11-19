import { useContext, createContext } from "react";
import UserContext from "../context";
import "./scss-styles/styles.scss";

function Section(props) {

    const user = useContext(UserContext)

    console.log(user)

    return ( 
        <section className="main_section">
            <div className="main_section_ctn">

                <h4>{props.name}</h4>

                <figure>
                    <img src={require(`../Assets/imgs/${props.images[0]}`)} alt="" />
                </figure>

                <p>{props.description}</p>

                <h5>Evolutions:</h5>

                { props.images.length === 3 ?
                    <div className="main_section_ctn_evolutions">
                        <figure>
                            <img src={require(`../Assets/imgs/${props.images[0]}`)} alt="" />
                        </figure>
                        <figure>
                            <img src={require(`../Assets/imgs/${props.images[1]}`)} alt="" />
                        </figure>
                        <figure>
                            <img src={require(`../Assets/imgs/${props.images[2]}`)} alt="" />
                        </figure>
                    </div>
                    : props.images.length === 2 ?
                    <div className="main_section_ctn_evolutions">
                        <figure>
                            <img src={require(`../Assets/imgs/${props.images[0]}`)} alt="" />
                        </figure>
                        <figure>
                            <img src={require(`../Assets/imgs/${props.images[1]}`)} alt="" />
                        </figure>
                    </div>
                    :
                    <div className="main_section_ctn_evolutions">
                        <figure>
                            <img src={require(`../Assets/imgs/${props.images[0]}`)} alt="" />
                        </figure>
                    </div>
                }

            </div>
        </section>
    );
}

export default Section;