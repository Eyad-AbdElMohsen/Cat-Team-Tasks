import axios from 'axios'
import { performance } from 'perf_hooks';

const calcTimeOfRequestInSec = async(url: string) => {
    let timeInSeconds = performance.now();
    await axios.get(url)
    timeInSeconds =(performance.now() - timeInSeconds) / 1000;
    console.log(timeInSeconds, 'second')
    return
}

export default calcTimeOfRequestInSec