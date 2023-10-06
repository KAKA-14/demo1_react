import "./style.css"
function F1() {
    const myStyle = {
        color: "blue",
        backgroundColor: "black"
    }
    return (
        <div>
            <h1 style={{color:"red"}} >Inline Style</h1>
            <h1 style={myStyle}>Internal Styling</h1>
            <h1 className="c1">External Styling</h1>
            <h1 className="text-center text-success bg-dark">Bootstrap style</h1>
        </div>
    )
}
export default F1;