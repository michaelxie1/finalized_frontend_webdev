//implemented break statements to space out each of the fomrs.
const NewEmployeeView = (props) => {
    const {handleChange, handleSubmit, error } = props;
    return (
        <div>
   
          <div className="header">
            New Employee
          </div>
          
          <br/>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label> First Name: </label>
            <input type="text" name="firstname" onChange ={(e) => handleChange(e)} />
            <br/>
            <label> Last Name: </label>
            <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
            <br/>
            <label> Department: </label>
            <input type="text" name="department" onChange={(e) => handleChange(e)} />
            <br/>
            <button type="submit">
                Submit
            </button>
          </form>
          {error!=="" && <p>{error}</p>}
        </div>
        
      )
    }
    
    export default NewEmployeeView;
    