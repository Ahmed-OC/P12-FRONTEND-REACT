import style from "./KeyData.module.scss";

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

export default KeyData;