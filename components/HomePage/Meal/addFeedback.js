import AddFeedbackModal from "../../UI/AddFeedbackModal";
import DoneIcon from '@mui/icons-material/Done';

function AddFeedback () {
  return (
    <AddFeedbackModal>
        <DoneIcon />
        <span style={{ marginLeft:'15px' }}>新增商品成功 ！</span>
    </AddFeedbackModal>
  )
}

export default AddFeedback;