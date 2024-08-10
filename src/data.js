
export const API_KEY = 'AIzaSyDhczuQm2PP6pdKXmAUwzoHf6bA_MJ5CGY'

export const value_converter = (value) => {
    if(value >= 1000000 ){
        return Math.floor(value/1000000) + "M"

    } else if(value >= 1000) {
        return Math.floor(value/1000) + "K"
    }else {
        return value.toString();
    }
}