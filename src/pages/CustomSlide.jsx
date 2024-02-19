function Customslide (props){
    const joke=props.attachments[0].text;
    return (
        <div>
            <h2>{joke}</h2>
        </div>
    )
}
export default Customslide