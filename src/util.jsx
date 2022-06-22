export default function formatCarrency(num){
    return "$" + Number(num.toFixed(1).toLocaleString() + " ")
}