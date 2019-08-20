import React from 'react';

const Config = props => {
    const { name, datas, addConfig, buttonColor, disabled } = props;
    const columns = (12 / datas.length)
    const classes = "col-" + columns + " text-center";
    const buttonClass = "text-uppercase btn btn-sm m-2 btn-" + buttonColor;
    return (
        <div>
            <div className="row">{<p>Select {name}</p>}</div>
            <div className="row">
                {datas.map(data => (
                    <div key={data} className={classes}>
                        <button className={buttonClass} name={name} value={data} onClick={addConfig} disabled={disabled}>{data}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Config;

