import react from "react"
import "./_radioBotton.scss"
export const Radio = ({categoria,name,value,text,onFormUpdate}) => {
    return(
    <div>
        <label for={value} className='container-radioBotton'>{text}
            <input
                type="radio"
                id={value}
                value={value}
                checked={categoria === value}
                onChange={onFormUpdate}
                name={name}
            />
            <span className="checkmark"></span>
        </label>
    </div>)
}