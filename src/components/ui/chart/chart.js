import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { Chart as DevChart, Series, CommonSeriesSettings, Legend, Export } from 'devextreme-react/chart';
const Chart = ({dataSource, title, argumentField, series}) => {
    return (
        <DevChart
            id="chart"
            palette="Soft"
            title= {title}
            dataSource={dataSource}
        >
            <CommonSeriesSettings
                argumentField= {argumentField}
                type="bar"
                ignoreEmptyPoints={true}
            />
            {series.map((val,i)=>
            <Series key={i} valueField= {val.valueField} name= {val.nameField} />
            )}
            <Legend verticalAlignment="bottom" horizontalAlignment="center" />
            <Export enabled={true} />
        </DevChart>
    );
}

export default Chart