import style from "./City.module.css"

const County = ({counties , selectedCounties , updateCounties , setFilleterFlag}) => {

    const handelChange = (e) => {
        const {name, value} = e.target;
        if(value === "all") {
            const selectedCounties = counties.map(({county}) => county)
            updateCounties(selectedCounties)
            setFilleterFlag(true)   
            return;
        }

        let newArray = [...selectedCounties, value];
        if (selectedCounties.includes(value)) {
            newArray = newArray.filter(item => item !== value);
        } 

        updateCounties(newArray) 
        setFilleterFlag(true)   

        
    }

    return (
        <div className='d-flex flex-wrap py-4 px-5'>
            <div className="form-check py-2 px-4">
                <input 
                    onChange={handelChange}
                    className={`${style["check-box"]} form-check-input`} 
                    type="checkbox" 
                    value="all" 
                    checked =  {selectedCounties?.length === counties?.length ? true : false} 
                    id = 'flexCheckDefault'
                />
                <label className="form-check-label" htmlFor= 'flexCheckDefault'>
                    <span className={`${style["check-box-icon"]} ${style["check-box-icon-all"]}`}></span>
                    All
                </label>
            </div>
            {counties?.map(({county , id}) => {
                return(
                    <div key={id} className="form-check py-2 px-4">
                        <input 
                            onChange={handelChange}
                            className={`${style["check-box"]} form-check-input`}
                            type="checkbox" 
                            value={county} 
                            id = {`flexCheckDefault-${id}`} 
                            checked =  {selectedCounties?.includes(county) ? true : false} 
                        />
                        <label className="form-check-label" htmlFor= {`flexCheckDefault-${id}`}>
                            <span className={`${style["check-box-icon"]}`}></span>
                            {county}
                        </label>
                    </div>
                )
            })}
        </div>
    );
};

export default County