function Remove(props){
    return <div className="footer">
          <p>
          You have {props.length} pending tasks
          </p>

         <button onClick={props.onClick}className="Compl">Clear All</button>
      
         
    </div>
}
export default Remove