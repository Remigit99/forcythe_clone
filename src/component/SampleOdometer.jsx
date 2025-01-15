/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import "../styles/odometerStyle.css"


const SampleOdometer= ({num}) => {
    const [value, setValue] = useState(num);

    useEffect(() => {
        const timeoutId = setTimeout(() => setValue(num.split('').reverse().join('')), 2000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    return <Odometer value={value}  />;
}

export default SampleOdometer;