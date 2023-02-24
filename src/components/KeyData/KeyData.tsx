import style from "./KeyData.module.scss";
import PropTypes from "prop-types";

/**
 * @description Component KeyData permit to display a KeyData with user's data
 * @param {Object} props - Props
 * @param {string} props.icon - icon of the keyData
 * @param {string} props.type - type of the keyData
 * @param {string} props.value - value of the keyData
 * @param {string} props.backgroundColor - background color of the keyData
 */

function KeyData({ icon, type, value, backgroundColor }: { icon: string, type: string, value: string, backgroundColor: string }) {
    return (
        <div className={style.KeyData}>
            <div className={style.KeyData_IconContainer} style={{
                backgroundColor: backgroundColor
            }}>
                <img src={icon} alt={type} />
            </div>
            <div className={style.KeyData_TextContainer}>
                <p className={style.KeyData_TextContainer_Value}>{value}</p>
                <p className={style.KeyData_TextContainer_Type}>{type}</p>
            </div>
        </div>
    );
}

KeyData.propTypes = {
    icon: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
};

export default KeyData;