import DateTimePicker from 'react-datetime-picker'
import './ScheduleForm.css'
function ScheduleForm(){
    return(
    <div>
        <form className='form'>
            <label>
                Name:
                <input type="text" name="name"/>
            </label>
            <br></br>
            
            <label>
                Time:
                <input aria-label="Date and time" type="datetime-local" />
            </label>
            <br></br>
            <label>
                Purpose of meeting
                <input type="text" name='purpose'/>
            </label>
            <br></br>
            <input type="submit" />
            <br></br>
        </form>
    </div>
    )
    

}
export default ScheduleForm;