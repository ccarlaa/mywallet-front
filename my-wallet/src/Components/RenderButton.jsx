import Loading from "./Loading.jsx"

export default function RenderButton(props) {
    const { state, text } = props;
    if(state === true){
        return (
            <Loading />
        )
    }if(state === false){
        return (
            <p>{text}</p>
        )
    }
}
