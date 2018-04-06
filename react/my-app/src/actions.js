const DECREASE = "DECREASE";
const decrease = () => ({
    type: DECREASE
});

const INCREASE = "INCREASE";
const increase = () => ({
    type: INCREASE
});

export default {
    DECREASE, decrease,
    INCREASE, increase
}