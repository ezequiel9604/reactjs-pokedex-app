
import "./scss-styles/styles.scss";

function Header(props) {

    function onChangeName(e){
        const name = e.target.value;
        props.onChangePokemonByName(name);
    }

    return (
        <header className="main_header">
            <div className="main_header_ctn">
                <select value={props.selectedName} onChange={onChangeName}>
                    {props.names.map((current, index) => {
                        return <option value={current} key={index}>{current}</option>
                    })}
                </select>
            </div>
        </header>
    );
}

export default Header;
