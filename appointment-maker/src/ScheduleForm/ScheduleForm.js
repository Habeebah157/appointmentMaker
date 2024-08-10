import DateTimePicker from 'react-datetime-picker'
import './ScheduleForm.css'
function ScheduleForm(){
    return(
    <div className='scheduleForm_form'>
        <form className='form'>
            <p className='scheduleForm_header'><b>Make an appointment: </b></p>
            <label className='scheduleForm_item'>
                <p className='scheduleForm__item_title'>Name:</p>
                <input type="text" name="name"/>
            </label>
            <label className='scheduleForm_item'>
                <p className='scheduleForm__item_title'>Time:</p>
                <input aria-label="Date and time" type="datetime-local" />
            </label>
        
            <label className='scheduleForm_item'>
                <p className='scheduleForm__item_title'>Purpose of meeting: </p>
                <input type="text" name='purpose'/>
            </label>
      
            <input className='scheduleForm_item'type="submit" />
      
        </form>
    </div>
    )
    

}
export default ScheduleForm;